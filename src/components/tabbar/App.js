import React, { Component } from "react";
import Tabbar from "./Tabbar";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.title = ["精选", "流行", "热销"];
    this.state = {
      isActive: 1,
      currentTitle: "精选",
    };
  }
  render() {
    const { currentTitle } = this.state;
    return (
      <div>
        <p>你好我是父组件</p>
        <Tabbar
          itemClick={(index) => {
            this.itemClick(index);
          }}
          title={this.title}
        ></Tabbar>
        <p>{currentTitle}</p>
      </div>
    );
  }
  itemClick(index) {
    this.setState({
      currentTitle: this.title[index],
    });
  }
}
