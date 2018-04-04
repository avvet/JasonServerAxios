import '../css/main.scss';
import '../user.html';
import $ from 'jquery';

import {func} from './second';
func();

// import {funct} from "./http/http-service";

import {httpService} from "./http/http-service";

console.log('Hello,world');

let getPostsBtn = document.getElementById('btn');
let singlePostBtn = document.getElementById('single_btn');
let myParagraph = document.getElementById('paragraph');
let dltBtn = document.getElementById('dlt_btn');

// getPostsBtn.onclick = () => {
//   funct();
// };

getPostsBtn.onclick = () => {
  httpService.getAll();
  // httpService.getId();

};

singlePostBtn.onclick = () => {
  httpService.postAll();
};

myParagraph.onclick = () => {
  httpService.patchAll();
};

dltBtn.onclick = () => {
  httpService.deleteAll();
};