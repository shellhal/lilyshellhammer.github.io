import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
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
        altText: '',
        caption: ''
      },
      {
        src: item_full_view,
        altText: '',
        caption: ''
      },
      {
        src: pay_for_item,
        altText: '',
        caption: ''
      },
      {
        src: barter_item,
        altText: '',
        caption: ''
      },
      {
        src: liked_items,
        altText: '',
        caption: ''
      },
      {
        src: lilys_market_board,
        altText: '',
        caption: ''
      },
      {
        src: filter_marketplace,
        altText: '',
        caption: ''
      },
      {
        src: marketplace_boxes,
        altText: '',
        caption: ''
      },
      {
        src: stats,
        altText: '',
        caption: ''
      },
      {
        src: friends,
        altText: '',
        caption: ''
      },
      {
        src: marketplace_list,
        altText: '',
        caption: ''
      },
      {
        src: swap_item,
        altText: '',
        caption: ''
      },
      {
        src: item_expanded_boxes,
        altText: '',
        caption: ''
      },
      {
        src: message_service,
        altText: '',
        caption: ''
      },
      {
        src: user_profile,
        altText: '',
        caption: ''
      },
      {
        src: item_expanded_list,
        altText: '',
        caption: ''
      }
    ];

    this.state = {
      activeIndex: 0,
      setActiveIndex: 0,
      animating: false,
      setAnimating: false,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

    next() {
      if (this.state.animating) {
        return;
      }
      const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }

    previous() {
      if (this.state.animating) {
        return;
      }
      const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
      if (this.state.animating) {
        return;
      }
      this.setState({ activeIndex: newIndex })
    }

  render() {
    const slides = (this.items).map((item) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating:true })}
          onExited={() => this.setState({ animating:false })}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className='image-mockups-carousel'/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'App Mockups'} hoverContent={''}/>
          <Col>
            <Row>
              <Carousel
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={this.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </Row>
          </Col>
      </div>
      </Container>
    );
  }
}

export default MockupPage;
