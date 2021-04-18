import React, { Component } from "react";
import "../../assets/css/tabbar.css";
export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 0,
    };
  }
  render() {
    const { title } = this.props;
    const { isActive } = this.state;
    console.log(title, "title render中的");
    return (
      <div className="tabbar">
        {title.map((item, index) => {
          return (
            <div
              className={"tabbar-item " + (isActive === index ? "active" : "")}
              onClick={(e) => {
                this.itemClick(index);
              }}
              key={index}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }
  itemClick(index) {
    this.setState({
      isActive: index,
    });
    const { itemClick } = this.props;
    itemClick(index);
  }
}
