require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { projectPlay } from '../components/projectnew';
import { slideleft } from '../components/slide';
import { model } from '../components/modal';
import { mobile } from '../components/mobilephone';
import { slideleftb } from '../components/slideleftb';
import { homecome } from '../components/homecome';




  //let url = null;








      document.addEventListener('turbolinks:load', () => {
        if (window.matchMedia("(min-width: 400px)").matches) {
       // console.log(url);
        if (document.querySelector('.projects')) {
           projectPlay();
        }
        //if (document.querySelector('.product-banner')) {
//const reg = /.projects./
          //if  (reg.test(url) ) {
            //document.documentElement.scrollTop = document.documentElement.scrollHeight;
            //slideleft(url);
          //}
       // }
        if (document.querySelector('.modal')) {
          model();
        }
        //url = document.location.href;



  /* the view port is at least 400 pixels wide */
  } else {

    mobile();
  }
  });






