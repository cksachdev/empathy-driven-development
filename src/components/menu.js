import React from 'react';
import ReactMenuAim from 'react-menu-aim';
import createReactClass from 'create-react-class';

import './menu.css'

var Menu = createReactClass({
  mixins: [ReactMenuAim],

  getInitialState: function() {
    return {
      activeMenuIndex: 0
    };
  },

  componentWillMount: function() {
    this.initMenuAim({
      menuSelector: '.menu',
      delay: 300,
      tolerance: 75
    });
  },

  handleSwitchMenuIndex: function(index) {
    this.setState({
      activeMenuIndex: index
    });
  },

  render: function() {
    var self = this;

    }

    return (
      <div className={containerClassName}>
        <ul className="menu" onMouseLeave={this.handleMouseLeaveMenu}>
          {this.props.menuData.map(function(menu, index) {
            var className = 'menu-item';
            if (index === self.state.activeMenuIndex) {
              className += ' active';
            }

            return (
              <li className={className} key={index}
                  onMouseEnter={function(){
                    self.handleMouseEnterRow.call(self, index, self.handleSwitchMenuIndex);
                  }}>
                {menu.name}
              </li>
            );
          })}
        </ul>
        <ul className="sub-menu" style={subMenuStyle}>
          {this.props.menuData[this.state.activeMenuIndex].subMenu.map((function(subMenu, index){
            return (
              <li className="sub-menu-item" key={index}>{subMenu}</li>
            );
          }))}
        </ul>
      </div>
    );
  }
});

export default Menu;