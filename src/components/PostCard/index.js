import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ posts }) => {
  return (
    <div className='container'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='content'
            style={{ border: '1px solid #f2f2f2', padding: '2em 4em', background: '#f2f2f2' }}
            key={post.id}
          >
            <p>
              <Link className='has-text-link' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-small' to={post.fields.slug}>
                                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
    </div>
  )
}

export default PostCard
