import React from 'react'
import PropTypes from 'prop-types'


const Offerings = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-6'>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
        </section>
      </div>
    ))}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
