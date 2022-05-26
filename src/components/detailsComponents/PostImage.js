import React from 'react'
import ImageGallery from 'react-image-gallery'

const PostImage = (props) => {
  const images = props.post.images

  return (
    <div style={{ width: '800px', margin: '100px' }}>
      <ImageGallery items={images} style={{ borderRadius: '20px' }} />
    </div>
  )
}

export default PostImage
