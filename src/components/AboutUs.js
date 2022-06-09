import React from 'react'
import AboutImage from './aboutComponents/AboutImage'
import AboutInfo from './aboutComponents/AboutInfo'
import Header from './Header'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section id='content-area'>
        <div style={{ display: 'flex' }}>
          <AboutImage style={{ padding: '20px', flex: 1 }} />

          <AboutInfo style={{ padding: '20px', flex: 1 }} />
        </div>
      </section>
    </div>
  )
}

export default AboutUs
