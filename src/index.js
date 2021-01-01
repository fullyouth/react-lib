import React from './react'
import ReactDom from './react-dom'

// let element = '123'
let element = <div id='qqq'>123<p className='p'>qweqw</p></div>
console.log(element);
ReactDom.render(element, document.getElementById('root'))