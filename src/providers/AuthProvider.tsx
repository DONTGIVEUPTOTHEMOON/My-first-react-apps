import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface IAuthProviderProps {
  children: ReactNode
  //5.try ReactNode is tsx all in App
}

interface IAuthContextType {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}
//10.And Then we created interface so build generic about type put after const AuthContext = createContext.......(null)

const AuthContext = createContext<IAuthContextType | null>(null)
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}
const token = localStorage.getItem('token')
const user = localStorage.getItem('username')

//11. export const useAuth ตัวนี้จะเหมือนกับ Hook ที่เป็นค่าส่วนกลางทั้งหมด
//1.AuthProvider is role control App (cover All App)
//3. ใส่ {children} => พารามิเตอร์
//4.กำหนด interface
//6.children is all App so we will pass {children} input tag </AuthContext.Provider>
const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }
    try {
      const res = await axios.post<CredentialDTO>('https://api.learnhub.thanayut.in.th/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('username', username)
      setIsLoggedin(true)
      setUsername(username)
    } catch (err) {
      throw new Error('Invalid username or password')
    }
  }
  const logout = () => {
    // localStorage.removeItem('token-info') some item you want to remove something
    localStorage.clear
    setIsLoggedin(false)
    setUsername(null)

    navigate('/')
  }

  //1.AuthContext.Provider role is similar HTML TAG
  //7.<AuthContext.Provider>{children}</AuthContext.Provider> เมื่อเราเอา{children} มาไว้ระหว่าง Tag so covered all of App
  //8.เราจะแชร์อะไรเข้าไปใน context บ้าง
  //9.Now if we know what shear value={{ isLoggedIn } so we should created about interface IAuthProviderProps {isLoggedIn: boolean}
  return <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
