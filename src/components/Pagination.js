import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
  const globalState = props.globalState
  const posts = globalState.filterData
  const pagePosts = 4
  const pages = posts.length / pagePosts

  let pagesArray = []
  if (posts.length >= 1) {
    for (let number = 1; number <= pages; number++) {
      pagesArray.push(
        <Link to={`/details/${number}`} key={number}>
          {number === 1 ? (
            <li className='active'>{number}</li>
          ) : (
            <li>{number}</li>
          )}
        </Link>
      )
    }
  }

  return (
    <section id='pagination'>
      <div className='row'>
        <ul className='pages'>
          <li>Prev</li>
          {pagesArray}
          <li>next</li>
        </ul>
      </div>
    </section>
  )
}

export default Pagination
