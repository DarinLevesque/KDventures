import React from "react";
import TypeIt from "typeit";

class Typed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new TypeIt(this.el, this.props);
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Typed;
