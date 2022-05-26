import React from 'react'

const PostInfo = (props) => {
  const post = props.post

  return (
    <div style={{ width: '800px', margin: '100px' }}>
      <img src={post.userImg} alt='userImg' />
      <p>{post.user}</p>
      <div className='table' style={{ display: 'flex', flexdirection: 'row' }}>
        <div
          className='title'
          style={{
            width: '800px',
            height: '50px',
            border: '1px lightgray solid',
          }}
        ></div>
        <div
          className='image'
          style={{
            width: '800px',
            height: '50px',
            border: '1px lightgray solid',
          }}
        ></div>
        <div
          className='price'
          style={{
            width: '800px',
            height: '50px',
            border: '1px lightgray solid',
          }}
        ></div>
      </div>
      <div
        className='info'
        style={{
          width: '800px',
          height: '200px',
          border: '1px lightgray solid',
          backgroundColor: 'lightgray',
        }}
      ></div>
    </div>
  )
}

export default PostInfo
