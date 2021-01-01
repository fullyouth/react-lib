function render(vdom, container) {
  const dom = createDOM(vdom);
  container.appendChild(dom);
}

/**
 * 
 * @param {*} vdom 
 *  let element = '123'
 *  let element = <div>123</div>
 */
function createDOM(vdom) {
  if (typeof vdom === 'string' || typeof vdom === 'number') {
    return document.createTextNode(vdom)
  }
  let { type, props } = vdom
  let dom
  if (typeof type === 'function') {
    return mountFunctionComponent(vdom)
  } else {
    dom = document.createElement(type)
  }
  // 更新属性
  updateProps(dom, props)
  // 插入儿子
  if (typeof props.children === 'string' || typeof props.children === 'number') {
    dom.textContent = props.children
  } else if (typeof props.children === 'object' && props.children.type) {
    render(props.children, dom)
  } else if (Array.isArray(props.children)) {
    reconcileChildren(props.children, dom);
  } else {
    document.textContent = props.children ? props.children.toString() : "";
  }
  return dom
}

function mountFunctionComponent(vdom) {
  let renderVdom = vdom.type(vdom.props)
  return createDOM(renderVdom)
}

function reconcileChildren(childrenVdom, parentDOM) {
  childrenVdom.forEach(child => {
    render(child, parentDOM);
  })
}

function updateProps(dom, newProps) {
  for (let key in newProps) {
    if (key === 'children') continue
    if (key === 'style') {
      let styleObj = newProps.style;
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      }
    } else {
      dom[key] = newProps[key];
    }
  }
}

const ReactDom = {
  render
}

export default ReactDom