import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      toSearch: false
    }

    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth() {
    if (window.outerWidth < 700) {
      this.setState({ windowWidth: 700 });
    } else {
      let width = window.outerWidth;
      this.setState({ windowWidth: width });
    }
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Header />
          <Switch>
            <Route
              exact path="/"
              render={()=><Home
                windowWidth={this.state.windowWidth} />}
            />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/search" component={Search} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Layout;
