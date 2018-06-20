import './../../../assets/css/reset.css'
import './../css/award.css'

import logo from './../../../assets/img/logo.png'
import imgSrc from './../img/07.jpg'

let img = document.createElement('img');
img.src = logo;

document.getElementsByTagName('body')[0].appendChild(img);

let img01 = document.createElement('img');
img01.src = imgSrc;

document.getElementsByTagName('body')[0].appendChild(img01);