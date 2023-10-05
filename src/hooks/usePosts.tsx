import { useEffect, useState } from 'react'
import { CreatePostDTO, PostDTO } from '../types/dto'
import axios from 'axios'

const usePosts = () => {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')

        setPosts(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const createPost = async (newTitle: string, newBody: string) => {
    const newPostBody: CreatePostDTO = {
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    }

    setIsSubmitting(true)
    try {
      const res = await axios.post<PostDTO>('https://jsonplaceholder.typicode.com/posts', newPostBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      console.log(res.data)
    } catch (err) {
      throw new Error('Cannot create post')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { posts, isLoading, isSubmitting, createPost }
}

export default usePosts
