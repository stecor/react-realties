import React from 'react'

const Pagination = (props) => {
  const globalState = props.globalState
  const posts = globalState.filterData

  var pagesArray = []
  for (var i = 1; i <= posts.length / 4; i++) {
    console.log(i)
    pagesArray.push(<li key={i}>{i}</li>)
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
