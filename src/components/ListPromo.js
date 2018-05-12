import React, { Component } from 'react'
import PromoItem from './PromoItem'
import { Spin, Icon } from 'antd'

class ListPromo extends Component {
  render() {
    const { promos, loading, code } = this.props

    const divStyle = {
      marginTop: '1.5em',
      background: '#ECECEC',
      padding: '3em',
      marginLeft: '1.5em',
      marginRight: '1.5em'
    }

    const divFlex = {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }

    const divSpinStyle = {
      textAlign: 'center',
      borderRadius: '4px'
    }

    const renderFrownIcon = () => (
      <Icon type="frown" style={{ width: '100em' }} />
    )
    const renderLoading = () => (
      <div className="Spin" style={divSpinStyle}>
        <Spin />
      </div>
    )
    const renderPromoItens = () => (
      <div style={divFlex}>
        {promos.map((promo, index) => {
          return (
            <PromoItem promo={promo} key={index}>
              {' '}
            </PromoItem>
          )
        })}
      </div>
    )
    return (
      <div className="ListPromo" style={divStyle}>
        {loading === true && renderLoading()}
        {code === 204 && renderFrownIcon()}
        {code === 200 && renderPromoItens()}
      </div>
    )
  }
}

export default ListPromo
