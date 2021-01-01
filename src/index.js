import React from './react'
import ReactDom from './react-dom'

// let element = '123'
// let element = <div id='qqq'>123<p className='p'>qweqw</p></div>
function FunctionComponent(props) {
  return (
    <div className="title" style={{backgroundColor:'green',color:'red'}}>
      <span>{props.name}</span>
      {props.children}
    </div>
  )
}
let element = (
  <FunctionComponent name="zhufeng">
    <span>world</span>
  </FunctionComponent>
);
ReactDom.render(element, document.getElementById('root'))