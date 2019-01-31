import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import List from '../components/list'
import ListItem from '../components/listItem'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="container flex">
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}

      <List classNames="headerLinks m0 flex">
        <ListItem classNames="fs-13 fw-400 c-grey  pr-10 ">
          <a
            href="https://twitter.com/_blnarayanan"
            className="c-grey td-underline"
          >
            Twitter
          </a>
        </ListItem>
        <ListItem classNames="fs-13 fw-400 c-grey  pr-10 ">
          <a
            href="https://www.instagram.com/wannabeemonk/"
            className="c-grey td-underline"
          >
            Instagram
          </a>
        </ListItem>
        <ListItem classNames="fs-13 fw-400 c-grey  pr-10 ">
          <a
            href="mailto=blnarayanan92@gmail.com"
            className="c-grey td-underline"
          >
            Email
          </a>
        </ListItem>
        <ListItem classNames="fs-13 fw-400 c-grey  pr-10 ">
          <a href="https://t.me/blnarayanan" className="c-grey td-underline">
            Github
          </a>
        </ListItem>
      </List>
      <List classNames="headerLinks m0 flex ml-auto">
        <listItem classNames="fs-15 fw-400 c-grey pr-10 pl-10">
          <a href="/" className="c-black td-none">
            Resume
          </a>
        </listItem>
      </List>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
