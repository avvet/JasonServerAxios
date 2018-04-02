import '../css/main.scss';
import '../user.html';
import $ from 'jquery';

import {func} from './second';
func();

// import {httpService} from "./http/http-service";
import {funct} from "./http/http-service";

console.log('Hello,world');

let getPostsBtn = document.getElementById('btn');
let singlePostBtn = document.getElementById('single_btn');
let myParagraph = document.getElementById('paragraph');

getPostsBtn.onclick = () => {
  funct();
};