import { ReactNode, createContext, useContext, useState } from 'react'

interface IAuthProviderProps {
  children: ReactNode
  //5.try ReactNode is tsx all in App
}

interface IAuthContextType {
  isLoggedIn: boolean
}
//10.And Then we created interface so build generic about type put after const AuthContext = createContext.......(null)

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}
//11. export const useAuth ตัวนี้จะเหมือนกับ Hook ที่เป็นค่าส่วนกลางทั้งหมด
//1.AuthProvider is role control App (cover All App)
//3. ใส่ {children} => พารามิเตอร์
//4.กำหนด interface
//6.children is all App so we will pass {children} input tag </AuthContext.Provider>
const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(false)
  //1.AuthContext.Provider role is similar HTML TAG
  //7.<AuthContext.Provider>{children}</AuthContext.Provider> เมื่อเราเอา{children} มาไว้ระหว่าง Tag so covered all of App
  //8.เราจะแชร์อะไรเข้าไปใน context บ้าง
  //9.Now if we know what shear value={{ isLoggedIn } so we should created about interface IAuthProviderProps {isLoggedIn: boolean}
  return <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>
}

export default AuthProvider
