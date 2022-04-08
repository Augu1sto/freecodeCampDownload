// ==UserScript==
// @name         freecodeCamp download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chinese.freecodecamp.org/learn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org
// @grant        none
// @require      http://code.jquery.com/jquery-3.x-git.min.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */
(function(){
 document.addEventListener('keydown',(e)=>{
      if(e.ctrlKey&&e.keyCode===13){

          setTimeout(() => {
          var node = document.querySelector("div.modal-footer > a");
                node.download = document.URL.split('/')[6]+'.html';
                node.click();
          }, 1);

      }
    })
})();
