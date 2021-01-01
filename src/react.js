/**
 * 
 * @param {*} type 
 * @param {*} props 
 * @param {*} children 
 * 
 * React.createElement("div", null, 
 *  React.createElement("p", null, "123"), 
 *  React.createElement(Counter, null)
 * );
 */

function createElement(type, config, children) {
  let props = { ...config }
  if (arguments.length > 3) {
    children = Array.prototype.slice.call(arguments,2);
  }
  props.children = children
  return {
    type,
    props
  }
}

const React = {
  createElement
}
export default React