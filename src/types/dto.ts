export interface PostDTO {
  id: number
  userId: number
  title: string
  body: string
}

export interface CreatePostDTO {
  userId: number
  title: string
  body: string
}
export interface LoginDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}
