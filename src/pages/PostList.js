import './PostList.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => setPosts(response.data))
  }, [])

  return (
    <div>
      <h2>Titlar:</h2>
      {posts?.map((post) => (
        <div>
          <Link to={`/posts/${post.id}`} state={post}>
            <h3>{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts
