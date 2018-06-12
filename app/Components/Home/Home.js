import React, { Component } from 'react';
import Promoted from '../Promoted/Promoted';
import Upcoming from '../Upcoming/Upcoming';
import Popular from '../Popular/Popular';
import TopRated from '../TopRated/TopRated';

class Home extends Component {
  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div className='home-container'>
        <Promoted />
        <Upcoming width={this.props.windowWidth} />
        <Popular width={this.props.windowWidth} />
        <TopRated width={this.props.windowWidth} />
      </div>
    );
  }
}

export default Home;
