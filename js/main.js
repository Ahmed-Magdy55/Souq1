$(function(){
'use strict';
var winH = $ (window).height(),
navbarH = $('#nav-bar1').innerHeight(),
navH = $('#nav-bar2').innerHeight();
$('.background').height(winH- (navbarH+navH));
});

