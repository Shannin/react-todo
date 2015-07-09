require('./stylesheets/main.scss')

import React from 'react'
import HelloWorld from './components/HelloWorld'

React.render(
  <HelloWorld />
  , document.getElementById('app')
);
