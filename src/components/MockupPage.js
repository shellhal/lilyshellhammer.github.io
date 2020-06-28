import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import Title from './Title';
// import deathvalley from '../img/deathvalley.jpg';
// import phonelines from '../img/phonelines.jpg';
// import purplepink from '../img/purplepink.jpg';
// import whispy from '../img/whispy.jpg';

import add_item from '../img/add_item.png';
import item_full_view from '../img/item_full_view.png';
import pay_for_item from '../img/pay_for_item.png';
import barter_item from '../img/barter_item.png';
import liked_items from '../img/liked_items.png';
import lilys_market_board from '../img/lilys_market_board.png';
import filter_marketplace from '../img/filter_marketplace.png';
import marketplace_boxes from '../img/marketplace_boxes.png';
import stats from '../img/stats.png';
import friends from '../img/friends.png';
import marketplace_list from '../img/marketplace_list.png';
import swap_item from '../img/swap_item.png';
import item_expanded_boxes from '../img/item_expanded_boxes.png';
import message_service from '../img/message_service.png';
import user_profile from '../img/user_profile.png';
import item_expanded_list from '../img/item_expanded_list.png';
// import my_face from '../img/my_face.png';

class MockupPage extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        src: add_item,
        altText: 'Add Item View',
        caption: 'Add Item to Marketplace'
      },
      {
        src: item_full_view,
        altText: 'Item Full View',
        caption: 'View Item fully expanded'
      },
      {
        src: pay_for_item,
        altText: 'Request to Pay',
        caption: 'Request to pay for Item'
      },
      {
        src: barter_item,
        altText: 'Request to Barter',
        caption: 'Request to barter Item'
      },
      {
        src: liked_items,
        altText: 'Liked Items View',
        caption: 'Liked Items'
      },
      {
        src: lilys_market_board,
        altText: 'User\'s Item Board',
        caption: 'User\'s Item Board'
      },
      {
        src: filter_marketplace,
        altText: 'Filter Marketplace',
        caption: 'Filter the marketplace by type of purchase or ..'
      },
      {
        src: marketplace_boxes,
        altText: 'Marketplace View (Boxes)',
        caption: 'View of Marketplace in box format'
      },
      {
        src: stats,
        altText: 'User Stats',
        caption: 'User Stats'
      },
      {
        src: friends,
        altText: 'User Friends',
        caption: 'User Friends'
      },
      {
        src: marketplace_list,
        altText: 'Marketplace View (List)',
        caption: 'View of Marketplace in list format'
      },
      {
        src: swap_item,
        altText: 'Request to Swap',
        caption: 'Request to swap an Item'
      },
      {
        src: item_expanded_boxes,
        altText: 'Expanded Item View',
        caption: 'Expand Item to view'
      },
      {
        src: message_service,
        altText: 'Message Friends',
        caption: 'Message Friend'
      },
      {
        src: user_profile,
        altText: 'User Profile',
        caption: 'View of User profile'
      },
      {
        src: item_expanded_list,
        altText: 'Item Expanded View (List)',
        caption: 'See expanded Item in list view'
      }
    ];

    this.state = {
      index: 0
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  prev() {
    let idx = (this.state.index - 1) < 0 ? (this.items.length - 1) : (this.state.index - 1);
    this.setState({ index: idx });
  }

  next() {
    let idx = (this.state.index + 1) > (this.items.length - 1) ? 0 : (this.state.index + 1);
    this.setState({ index: idx });
  }

  render() {
    const slides = [
        (<div>
            <img src={this.items[this.state.index].src} alt={this.items[this.state.index].altText} className='image-mockups-carousel'/>
          </div>),
        (<div className="image-mockups-carousel-caption">
            { this.items[this.state.index].caption }
          </div>)
        ];
    return (
      <Container>
        <div className="portfolio-wrapper">
        <Title title={'Barter App Mockups'} hoverContent={'Here is an app I designed to get better at using Adobe XD.'}/>
          <Col>
            <Row>
              <button className="prev-next-carousel" onClick={this.prev}>Prev</button>
                <Col>
                  <div className="image-mockups-carousel-wrapper">
                    {slides[0]}
                  </div>
                </Col>
                <Col>
                  <div className="image-mockups-carousel-wrapper">
                    {slides[1]}
                  </div>
                </Col>
              <button className="prev-next-carousel" onClick={this.next}>Next</button>
            </Row>
          </Col>
        </div>
      </Container>
    );
  }
}

export default MockupPage;
