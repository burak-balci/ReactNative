import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const UserProvider = ({children}) => {
  const [favoriteJob, setFavoriteJob] = useState([]);

  const store = createStore(reducers, {favoriteJob, setFavoriteJob});

  return <Provider store={store}>{children}</Provider>;
};

export default UserProvider;
