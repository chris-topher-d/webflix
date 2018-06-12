import React from 'react';
import Layout from './Components/Layout/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';
import './sass/main.scss';

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
