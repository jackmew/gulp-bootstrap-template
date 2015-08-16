// var $ = require('jquery');
// make jQuery global for that bootstrap depend on jQuery .
// global.jQuery = $;
var $ = require('jquery');
var jQuery = $ ;
// var $ = jQuery = require('jquery');
require('bootstrap');

$(function(){
  $( "#go" ).click(function() {
	  $( "#block" ).animate({
	    width: "70%",
	    opacity: 0.4,
	    marginLeft: "0.6in",
	    fontSize: "3em",
	    borderWidth: "10px"
	  }, 1500 );
	});
});
