import React, { Component } from 'react';
import { Card, Col } from 'antd';


class PromoItem extends Component {
  render() {
    var divStyle = {
      marginTop: '0.5em',
      width : '40em',
      height: '9em'
    };

    var pItemStyle = {
      marginTop: '0.6em'
    };

    var pLinkStyle = {
      position: 'absolute',
      right: '1em',
      bottom: '1em'
    };

    return (
        <Col span="8">
          <Card style={divStyle} extra={<a href={this.props.promo.link}>More</a>}>
            <p style={pItemStyle}>
              {this.props.promo.item}
            </p>
            <p style={pLinkStyle}>
              <em>
                {this.props.promo.created_at}
              </em>
            </p>
          </Card>
        </Col>
    );
  }
}

export default PromoItem;
