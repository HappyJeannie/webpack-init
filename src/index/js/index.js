import './../css/index.css';

// import logo from './../../../assets/img/logo.png'
import imgSrc from './../img/06.jpg'
require("html-loader?attrs=img:data-src!./../index.html");

let img = document.createElement('img');
img.src = imgSrc;

document.getElementsByTagName('body')[0].appendChild(img);

// let img01 = document.createElement('img');
// img01.src = imgSrc;

// document.getElementsByTagName('body')[0].appendChild(img01);