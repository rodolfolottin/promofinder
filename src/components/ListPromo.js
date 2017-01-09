import React, { Component } from 'react';
import PromoItem from './PromoItem';
import { Row, Spin } from 'antd';

class ListPromo extends Component {
  render() {
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

    return (
        <div className="ListPromo" style={divStyle}>
        {this.props.loading === true &&
          <div className="Spin" style={divSpinStyle}>
            <Spin />
          </div>
        }
          <Row>
            {
              this.props.promos.map((promo, index) => {
                return <PromoItem promo={promo} key={index}> </PromoItem>
              })
            }
          </Row>
        </div>
   );
  }
}

export default ListPromo;
