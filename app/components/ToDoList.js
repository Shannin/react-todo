import React from 'react'

require('../stylesheets/ToDoList.scss')

class ToDoListItemRow extends React.Component {
  render() {
    return (
      <div className="todo-list__item-container__item-row">
        {this.props.content}
      </div>
    );
  }
}

class ToDoListHeader extends React.Component {
  render() {
    return (
      <div className="todo-list__header">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

class ToDoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <ToDoListHeader title="some title" />
        <div className="todo-list__item-container">
          <ToDoListItemRow content="this would be the content" />
          <ToDoListItemRow content="this would be the content" />
          <ToDoListItemRow content="this would be the content" />
          <ToDoListItemRow content="this would be the content" />
          <ToDoListItemRow content="this would be the content" />
        </div>
      </div>
    );
  }
}

export default ToDoList;