import React from 'react'
import ToDoList from './components/ToDoList'

require('./stylesheets/main.scss')

React.render(
  <ToDoList />
  , document.getElementById('app')
);
