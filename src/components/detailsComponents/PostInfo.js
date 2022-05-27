import React from 'react'

const PostInfo = (props) => {
  const post = props.post

  const formatedPrice = post.price
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')

  const formatedArea = post.floorSpace
    .toFixed(1)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')

  return (
    <div style={{ width: '800px', margin: '100px' }}>
      <img src={post.userImg} alt='userImg' style={{ borderRadius: '15px' }} />
      <p style={{ padding: '10px 0 30px' }}>{post.user}</p>
      <div className='table' style={{ display: 'flex', flexdirection: 'row' }}>
        <div
          className='title'
          style={{
            width: '800px',
            height: '50px',
            border: '1px lightgray solid',
            padding: '20px',
          }}
        >
          Address: {post.address}
        </div>
        <div
          className='Area'
          style={{
            width: '800px',
            height: '50px',
            border: '1px lightgray solid',
            padding: '20px',
          }}
        >
          Area: {formatedArea} sqf
        </div>
        <div
          className='price'
          style={{
            width: '800px',
            height: '50px',
            border: '1px lightgray solid',
            padding: '20px',
          }}
        >
          Price : $ {formatedPrice}
        </div>
      </div>
      <div
        className='info'
        style={{
          width: '800px',
          height: '200px',
          border: '1px lightgray solid',
          backgroundColor: '#c8c8c8',
          padding: '20px',
        }}
      >
        Description: <br />
        <br />
        {post.description}
      </div>
    </div>
  )
}

export default PostInfo
