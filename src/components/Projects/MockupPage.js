import React from 'react';
import { Container } from 'reactstrap';

import Title from './../Basics/Title';
import add_item from '../../img/barter_app/add_item.png';
import item_full_view from '../../img/barter_app/item_full_view.png';
import pay_for_item from '../../img/barter_app/pay_for_item.png';
import barter_item from '../../img/barter_app/barter_item.png';
import liked_items from '../../img/barter_app/liked_items.png';
import lilys_market_board from '../../img/barter_app/lilys_market_board.png';
import filter_marketplace from '../../img/barter_app/filter_marketplace.png';
import marketplace_boxes from '../../img/barter_app/marketplace_boxes.png';
import stats from '../../img/barter_app/stats.png';
import friends from '../../img/barter_app/friends.png';
import marketplace_list from '../../img/barter_app/marketplace_list.png';
import swap_item from '../../img/barter_app/swap_item.png';
import item_expanded_boxes from '../../img/barter_app/item_expanded_boxes.png';
import message_service from '../../img/barter_app/message_service.png';
import user_profile from '../../img/barter_app/user_profile.png';
import item_expanded_list from '../../img/barter_app/item_expanded_list.png';

class MockupPage extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
    {
        src: marketplace_boxes,
        altText: 'Marketplace View (Boxes)',
        caption: 'View of Marketplace in box format'
      },
      {
        src: lilys_market_board,
        altText: 'User\'s Item Board',
        caption: 'User\'s Item Board'
      },
      {
        src: filter_marketplace,
        altText: 'Filter Marketplace',
        caption: 'Filter the marketplace by type of purchase, distance, type, etc.'
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
        src: add_item,
        altText: 'Add Item View',
        caption: 'Add Item to Marketplace'
      },
      {
        src: liked_items,
        altText: 'Liked Items View',
        caption: 'Liked Items'
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
        <Title title={'Barter App Mockups'} hoverContent={'Here is an app I designed to get better at using Adobe XD. Wouldn\'t it be great to have a place to barter with your community?'}/>
          <div className="outer-carousel">
            <button className="prev-next-carousel" onClick={this.prev}>Prev</button>
              <div className="carousel-indiv-img-wrapper">
                <div className="image-mockups-carousel-wrapper">
                  {slides[0]}
                </div>
                <div className="image-mockups-carousel-wrapper">
                  {slides[1]}
                </div>
              </div>
            <button className="prev-next-carousel" onClick={this.next}>Next</button>
            </div>
        </div>
      </Container>
    );
  }
}

export default MockupPage;
