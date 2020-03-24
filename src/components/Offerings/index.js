import React from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-grid-gallery';



const IMAGES =
[{
        src: "/img/1.jpg",
        thumbnail: "/img/1.jpg",
        thumbnailWidth: 1000,
        thumbnailHeight: 600
},
{
        src: "/img/2.jpg",
        thumbnail: "/img/2.jpg",
        thumbnailWidth: 1000,
        thumbnailHeight: 600
},

{
        src: "/img/4.jpg",
        thumbnail: "/img/4.jpg",
        thumbnailWidth: 900,
        thumbnailHeight: 1500
},
{
        src: "/img/3.jpg",
        thumbnail: "/img/3.jpg",
        thumbnailWidth: 800,
        thumbnailHeight: 600
},
{
        src: "/img/5.jpg",
        thumbnail: "/img/5.jpg",
        thumbnailWidth: 600,
        thumbnailHeight: 800
},

{
        src: "/img/6.jpg",
        thumbnail: "/img/6.jpg",
        thumbnailWidth: 1200,
        thumbnailHeight: 800
},

{
        src: "/img/8.jpg",
        thumbnail: "/img/8.jpg",
        thumbnailWidth: 600,
        thumbnailHeight: 800
}
]

const Offerings = ({ gridItems }) => (
  <Gallery images={IMAGES}/>
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
