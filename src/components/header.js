import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import List from '../components/list'
import ListItem from '../components/listItem'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      classNameToggle: 'nav-mobile',
      classNameTrigger: 'trigger',
      isActive: false,
    }
  }

  toggle = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      if (this.state.isActive) {
        this.setState({ classNameToggle: 'nav-mobile active' })
        this.setState({ classNameTrigger: 'trigger triggerActive' })
      } else {
        this.setState({ classNameToggle: 'nav-mobile' })
        this.setState({ classNameTrigger: 'trigger' })
      }
    })
  }
  render() {
    return (
      <div className="header">
        <div className="container flex nav-desktop">
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
                href="mailto:blnarayanan92@gmail.com"
                className="c-grey td-underline"
              >
                Email
              </a>
            </ListItem>
            <ListItem classNames="fs-13 fw-400 c-grey  pr-10 ">
              <a
                href="https://github.com/blnarayanan92"
                className="c-grey td-underline"
              >
                Github
              </a>
            </ListItem>
          </List>
          {/* <List classNames="headerLinks m0 flex ml-auto">
            <listItem classNames="fs-15 fw-400 c-grey pr-10 pl-10">
              <a href="/" className="c-black td-none">
                Resume
              </a>
            </listItem>
          </List> */}
        </div>
        <div className="trigger" onClick={this.toggle}>
          <i />
          <i />
          <i />
        </div>
        <div className={this.state.classNameToggle}>
          <List classNames="headerLinks m0 flex flex-column">
            <ListItem classNames="fs-13 fw-400 c-grey  pl-10 ">
              <a
                href="https://twitter.com/_blnarayanan"
                className="c-grey td-underline"
              >
                Twitter
              </a>
            </ListItem>
            <ListItem classNames="fs-13 fw-400 c-grey  pl-10 ">
              <a
                href="https://www.instagram.com/wannabeemonk/"
                className="c-grey td-underline"
              >
                Instagram
              </a>
            </ListItem>
            <ListItem classNames="fs-13 fw-400 c-grey  pl-10 ">
              <a
                href="mailto:blnarayanan92@gmail.com"
                className="c-grey td-underline"
              >
                Email
              </a>
            </ListItem>
            <ListItem classNames="fs-13 fw-400 c-grey  pl-10 ">
              <a
                href="https://github.com/blnarayanan92"
                className="c-grey td-underline"
              >
                Github
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
