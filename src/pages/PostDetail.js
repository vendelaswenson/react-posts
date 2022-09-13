import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Post = () => {
  const { id } = useParams()
  const [comments, setComments] = useState('')
  const [post, setPost] = useState('')

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/`)
      .then((response) => setComments(response.data))

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data))
  }, [])

  return (
    <>
      <h1>{post?.title}</h1>
      <h2>{post?.body}</h2>
      <ul>
        {comments &&
          comments.map((user) => {
            if (user.postId === +id) {
              return (
                <li key={user.id}>
                  <h4>{user.name}</h4>
                  <h5>{user.email}</h5>
                  <p>{user.body}</p>
                  <h5>Användare: {user.id}</h5>
                </li>
              )
            }
          })}
      </ul>
    </>
  )
}

export default Post
