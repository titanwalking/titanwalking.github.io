import React from 'react'
import Icon from '@ant-design/icons'

const Rss = () => (
  <svg
    data-icon="rss"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2 28 28"
    aria-hidden="true"
  >
    <circle cx="3.429" cy="20.571" r="3.429"></circle>
    <path d="M11.429 24h4.57C15.999 15.179 8.821 8.001 0 8v4.572c6.302.001 11.429 5.126 11.429 11.428z"></path>
    <path d="M24 24C24 10.766 13.234 0 0 0v4.571c10.714 0 19.43 8.714 19.43 19.429z"></path>
  </svg>
)

const RssIcon = props => <Icon component={Rss} {...props} />

export default RssIcon
