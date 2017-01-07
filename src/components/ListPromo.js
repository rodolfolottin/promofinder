import React, { Component } from 'react';
import PromoItem from './PromoItem';
import { Row } from 'antd';


class ListPromo extends Component {
  render() {
    this.state = {promos:
        [
          {item: '[Magazine Luiza] Home Theater Samsung HT-F5505K 1000W RMS - 5.1 Canais Blu-Ray R$ 800 + FG', created_at: '10 days ago', link: 'https://t.co/MyDtpY4Est'},
          {item: '[EncaparMeuPhone] SlickWraps - Todo Site Com 50%', created_at: '3 days ago', link: 'https://t.co/9jQGo31eCs'},
          {item: '[Shoptime] Livro infantil - Aprenda com a Minnie (6 livros + boneca) - R$30,51', created_at: '10 days ago', link: 'https://t.co/kDOM6aZRDH'},
          {item: '[Shoptime] Livro infantil - Aprenda com a Minnie (6 livros + boneca) - R$30,51', created_at: '10 days ago', link: 'https://t.co/kDOM6aZRDH'},
          {item: '[Shoptime] Livro infantil - Aprenda com a Minnie (6 livros + boneca) - R$30,51', created_at: '10 days ago', link: 'https://t.co/kDOM6aZRDH'},
        ]
    };
    var divStyle = {
      marginTop: '1.5em',
      background: '#ECECEC',
      padding: '3em',
      marginLeft: '1.5em',
      marginRight: '1.5em'
    };

    return (
        <div className="ListPromo" style={divStyle}>
          <Row>
            {this.state.promos.map((promo, i) => <TweetItem promo={promo} key={i} />)}
          </Row>
        </div>
   );
  }
}

export default ListPromo;
