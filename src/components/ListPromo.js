import React, { Component } from 'react';
import PromoItem from './PromoItem';
import { Row } from 'antd';


class ListPromo extends Component {
  render() {
    const divStyle = {
      marginTop: '1.5em',
      background: '#ECECEC',
      padding: '3em',
      marginLeft: '1.5em',
      marginRight: '1.5em'
    };

    return (
        <div className="ListPromo" style={divStyle}>
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
