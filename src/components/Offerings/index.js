import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
<React.Fragment>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <img src="/img/1.jpg"/>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <img src="/img/2.jpg"/>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <img src="/img/3.jpg"/>
    </article>
  </div>
</div>

<div class="tile is-ancestor">
  <div class="tile is-vertical is-12">
    <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child box">
            <img src="/img/4.jpg"/>
        </article>
      </div>
      <div class="tile is-8 is-vertical">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/img/7.jpg"/>
          </article>
        </div>
      </div>
    </div>
    <div class="tile">
      <div class="tile is-8 is-parent">
        <article class="tile is-child box">
          <div class="content">
            <img src="/img/6.jpg"/>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="content">
            <img src="/img/5.jpg"/>
          </div>
        </article>
      </div>
    </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
            <div class="content">
                <img src="/img/8.jpg"/>
            </div>
        </article>
      </div>
  </div>
</div>
</React.Fragment>
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
