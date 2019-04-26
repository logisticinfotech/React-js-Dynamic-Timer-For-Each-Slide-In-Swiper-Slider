import React, { Component } from "react";

class SecondSlide extends Component {
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

  handleChange = (event) => {
    var mainDiv = event.target.closest('div.slide-que');
    mainDiv.getElementsByClassName('submit_btn')[0].classList.remove('d-none');
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
            <h2>Select month name having 30 days</h2>
            <div>
              <div className="slider-check">
                <input type="radio" id="january" name="month_name" onChange={this.handleChange}></input>
                <label htmlFor="january">January</label>
              </div>
              <div className="slider-check">
                <input type="radio" id="may" name="month_name" onChange={this.handleChange}></input>
                <label htmlFor="may">May</label>
              </div>
              <div className="slider-check">
                <input type="radio" id="april" name="month_name" onChange={this.handleChange}></input>
                <label htmlFor="april">April</label>
              </div>
              <div className="slider-check">
                <input type="radio" id="july" name="month_name" onChange={this.handleChange}></input>
                <label htmlFor="july">July</label>
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

export default SecondSlide;
