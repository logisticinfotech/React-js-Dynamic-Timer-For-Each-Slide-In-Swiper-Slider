import React, { Component } from "react";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper/dist/js/swiper.js";
import './sliderstyle.scss';
import FirstSlide from '../FirstSlide';
import SecondSlide from '../SecondSlide';
import ThirdSlide from '../ThirdSlide';
import FourthSlide from '../FourthSlide';
import FifthSlide from '../FifthSlide';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        slideItems: [],
        swiper  : '',
        slideIndex: '',
        slidesToDisplay: 1,
        count: 1,
    }
  }

  startSwiper = () =>{
    this.state.swiper = new Swiper('.swiper-container', {
      slidesPerView	: 'auto',
      touchRatio: 0,
    });
  }

  handleSlideChange = () => {
    var totalSlides = this.state.slidesToDisplay;
    totalSlides++;
    this.setState({
        slideIndex:null,
        slidesToDisplay: totalSlides
    },()=>{
        this.startSwiper();
        this.state.swiper.slideTo(--totalSlides);
    });
  }

  componentDidMount() {
    this.startSwiper();
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
      this.setState({count: (this.state.count + 1)})
  }

  renderSlides(){
    var i = 0, indents = [];
    var slidesToDisplay = this.state.slidesToDisplay;
    for (let index = 1; index <= slidesToDisplay; index++) {
      indents.push(
        (index===1?
          <FirstSlide goToNextSlide={this.handleSlideChange} />
        :
        index===2?
          <SecondSlide goToNextSlide={this.handleSlideChange} />
        :
        index===3?
          <ThirdSlide goToNextSlide={this.handleSlideChange} />
        :
        index===4?
          <FourthSlide goToNextSlide={this.handleSlideChange} />
        :
        index===5?
          <FifthSlide goToNextSlide={this.handleSlideChange} />
        :
          ''
        )        
      )      
    }
    return indents;
  }

  render() {
    return (
      <div class="swiper-container">
          <div class="swiper-wrapper">
            {this.renderSlides()}
          </div>
      </div>
    )
  }
}

export default Slider;
