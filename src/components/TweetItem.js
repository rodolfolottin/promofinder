import React from 'react';
import { Card, Col } from 'antd';


class TweetItem extends React.Component {
  render() {
    var divStyle = {
      marginTop: '0.5em',
      width : '35em',
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
          <Card style={divStyle} extra={<a href={this.props.product.link}>More</a>}>
            <p style={pItemStyle}>
              {this.props.product.item}
            </p>
            <p style={pLinkStyle}>
              <em>
                {this.props.product.created_at}
              </em>
            </p>
          </Card>
        </Col>
    );
  }
}

export default TweetItem;
