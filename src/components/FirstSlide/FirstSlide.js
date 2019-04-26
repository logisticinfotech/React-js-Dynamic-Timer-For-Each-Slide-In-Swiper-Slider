import React, { Component } from "react";

class FirstSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedIndexArray: [],
      remainTimer: 5,
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
              <h2>Select country name starts with "I"</h2>
              <div>
                <div className="slider-check">
                  <input type="radio" id="america" name="country_name" onChange={this.handleChange}></input>
                  <label htmlFor="america">America</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="India" name="country_name" onChange={this.handleChange}></input>
                  <label htmlFor="India">India</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="Algeria" name="country_name" onChange={this.handleChange}></input>
                  <label htmlFor="Algeria">Algeria</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="Argentina" name="country_name" onChange={this.handleChange}></input>
                  <label htmlFor="Argentina">Argentina</label>
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

export default FirstSlide;
