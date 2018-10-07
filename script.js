"use strict";

// check if Shadow DOM is supported
if('attachShadow' in document.createElement('div')) {
  let templateContent = document.querySelector('template').content;
  let divs = document.querySelectorAll('div');
 
  divs.forEach(function(div){
    div.attachShadow({  mode: 'open' }).appendChild(
      templateContent.cloneNode(true))
  });
}
else
  console.warn('attachShadow not supported');
