import React, { Component } from 'react';
import PromoItem from './PromoItem';
import { Row, Spin, Icon } from 'antd';

class ListPromo extends Component {
  render() {
    const promos = this.props.promos;

    const divStyle = {
      marginTop: '1.5em',
      background: '#ECECEC',
      padding: '3em',
      marginLeft: '1.5em',
      marginRight: '1.5em'
    };
    const divSpinStyle = {
      textAlign: 'center',
      borderRadius: '4px'
    };

    const renderFrownIcon = () => (<Icon type="frown" style={{width: '100em'}}/>)
    const renderLoading = () => (
      <div className="Spin" style={divSpinStyle}>
        <Spin />
      </div>
    )
    const renderPromoItens = () => (
          <Row>
            {promos.map((promo, index) => {
                return <PromoItem promo={promo} key={index}> </PromoItem>
              })
            }
          </Row>
    )
    return (
        <div className="ListPromo" style={divStyle}>
          {this.props.loading === true && renderLoading()}
          {this.props.code === 204 && renderFrownIcon()}
          {this.props.code === 200 && renderPromoItens()}
        </div>
   );
  }
}

export default ListPromo;
