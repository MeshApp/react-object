import React from "react";
import Radium from "radium";
import { css, PropTypes } from "./util";

export const FONT_MONO = "Menlo, monospace";
export const COLORS = {
  black: "#000",
  darkGrey: "#303942",
  grey: "#999999",
  lightGrey: "#C8C8C8",
  red: "#C9214C",
  brown: "#9B4500",
  green: "#007500",
  blue: "#180AA9",
  purple: "#AC0093"
};


/**
 * Text display with commonly used style properties.
 */
class Text extends React.Component {
  static propTypes = {
    inline: PropTypes.bool,
    italic: PropTypes.bool,
    size: PropTypes.numberOrString,
    color: PropTypes.oneOf(Object.keys(COLORS)),
    marginLeft: PropTypes.numberOrString,
    marginRight: PropTypes.numberOrString,
    letterSpacing: PropTypes.numberOrString,
    lineHeight: PropTypes.numberOrString,
    onClick: PropTypes.func
  };
  static defaultProps = {
    inline: true,
    italic: false,
    size: 12,
    color: "darkGrey",
    marginLeft: 0,
    marginRight: 0,
    letterSpacing: "normal",
    lineHeight: "1.4em"
  };

  styles() {
    return css({
      base: {
        fontFamily: FONT_MONO,
        fontSize: this.props.size,
        fontWeight: "normal",
        fontStyle: this.props.italic === true ? "italic" : "normal",
        lineHeight: this.props.lineHeight,
        color: COLORS[this.props.color],
        marginLeft: this.props.marginLeft,
        marginRight: this.props.marginRight,
        cursor: this.props.onClick ? "pointer" : null,
        letterSpacing: this.props.letterSpacing
      }
    });
  }

  handleClick(e) {
    const { onClick } = this.props;
    if (onClick) {
      onClick({ args: e });
    }
  }

  render() {
    const styles = this.styles();
    const handleClick = this.handleClick.bind(this);
    return this.props.inline
        ? <span style={ styles.base } onClick={ handleClick }>{ this.props.children }</span>
        : <div style={ styles.base } onClick={ handleClick }>{ this.props.children }</div>;
  }
}

export default Radium(Text);
