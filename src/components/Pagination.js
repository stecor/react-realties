import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
  const globalState = props.globalState
  const posts = globalState.filterData
  const pagePosts = 8
  const pages = Math.ceil(posts.length / pagePosts)

  let pagesArray = []
  for (let number = 1; number <= pages; number++) {
    pagesArray.push(
      <Link to={`/details/${number}`} key={number}>
        <li>{number}</li>
      </Link>
    )
  }

  return (
    <section id='pagination'>
      <div className='row'>
        <ul className='pages'>
          {pagesArray.length > 0 ? (
            <div>
              <li>next</li>
              {pagesArray}
              <li>Prev</li>
            </div>
          ) : (
            <div>
              <h1 style={{ padding: '50px', margin: 'auto' }}>
                There is nothing here!
              </h1>
            </div>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Pagination
