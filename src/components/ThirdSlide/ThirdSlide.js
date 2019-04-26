import React, { Component } from "react";

class ThirdSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedIndexArray: [],
      remainTimer: 8,
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
              <h2>Which is not programming language?</h2>
              <div>
                <div className="slider-check">
                  <input type="radio" id="php" name="language" onChange={this.handleChange}></input>
                  <label htmlFor="php">PHP</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="java" name="language" onChange={this.handleChange}></input>
                  <label htmlFor="java">JAVA</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="maths" name="language" onChange={this.handleChange}></input>
                  <label htmlFor="maths">Maths</label>
                </div>
                <div className="slider-check">
                  <input type="radio" id="c++" name="language" onChange={this.handleChange}></input>
                  <label htmlFor="c++">C++</label>
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

export default ThirdSlide;
