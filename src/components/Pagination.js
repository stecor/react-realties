import React from 'react'

const Pagination = () => {
  return (
    <section id='pagination'>
      <div className='row'>
        <ul className='pages'>
          <li>Prev</li>
          <li className='active'>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>next</li>
        </ul>
      </div>
    </section>
  )
}

export default Pagination
