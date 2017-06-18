import React from 'react';
import { connect } from 'react-redux';

import { getWeather } from '../actions';

const SearchBar = props => {
  console.log(props);
  return (
    <div>
      <form>
        <input type="text" placeholder="enter a city" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default connect(null, { getWeather })(SearchBar);
