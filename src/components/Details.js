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
        <div style={{ display: 'flex' }}>
          <PostImage post={post} style={{ padding: '20px', flex: 1 }} />

          <PostInfo post={post} style={{ padding: '20px', flex: 1 }} />
        </div>
      </section>
    </div>
  )
}

export default Details
