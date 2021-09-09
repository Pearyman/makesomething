// polyfill 回转义所有的
// import '@babel/polyfill'
import data from './data.json';

console.log('Hello Webpack');
console.log(data);

import './css/main.scss';
// import bimaqiu from './assets/images/bimaqiu.png';
import lesson from './assets/icons/lesson.svg';

const showMsg = () => {
  alert('Hello');
};

// const img  = new Image();
// img.src = bimaqiu;
// document.body.append(img);

const img1 = new Image();
img1.src = lesson;
document.body.append(img1);

window.showMsg = showMsg;