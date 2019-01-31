import React from 'react'
import { checkPropTypes } from 'prop-types'

class List extends React.Component {
  generateClasses = () => {
    const { classNames } = this.props
    return classNames
  }

  render() {
    return <ul className={this.generateClasses()}>{this.props.children}</ul>
  }
}

export default List
