import { useEffect, useState } from 'react'
import { PostDTO } from '../types/dto'
import axios from 'axios'

const usePost = (id: string) => {
  const [post, setPost] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO>(`https://jsonplaceholder.typicode.com/posts/${id}`)

        setPost(res.data)
      } catch (err) {
        setError('Data not found')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { post, isLoading, error }
}

export default usePost
