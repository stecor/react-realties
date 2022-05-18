import React from 'react'
import { useParams } from 'react-router-dom'
import ListingsData from '../data/ListingsData'
import Header from './Header'
import PostImage from './detailsComponents/PostImage'
import PostInfo from './detailsComponents/PostInfo'

const Details = () => {
  let params = useParams()

  const getPost = (id) => {
    return ListingsData.find((item) => item.post_id === id)
  }

  const post = getPost(parseInt(params.post_id))

  return (
    <div>
      <Header />
      <section id='content-area'>
        <div
          className='postPage'
          style={{ width: '100', padding: '3rem 4rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>{post.homeType}</h1>
          </div>

          <PostImage post={post} />

          <PostInfo post={post} />
        </div>
      </section>
    </div>
  )
}

export default Details
