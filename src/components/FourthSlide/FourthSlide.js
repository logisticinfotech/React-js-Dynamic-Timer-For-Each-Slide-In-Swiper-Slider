import React, { Component } from "react";

class FourthSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedIndexArray: [],
      remainTimer: 7,
      isTimerDisplay: true,
    };
  }

  componentDidMount() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  tick() {

      this.setState({
          remainTimer: this.state.remainTimer - 1
      },() => {
          if(this.state.remainTimer == 0){
              clearInterval(this.timer);
          }
      });
  }

  componentWillUnmount() {
      clearInterval(this.timer);
  }

  handleChange = (event) => {
    var mainDiv = event.target.closest('div.slide-que');
    mainDiv.getElementsByClassName('submit_btn')[0].classList.remove('d-none');
  }

  render() {
    return (
      <div className="swiper-slide">
        {this.state.remainTimer>0 &&
          <div className="col-md-12 lwp-counter">
            <div className="slider-timer">
                <p>Timer:</p>
                <span>{this.state.remainTimer}</span>
                <p>Seconds</p>
            </div>
          </div>
        }
        {this.state.remainTimer > 0 && 
          <div className="slide-que">
              <h2>Which is not search engine?</h2>
              <div>
                <div className="slider-check">
                  <input type="radio" id="google" name="search" onChange={this.handleChange}></input>
                  <label htmlFor="google">Google</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="yandex" name="search" onChange={this.handleChange}></input>
                  <label htmlFor="yandex">Yandex</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="bing" name="search" onChange={this.handleChange}></input>
                  <label htmlFor="bing">Bing</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="gmail" name="search" onChange={this.handleChange}></input>
                  <label htmlFor="gmail">Gmail</label>
                </div>
              </div>
              <button type="button" className="submit_btn d-none" onClick={this.props.goToNextSlide}>Done</button>
          </div>
        }
        {this.state.remainTimer===0 && 
          <div>
            <h1>Oops...
              <span className="txt-small">time out!</span>
            </h1>
            <button type="button" onClick={this.props.goToNextSlide}>Next</button>
          </div>
        }
      </div>
    );
  }
}

export default FourthSlide;
