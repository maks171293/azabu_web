import React from 'react';
import DataStore from '../flux/stores/DataStore.js';
import NavMenu from './NavMenu.js';

class Home extends React.Component{
  render(){
    let allData = DataStore.getAll();
    return(
      <NavMenu />
    );
  }
}

export default Home;
