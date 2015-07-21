import React from 'react'

require('../stylesheets/ToDoList.scss')

class ToDoListItemRow extends React.Component {
  render() {
    return (
      <li className="todo-list__item-container__item-row">
        {this.props.title}
      </li>
    );
  }
}

class ToDoListHeader extends React.Component {

  render() {
    return (
      <div className="todo-list__header">
        <h3>{this.props.title}</h3>
        <div className="todo-list__header__new-item-button"
            onClick={this.props.onCreate.bind(this)}
        >+</div>
      </div>
    );
  }
}

class ToDoList extends React.Component {

  newItem() {
    console.log("clicked!")
  }

  render() {
    var items = this.props.items.map(function (item) {
      return (<ToDoListItemRow title={item.title} />)
    });

    return (
      <div className="todo-list">
        <ToDoListHeader title="cool a 2"
          onCreate={this.newItem} />
        <ul className="todo-list__item-container">
          {items}
        </ul>
      </div>
    );
  }
}

ToDoList.defaultProps= {
    items: [{
      title: 'title 1'
    },{
      title: 'title 2'
    },{
      title: 'title 3'
    },{
      title: 'title 4'
    }]
  }

export default ToDoList;
