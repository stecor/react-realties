import React from 'react'

const AboutInfo = () => {
  return (
    <div
      style={{
        width: '800px',
        margin: 'auto',
      }}
    >
      <p style={{ padding: '10px 0 30px' }}>About realties.ca :</p>
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
          Properties: 11,690
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
          Area: 205,871,009 sqf
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
          Costumers : 11,300
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
        realties.ca is the most popular and most trusted real estate website in
        Canada. Owned and operated by the Canadian Real Estate , realties.ca
        provides up-to-date and reliable information that makes finding your
        dream property easy and enjoyable. realties.ca is popular with sellers,
        buyers, and renters and is accessible online and on mobile devices. With
        over millions of visits each year, realties.ca provides listing
        information for residential, commercial and rental properties across
        Canada. Whether you have just started looking or you are ready to make
        that big purchase, realties.ca is updated daily to ensure you have
        access to the latest and most accurate property listings. Features such
        as the mortgage , social sharing, neighborhood demographics, and ability
        to connect with local , are all available to help you find your dream
        property. Start to search today <br />
        <br />
      </div>
    </div>
  )
}

export default AboutInfo
