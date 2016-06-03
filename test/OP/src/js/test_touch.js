'use strict'
  var is_touch_device = 'ontouchstart' in document.documentElement;
  if(is_touch_device) {
    document.write('<link rel="stylesheet" href="style-touch.css">');
    } else document.write('<link rel="stylesheet" href="style.css">');
