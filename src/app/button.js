import React, {Component} from 'react';
export class Button extends Component {
  constructor() {
    super();
    this.state = {
      buttonName: 'FUCK YOU',
      buttonStyle: {
        color: 'white',
        // background: '#1e5799', /* Old browsers */
        // background: '-moz-linear-gradient(top, #1e5799 0%, #2989d8 48%, #2989d8 48%, #7db9e8 100%)', /* FF3.6-15 */
        // background: '-webkit-linear-gradient(top, #1e5799 0%,#2989d8 48%,#2989d8 48%,#7db9e8 100%)', /* Chrome10-25,Safari5.1-6 */
        background: ' linear-gradient(to bottom, #efc5ca 0%,#d24b5a 50%,#ba2737 51%,#f18e99 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#1e5799", endColorstr="#7db9e8",GradientType=0 )' /* IE6-9 */
      }
    };
    this.handleClick = function () {
      this.setState(prevState => ({
        buttonName: prevState.buttonName === 'FUCK YOU' ? 'Changed' : 'FUCK YOU'
      }));
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <button style={this.state.buttonStyle} className="btn btn-default btn-lg" onClick={this.handleClick}>{this.state.buttonName}</button>
    );
  }
}

