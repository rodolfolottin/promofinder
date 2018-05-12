import React, { Component } from 'react'
import { Card } from 'antd'

class PromoItem extends Component {
  render() {
    const { link, item, created_at } = this.props.promo

    const divStyle = {
      marginTop: '0.5em',
      width: '26em',
      minWidth: '26em',
      height: '9em'
    }

    const pItemStyle = {
      marginTop: '0.6em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'default'
    }

    const pLinkStyle = {
      position: 'absolute',
      right: '1em',
      bottom: '2.8em',
      fontSize: '0.85em',
      cursor: 'default'
    }
    return (
      <Card
        title="PromoFinder Item"
        style={divStyle}
        extra={<a href={link}>More</a>}
      >
        <p style={pItemStyle}>{item}</p>
        <p style={pLinkStyle}>
          <em>{created_at}</em>
        </p>
      </Card>
    )
  }
}

export default PromoItem
