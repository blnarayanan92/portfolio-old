import React from 'react'

class ListItem extends React.Component {
  generateClasses = () => {
    const { classNames } = this.props
    return classNames
  }

  render() {
    return <li className={this.generateClasses()}>{this.props.children}</li>
  }
}

export default ListItem
