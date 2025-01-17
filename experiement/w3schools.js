<!DOCTYPE html>
<html lang="en-US">
<head>
<title>HTML Headings</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="Keywords" content="HTML,CSS,JavaScript,SQL,PHP,jQuery,XML,DOM,Bootstrap,Web development,W3C,tutorials,programming,training,learning,quiz,primer,lessons,references,examples,source code,colors,demos,tips">
<meta name="Description" content="Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, and XML.">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="/lib/w3.css">
<style>
a:hover,a:active{color:#4CAF50}
table.w3-table-all{margin:20px 0}
/*OPPSETT AV TOP, TOPNAV, SIDENAV, MAIN, RIGHT OG FOOTER:*/
.top {
position:relative;
background-color:#ffffff;
height:68px;
padding-top:20px;
line-height:50px;
overflow:hidden;
z-index:2;
}
.w3schools-logo {
font-family:fontawesome;
text-decoration:none;
line-height:1;
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale;
font-size:37px;
letter-spacing:3px;
color:#555555;
display:block;
position:absolute;
top:17px;
}
.w3schools-logo .dotcom {color:#4CAF50}
.topnav {
position:relative;
z-index:2;
font-size:17px;
background-color:#5f5f5f;
color:#f1f1f1;
width:100%;
padding:0;
letter-spacing:1px;
}
.topnav a{
padding:10px 15px 9px 15px !important;
display:inline-block;
}
.topnav li a:hover{
background-color:#000000;
color:#ffffff;
}
.topnav li a.active {
background-color:#4CAF50;  
color:#ffffff;
}
a.topnav-icons {
width:52px;
font-size:20px !important;
padding-top:11px !important;
padding-bottom:13px !important;
}
a.topnav-icons.fa-home {font-size:22px !important}
a.topnav-localicons {
font-size:20px !important;
padding-top:6px !important;
padding-bottom:12px !important;
}
i.fa-caret-down,i.fa-caret-up{width:10px}
#sidenav h2 {
font-size:21px;
padding-left:16px;
margin:-4px 0 4px 0;
width:204px;
}
#sidenav a {padding:2px 1px 1px 16px}
#sidenav a:hover {color:#000000}
#sidenav a.active {background-color:#4CAF50;color:#ffffff}
#sidenav .w3-closebtn {
position:absolute;
right:16px;
top:0;
}
#leftmenuinner {
position:fixed;
top:0;
padding-top:112px;
padding-bottom:0;    
height:100%;
width:220px;
background-color:transparent;
}
#leftmenuinnerinner {
height:100%;
width:100%;
overflow-y:scroll;
overflow-x:hidden;
padding-top:20px;
}
#main {padding:16px}
#mainLeaderboard {height:90px}
#right {text-align:center;padding:16px 16px 0 0}
#right a {text-decoration:none}
#right a:hover {text-decoration:underline}
#skyscraper {min-height:600px}
.sidesection {margin-bottom:32px;}
.bottomad {padding:0 16px 16px 0;float:left;width:auto;}
.footer a {text-decoration:none;}
.footer a:hover{text-decoration:underline;}
#nav_tutorials,#nav_references,#nav_examples{-webkit-overflow-scrolling:touch;overflow:auto;}
#nav_tutorials::-webkit-scrollbar,#nav_references::-webkit-scrollbar,#nav_examples::-webkit-scrollbar {width: 12px;}
#nav_tutorials::-webkit-scrollbar-track,#nav_references::-webkit-scrollbar-track,#nav_examples::-webkit-scrollbar-track {background:#555555;}
#nav_tutorials::-webkit-scrollbar-thumb,#nav_references::-webkit-scrollbar-thumb,#nav_examples::-webkit-scrollbar-thumb {background: #999999;}
.w3-dropnav {
display:none;
letter-spacing:0;
margin-top:44px;
}
.w3-dropnav .w3-closebtn {
padding:0 16px 16px 16px !important;
position:absolute;
right:0;
}
.w3-dropnav a{display:block;padding:2px 0!important}
.w3-dropnav a:hover{background-color:transparent;color:#fff;text-decoration:underline!important}
.nextprev a {font-size:17px;border:1px solid #cccccc;}
.nextprev a:link,.nextprev a:visited {background-color:#ffffff;color:#000000;}
.nextprev a.w3-right {background-color:#4CAF50;color:#ffffff;border-color:#4CAF50}
.w3-theme {color:#fff !important;background-color:#73AD21 !important;background-color:#4CAF50 !important}
.w3-theme-border {border-color:#4CAF50 !important}
.fa-facebook-square,.fa-twitter-square,.fa-google-plus-square {padding:0 8px;}
.fa-facebook-square:hover, .fa-thumbs-o-up:hover {color:#3B5998;}
.fa-twitter-square:hover {color:#55acee;}
.fa-google-plus-square:hover {color:#dd4b39;}
#google_translate_element img {margin-bottom:-1px;}
#googleSearch {color:#000000;}
#googleSearch a {padding:0 !important;}
.searchdiv {max-width:400px;margin:auto;text-align:left;font-size:16px}
div.cse .gsc-control-cse, div.gsc-control-cse {background-color:transparent;border:none;padding:6px;margin:0px}
td.gsc-search-button input.gsc-search-button {background-color:#4CAF50;border-color:#4CAF50}
td.gsc-search-button input.gsc-search-button:hover {background-color:#46a049;}
input.gsc-input, .gsc-input-box, .gsc-input-box-hover, .gsc-input-box-focus, .gsc-search-button {
box-sizing:content-box; line-height:normal;}
.gsc-tabsArea div {overflow:visible;}
/*"nullstille" w3css:*/
.w3-main{transition:margin-left 0s;}
.w3-sidenav a {transition:background-color 0s;}
@media screen and (max-width:601px){.w3-navbar li a{display:inline-block}.w3-navbar li a:first-child{padding:8px 16px}.w3-dropnav a{display:block;}}	
@media screen and (max-width:600px){
  .w3-navbar{text-align:left}
  .w3-navbar li:not(.w3-opennav){float:left;width:auto!important;}
  .w3-navbar li.w3-right {float: right!important;}
}
/*"nullstilling" slutt*/
@media (min-width:1675px) {
#main {width:79%}
#right {width:21%}
}
@media (max-width:992px) {
.top {height:100px}
.top img {display:block;margin:auto;}
.top .w3schools-logo {position:relative;top:0;width:100%;text-align:center;margin:auto}
.toptext {width:100%;text-align:center}
#sidenav {width:260px;}
#sidenav h2 {font-size:26px;width:100%;}
#sidenav a {padding:3px 2px 3px 24px;font-size:17px}
#leftmenuinner {  
box-shadow:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
overflow:auto;
-webkit-overflow-scrolling:touch;
height:100%;
position:relative;
width:auto;
padding-top:0;
background-color:#f1f1f1;
}
#leftmenuinnerinner {overflow-y:scroll}
.bottomad {float:none;text-align:center}
#skyscraper {min-height:60px}
}
@media screen and (max-width:600px) {
.top {height:68px}
.toptext {display:none}
}
@font-face {
font-family:'fontawesome';
src: url('../lib/fonts/fontawesome.eot?14663396');
src:url('../lib/fonts/fontawesome.eot?14663396#iefix') format('embedded-opentype'),
url('../lib/fonts/fontawesome.woff?14663396') format('woff'),
url('../lib/fonts/fontawesome.ttf?14663396') format('truetype'),
url('../lib/fonts/fontawesome.svg?14663396#fontawesome') format('svg');
font-weight:normal;
font-style:normal;
}
.fa {
display:inline-block;
font:normal normal normal 14px/1 FontAwesome;
font-size:inherit;
text-rendering:auto;
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale;
transform:translate(0, 0);
}
.fa-2x {
 font-size:2em;
}
.fa-home:before {content:'\e800';}
.fa-globe:before {content:'\e801';}
.fa-search:before {content:'\e802'; }
.fa-thumbs-o-up:before {content:'\e803';}
.fa-left-open:before {content:'\e804';}
.fa-right-open:before {content:'\e805';}
.fa-facebook-square:before {content:'\e806';}
.fa-google-plus-square:before {content:'\e807';}
.fa-twitter-square:before {content:'\e808';}
.fa-caret-down:before {content:'\e809';}
.fa-caret-up:before {content:'\e80a';}
span.marked, span.deprecated {
 color:#e80000;
 background-color:transparent;
}
.intro {font-size:16px}
.w3-btn, .w3-btn:link, .w3-btn:visited {color:#FFFFFF;background-color:#4CAF50}
a.w3-btn[href*="exercise.asp"] {margin:10px 5px 0 0}
a.btnplayit,a.btnplayit:link,a.btnplayit:visited {background-color:#FFAD33;padding:1px 10px 2px 10px}
a.btnplayit:hover,a.btnplayit:active {background-color:#ffffff;color:#FFAD33}
a.btnsmall:link,a.btnsmall:visited,a.btnsmall:active,a.btnsmall:hover {
float:right;padding:1px 10px 2px 10px;font:15px Verdana, sans-serif}
a.btnsmall:active,a.btnsmall:hover {color:#4CAF50;background-color:#ffffff}
@media screen and (max-width:700px) {
#mainLeaderboard {height:60px}
#div-gpt-ad-1422003450156-0 {float:none;margin-left:auto;margin-right:auto}
#div-gpt-ad-1422003450156-3 {float:none;margin-left:auto;margin-right:auto}
}
@media (max-width:1600px) {#topnav ul:nth-of-type(1) li:nth-of-type(16){display:none;}}
@media (max-width:1500px) {#topnav ul:nth-of-type(1) li:nth-of-type(12){display:none;}}
@media (max-width:1410px) {#topnav ul:nth-of-type(1) li:nth-of-type(11){display:none;}}
@media (max-width:1350px) {#topnav ul:nth-of-type(1) li:nth-of-type(10){display:none;}}
@media (max-width:1230px) {#topnav ul:nth-of-type(1) li:nth-of-type(9){display:none;}}
@media (max-width:1140px) {#topnav ul:nth-of-type(1) li:nth-of-type(8){display:none;}}
@media (max-width:1000px) {#topnav ul:nth-of-type(1) li:nth-of-type(7){display:none;}}
@media (max-width:992px) {#topnav ul:nth-of-type(1) li:nth-of-type(6){display:none;}}
@media (max-width:930px) {#topnav ul:nth-of-type(1) li:nth-of-type(17){display:none;}}
@media (max-width:800px) {#topnav ul:nth-of-type(1) li:nth-of-type(18){display:none;}}
@media (max-width:650px) {#topnav ul:nth-of-type(1) li:nth-of-type(5){display:none;} #topnav ul:nth-of-type(1) li:nth-of-type(15){display:none;}}
@media (max-width:460px) {#topnav ul:nth-of-type(1) li:nth-of-type(4){display:none;}}
@media (max-width:400px) {#topnav ul:nth-of-type(1) li:nth-of-type(3){display:none;}}
@media (max-width:320px) {#topnav ul:nth-of-type(2) li:nth-of-type(1){display:none;}}

.w3-note{background-color:#ffffcc;border-left:6px solid #ffeb3b}
.w3-warning{background-color:#ffdddd;border-left:6px solid #f44336}
.w3-info{background-color:#ddffdd;border-left:6px solid #4CAF50}
</style>
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3855518-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');
</script>
<!-- Ezoic Ad Testing Code-->

<!-- Ezoic Ad Testing Code-->
<!-- EZOIC_REMOVE_BEGIN -->
<script type='text/javascript'>
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
gads.src = 'https://www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();
</script>
<script type='text/javascript'>
// GPT slots
var gptAdSlots = [];
googletag.cmd.push(function() {
var leaderMapping = googletag.sizeMapping().
// Mobile ad
addSize([0, 0], [320, 50]). 
// Vertical Tablet ad
addSize([480, 0], [468, 60]). 
// Horizontal Tablet
addSize([750, 0], [728, 90]).
// Small Desktop
addSize([993, 0], [468, 60]).
// Normal Desktop
addSize([1135, 0], [728, 90]).
// Large Desktop and bigger ad
addSize([1425, 0], [[728, 90], [970, 90]]).build();
gptAdSlots[0] = googletag.defineSlot('/16833175/MainLeaderboard', [[728, 90], [970, 90]], 'div-gpt-ad-1422003450156-2').
defineSizeMapping(leaderMapping).addService(googletag.pubads());
var skyMapping = googletag.sizeMapping().
// Mobile ad
addSize([0, 0], [320, 50]). 
// Tablet ad
addSize([975, 0], [120, 600]). 
// Desktop
addSize([1135, 0], [160, 600]).   
// Large Desktop
addSize([1675, 0], [[160, 600], [300, 600], [300, 1050]]).build();
gptAdSlots[1] = googletag.defineSlot('/16833175/WideSkyScraper', [[160, 600], [300, 600], [300, 1050]], 'div-gpt-ad-1422003450156-5').
defineSizeMapping(skyMapping).addService(googletag.pubads());
var stickyMapping = googletag.sizeMapping().
// Mobile ad
addSize([0, 0], []). 
// Tablet ad
addSize([975, 0], [120, 600]). 
// Desktop
addSize([1135, 0], [160, 600]).   
// Large Desktop
addSize([1675, 0], [[160, 600], [300, 600], [300, 250]]).build();
gptAdSlots[4] = googletag.defineSlot('/16833175/StickySkyScraper', [[300, 600], [120, 600], [300, 250], [160, 600]], 'div-gpt-ad-1472547360578-0').
defineSizeMapping(stickyMapping).addService(googletag.pubads());
var bmrMapping = googletag.sizeMapping().
// Smaller
addSize([0, 0], [[300, 250], [336, 280]]). 
// Large Desktop
addSize([1240, 0], [[300, 250], [336, 280], [970, 250]]).build();
gptAdSlots[2] = googletag.defineSlot('/16833175/BottomMediumRectangle', [[300, 250], [336, 280], [970, 250]], 'div-gpt-ad-1422003450156-0').
defineSizeMapping(bmrMapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
var rbmrMapping = googletag.sizeMapping().
// Smaller
addSize([0, 0], []). 
// Large Desktop
addSize([975, 0], [[300, 250], [336, 280]]).build();
gptAdSlots[3] = googletag.defineSlot('/16833175/RightBottomMediumRectangle', [[300, 250], [336, 280]], 'div-gpt-ad-1422003450156-3').
defineSizeMapping(rbmrMapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
googletag.pubads().setTargeting("content",(function () {
  var folder = location.pathname;
  folder = folder.replace("/", "");
  folder = folder.substr(0, folder.indexOf("/"));
  return folder;
})()
);
googletag.enableServices();
});
</script>
<!-- EZOIC_REMOVE_END -->
<script type='text/javascript'>
var stickyadstatus = "";
function fix_stickyad() {
  var elem = document.getElementById("stickyadcontainer");
  if (!elem) {return false;}
  if (document.getElementById("skyscraper")) {
    var skyWidth = Number(w3_getStyleValue(document.getElementById("skyscraper"), "width").replace("px", ""));  
    }
  else {
    var skyWidth = Number(w3_getStyleValue(document.getElementById("right"), "width").replace("px", ""));  
  }
  elem.style.width = skyWidth + "px";
  if (window.innerWidth <= 992) {
    elem.style.position = "";
    elem.style.top = stickypos + "px";
    return false;
  }
  var stickypos = document.getElementById("stickypos").offsetTop;
  var docTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var adHeight = Number(w3_getStyleValue(elem, "height").replace("px", ""));
  if (stickyadstatus == "") {
    if ((stickypos - docTop) < 60) {
      elem.style.position = "fixed";
      elem.style.top = "60px";
      stickyadstatus = "sticky";
    }
  } else {
    if ((docTop + 60) - stickypos < 0) {  
      elem.style.position = "";
      elem.style.top = stickypos + "px";
      stickyadstatus = "";
    }
  }
  if (stickyadstatus == "sticky") {
    if ((docTop + adHeight + 60) > document.getElementById("footer").offsetTop) {
      elem.style.position = "absolute";
      elem.style.top = (document.getElementById("footer").offsetTop - adHeight) + "px";
    } else {
        elem.style.position = "fixed";
        elem.style.top = "60px";
        stickyadstatus = "sticky";
    }
  }
}
function w3_getStyleValue(elmnt,style) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(elmnt,null).getPropertyValue(style);
  } else {
    return elmnt.currentStyle[style];
  }
}
</script>

<link rel='canonical' href='https://www.w3schools.com/html/html_headings.asp' />
<script data-cfasync="false" type="text/javascript">window.google_analytics_uacct = "UA-80950036-41";</script>
<script data-cfasync="false" type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['e._setAccount', 'UA-80950036-41']);
_gaq.push(['f._setAccount', 'UA-38339005-1']);
_gaq.push(['e._setDomainName', 'w3schools.com']);
_gaq.push(['f._setDomainName', 'w3schools.com']);
_gaq.push(['e._setCustomVar',1,'template','old_site_gc',3]);
_gaq.push(['e._setCustomVar',2,'t','126',3]);
_gaq.push(['e._setCustomVar',3,'rid','0',2]);
_gaq.push(['e._setCustomVar',4,'bra','mod6',3]);
_gaq.push(['f._setSampleRate', '5']);
_gaq.push(['e._setSampleRate', '5']);
_gaq.push(['e._setAllowAnchor',true]);
_gaq.push(['e._setSiteSpeedSampleRate', 10]);
_gaq.push(['f._setCustomVar',1,'template','old_site_gc',3]);
_gaq.push(['f._setCustomVar',2,'domain','w3schools.com',3]);
_gaq.push(['f._setSiteSpeedSampleRate', 20]);
_gaq.push(['e._trackPageview']);
_gaq.push(['f._trackPageview']);


(function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var ez_tos_track_count = 0;
var ez_last_activity_count = 0;
(function (__ez_tos) {
  window.setInterval(function () {
    __ez_tos = (function (t) {
      return t[0] == 45 ? (parseInt(t[1]) + 1) + ':00' : (t[1] || '0') + ':' + (parseInt(t[0]) + 15);
    })(__ez_tos.split(':').reverse());

    ez_tos_track_count++;
    if(ez_tos_track_count > 1 && ez_tos_track_count < (ez_last_activity_count + 4) && ez_tos_track_count < 240)
    {
        if(window.pageTracker)
        {
            pageTracker._trackEvent('Time', 'Log', __ez_tos);

        }
        else
        {
           _gaq.push(['e._trackEvent', 'Time', 'Log', __ez_tos]);
           _gaq.push(['f._trackEvent', 'Time', 'Log', __ez_tos]);

        }

		if(typeof(_paq) != 'undefined')
        {
            _paq.push(['trackEvent', 'Time', __ez_tos, 'TimeOnPage']);
        }

    }
  }, 15000);
})('00');

</script>
<script type="text/javascript">var ezouid = "761790790";</script><base href="https://www.w3schools.com/html/html_headings.asp"><script type='text/javascript'>
var ezoTemplate = 'old_site_gc';
if(typeof ezouid == 'undefined')
{
    var ezouid = 'none';
}
var ezoFormfactor = '1';
var ezo_elements_to_check = Array();
</script><!-- START EZHEAD -->
<script type='text/javascript'>
var soc_app_id = '0';
var did = 34890;
var ezdomain = 'w3schools.com';
var ezoicSearchable = 1;
</script>
<!--{jquery}-->
<!-- END EZHEAD -->
<script type="text/javascript" data-cfasync="false">var _ezaq = {"ab_test_id":"mod6","ab_test_val":"","adgroup_rank_id":-1,"browser":"Chrome","browser_version":58,"country":"GB","device_height":528,"device_width":1280,"domain_id":34890,"engaged_time_visit":1060,"forensiq_score":-1,"form_factor_id":1,"ip":"86.188.177.235","landing_page_url":"https://www.w3schools.com/html/html_attributes.asp","os":"Windows","page_ad_positions":"","page_view_id":"7de204a2-3984-4059-582d-adc396b0ca13","pv_event_count":0,"referrer_id":0,"referring_domain":"w3schools.com","region":"us-east-1","serverid":"54.80.102.222:1556","t_epoch":1487777384,"template_id":126,"time_on_site_visit":10531,"url":"https://www.w3schools.com/html/html_headings.asp","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3019.0 Safari/537.36","user_id":761790790,"visit_id":752887316,"visit_uuid":"476d00b0-ed95-441e-4770-3dc7f48f99e0"};var _ezExtraQueries = "&ez_orig=1";</script><script data-cfasync='false' type="text/javascript" src="/ezoic/imp2.js?cb=147-3&v=10"></script></head>
<body>
<div class='w3-container top'>
  <a class='w3schools-logo' href='//www.w3schools.com'>w3schools<span class='dotcom'>.com</span></a>
  <div class='w3-right w3-hide-small w3-wide toptext'>THE WORLD'S LARGEST WEB DEVELOPER SITE</div>
</div>

<div style='display:none;position:absolute;z-index:4;right:52px;height:44px;background-color:#5f5f5f;letter-spacing:normal;' id='googleSearch'>
  <div class='gcse-search'></div>
</div>
<div style='display:none;position:absolute;z-index:3;right:111px;height:44px;background-color:#5f5f5f;text-align:right;padding-top:9px;' id='google_translate_element'></div>

<div class='w3-card-2 w3-slim topnav' id='topnav'>
  <div style="overflow:auto;">
    <ul class="w3-navbar w3-left" style="width:100%;overflow:hidden;height:44px">
      <li><a href='javascript:void(0);' class='topnav-localicons w3-hide-large w3-left' onclick='open_menu()' title='Menu'>&#9776;</a></li>
      <li><a href='/default.asp' class='topnav-icons fa fa-home w3-left' title='Home'></a></li>
      <li><a href='/html/default.asp' title='HTML Tutorial'>HTML</a></li>
      <li><a href='/css/default.asp' title='CSS Tutorial'>CSS</a></li>
      <li><a href='/js/default.asp' title='JavaScript Tutorial'>JAVASCRIPT</a></li>
      <li><a href='/sql/default.asp' title='SQL Tutorial'>SQL</a></li>
      <li><a href='/php/default.asp' title='PHP Tutorial'>PHP</a></li>
      <li><a href='/bootstrap/default.asp' title='Bootstrap Tutorial'>BOOTSTRAP</a></li>
      <li><a href='/jquery/default.asp' title='jQuery Tutorial'>JQUERY</a></li>
      <li><a href='/angular/default.asp' title='Angular Tutorial'>ANGULAR</a></li>
      <li><a href='/w3css/default.asp' title='W3.CSS Tutorial'>W3.CSS</a></li>
      <li><a href='/xml/default.asp' title='XML Tutorial'>XML</a></li>
      <li><a id='topnavbtn_tutorials' href='javascript:void(0);' onclick='w3_open_nav("tutorials")' title='Tutorials'>MORE <i class='fa fa-caret-down'></i><i class='fa fa-caret-up' style='display:none'></i></a></li>
      <li class="w3-right"><a href='javascript:void(0);' class='topnav-icons fa w3-right' onclick='open_search(this)' title='Search W3Schools'>&#xe802;</a></li>
      <li class="w3-right"><a href='javascript:void(0);' class='topnav-icons fa w3-right' onclick='open_translate(this)' title='Translate W3Schools'>&#xe801;</a></li>
      <li class="w3-right"><a href='/forum/default.asp'>FORUM</a></li>
      <li class="w3-right"><a id='topnavbtn_examples' href='javascript:void(0);' onclick='w3_open_nav("examples")' title='Examples'>EXAMPLES <i class='fa fa-caret-down'></i><i class='fa fa-caret-up' style='display:none'></i></a></li>
      <li class="w3-right"><a id='topnavbtn_references' href='javascript:void(0);' onclick='w3_open_nav("references")' title='References'>REFERENCES <i class='fa fa-caret-down'></i><i class='fa fa-caret-up' style='display:none'></i></a></li>
    </ul>
    <div id='nav_tutorials' class='w3-dropnav w3-card-2'>
      <span onclick='w3_close_nav("tutorials")' class='w3-closebtn w3-xlarge w3-hover-text-white' style="right:12px;">&times;</span>
      <div class='w3-row-padding w3-padding-xxlarge'>
        <div class='w3-col l3 m6'>
          <h3>HTML and CSS</h3>
          <a href='/html/default.asp'>Learn HTML</a>
          <a href='/css/default.asp'>Learn CSS</a>
          <a href='/w3css/default.asp'>Learn W3.CSS</a>
          <a href='/colors/default.asp'>Learn Colors</a>
          <a href='/bootstrap/default.asp'>Learn Bootstrap</a>
          <a href='/graphics/default.asp'>Learn Graphics</a>
          <a href='/icons/default.asp'>Learn Icons</a>
          <a href='/howto/default.asp'>Learn How To</a>
        </div>
        <div class='w3-col l3 m6'>  
          <h3>JavaScript</h3>
          <a href='/js/default.asp'>Learn JavaScript</a>
          <a href='/w3js/default.asp'>Learn W3.JS</a>
          <a href='/jquery/default.asp'>Learn jQuery</a>
          <a href='/jquerymobile/default.asp'>Learn jQueryMobile</a>
          <a href='/appml/default.asp'>Learn AppML</a>
          <a href='/angular/default.asp'>Learn AngularJS</a>
          <a href="/js/js_json_intro.asp">Learn JSON</a>
          <a href='/js/js_ajax_intro.asp'>Learn AJAX</a>
          <div class="w3-hide-small"><br><br></div>
        </div>
        <div class='w3-col l3 m6'>
          <h3>Server Side</h3>
          <a href='/sql/default.asp'>Learn SQL</a>
          <a href='/php/default.asp'>Learn PHP</a>
          <a href='/asp/default.asp'>Learn ASP</a>
          <h3>Web Building</h3>
          <a href="/w3css/w3css_templates.asp">Web Templates</a>
          <a href='/browsers/default.asp'>Web Statistics</a>
          <a href='/cert/default.asp'>Web Certificates</a>
        </div>
        <div class='w3-col l3 m6'>
          <h3>XML</h3>
          <a href='/xml/default.asp'>Learn XML</a>
          <a href='/xml/ajax_intro.asp'>Learn XML AJAX</a>
          <a href="/xml/dom_intro.asp">Learn XML DOM</a>
          <a href='/xml/xml_dtd_intro.asp'>Learn XML DTD</a>
          <a href='/xml/schema_intro.asp'>Learn XML Schema</a>
          <a href='/xml/xsl_intro.asp'>Learn XSLT</a>
          <a href='/xml/xpath_intro.asp'>Learn XPath</a>
          <a href='/xml/xquery_intro.asp'>Learn XQuery</a>
        </div>
      </div>
      <br>
    </div>
    <div id='nav_references' class='w3-dropnav w3-card-2'>
      <span onclick='w3_close_nav("references")' class='w3-closebtn w3-xlarge w3-hover-text-white' style="right:12px;">&times;</span>
      <div class='w3-row-padding w3-padding-xxlarge'>
        <div class='w3-col m4'>
          <h3>HTML</h3>
          <a href='/tags/default.asp'>HTML Tag Reference</a>
          <a href='/tags/ref_eventattributes.asp'>HTML Event Reference</a>
          <a href='/colors/default.asp'>HTML Color Reference</a>
          <a href='/tags/ref_attributes.asp'>HTML Attribute Reference</a>
          <a href='/tags/ref_canvas.asp'>HTML Canvas Reference</a>
          <a href='/graphics/svg_reference.asp'>HTML SVG Reference</a>
          <a href='/graphics/google_maps_reference.asp'>Google Maps Reference</a>
          <h3>CSS</h3>
          <a href='/cssref/default.asp'>CSS Reference</a>
          <a href='/cssref/css_selectors.asp'>CSS Selector Reference</a>
          <a href='/w3css/w3css_references.asp'>W3.CSS Reference</a>
          <a href='/bootstrap/bootstrap_ref_all_classes.asp'>Bootstrap Reference</a>
          <a href='/icons/icons_reference.asp'>Icon Reference</a>
        </div>
        <div class='w3-col m4'>
          <h3>JavaScript</h3>
          <a href='/jsref/default.asp'>JavaScript Reference</a>
          <a href='/jsref/default.asp'>HTML DOM Reference</a>
          <a href='/w3js/w3js_references.asp'>W3.JS Reference</a>
          <a href='/jquery/jquery_ref_selectors.asp'>jQuery Reference</a>
          <a href='/jquerymobile/jquerymobile_ref_data.asp'>jQuery Mobile Reference</a>
          <a href='/angular/angular_ref_directives.asp'>AngularJS Reference</a>
          <h3>XML</h3>
          <a href='/xml/dom_nodetype.asp'>XML Reference</a>
          <a href='/xml/dom_http.asp'>XML Http Reference</a>
          <a href='/xml/xsl_elementref.asp'>XSLT Reference</a>
          <a href='/xml/schema_elements_ref.asp'>XML Schema Reference</a>
        </div>
        <div class='w3-col m4'>
          <h3>Charsets</h3>
          <a href='/charsets/default.asp'>HTML Character Sets</a>
          <a href='/charsets/ref_html_ascii.asp'>HTML ASCII</a>
          <a href='/charsets/ref_html_ansi.asp'>HTML ANSI</a>
          <a href='/charsets/ref_html_ansi.asp'>HTML Windows-1252</a>
          <a href='/charsets/ref_html_8859.asp'>HTML ISO-8859-1</a>
          <a href='/charsets/ref_html_symbols.asp'>HTML Symbols</a>
          <a href='/charsets/ref_html_utf8.asp'>HTML UTF-8</a>
          <h3>Server Side</h3>
          <a href='/php/php_ref_array.asp'>PHP Reference</a>
          <a href='/sql/sql_quickref.asp'>SQL Reference</a>
          <a href='/asp/asp_ref_response.asp'>ASP Reference</a>
        </div>
      </div>
      <br>
    </div>
    <div id='nav_examples' class='w3-dropnav w3-card-2'>
      <span onclick='w3_close_nav("examples")' class='w3-closebtn w3-xlarge w3-hover-text-white' style="right:12px;">&times;</span>
      <div class='w3-row-padding w3-padding-xxlarge'>
        <div class='w3-col l3 m6'>
          <h3>HTML/CSS</h3>
          <a href='/html/html_examples.asp'>HTML Examples</a>
          <a href='/css/css_examples.asp'>CSS Examples</a>
          <a href='/w3css/w3css_examples.asp'>W3.CSS Examples</a>
          <a href='/w3css/w3css_templates.asp'>W3.CSS Templates</a>
          <a href='/bootstrap/bootstrap_examples.asp'>Bootstrap Examples</a>
        </div>
        <div class='w3-col l3 m6'>
          <h3>JavaScript</h3>
          <a href='/js/js_examples.asp' target='_top'>JavaScript Examples</a>
          <a href='/js/js_dom_examples.asp' target='_top'>HTML DOM Examples</a>
          <a href='/w3js/w3js_examples.asp'>W3.JS Examples</a>
          <a href='/jquery/jquery_examples.asp' target='_top'>jQuery Examples</a>
          <a href='/jquerymobile/jquerymobile_examples.asp' target='_top'>jQuery Mobile Examples</a>
          <a href='/angular/angular_examples.asp' target='_top'>AngularJS Examples</a>
          <a href='/js/js_ajax_examples.asp' target='_top'>AJAX Examples</a>
        </div>
        <div class='w3-col l3 m6'>
          <h3>Server Side</h3>
          <a href='/php/php_examples.asp' target='_top'>PHP Examples</a>
          <a href="/asp/asp_examples.asp" target="_top">ASP Examples</a>
          <h3>XML</h3>
          <a href='/xml/xml_examples.asp' target='_top'>XML Examples</a>
          <a href='/xml/xsl_examples.asp' target='_top'>XSLT Examples</a>
          <a href='/xml/xpath_examples.asp' target='_top'>XPath Examples</a>
          <a href='/xml/schema_example.asp' target='_top'>XML Schema Examples</a>
          <a href='/graphics/svg_examples.asp' target='_top'>SVG Examples</a>
        </div>
        <div class='w3-col l3 m6'>
          <h3>Quizzes</h3>
          <a href='/quiztest/quiztest.asp?Qtest=HTML' target='_top'>HTML Quiz</a>
          <a href='/quiztest/quiztest.asp?Qtest=CSS' target='_top'>CSS Quiz</a>
          <a href='/quiztest/quiztest.asp?Qtest=JavaScript' target='_top'>JavaScript Quiz</a>
          <a href='/quiztest/quiztest.asp?Qtest=Bootstrap' target='_top'>Bootstrap Quiz</a>
          <a href='/quiztest/quiztest.asp?Qtest=jQuery' target='_top'>jQuery Quiz</a>
          <a href='/quiztest/quiztest.asp?Qtest=PHP' target='_top'>PHP Quiz</a>
          <a href="/quiztest/quiztest.asp?Qtest=SQL" target="_top">SQL Quiz</a>
          <a href='/quiztest/quiztest.asp?Qtest=XML' target='_top'>XML Quiz</a>
        </div>
      </div>
      <br>
    </div>
  </div>
</div>

<div class='w3-sidenav w3-collapse w3-slim' id='sidenav'>
  <div id='leftmenuinner'>
    <div class='w3-light-grey' id='leftmenuinnerinner'>
      <a href='javascript:void(0)' onclick='close_menu()' class='w3-closebtn w3-hide-large w3-large' style='padding:3px 12px;'>&times;</a>
<h2 class="left"><span class="left_h2">HTML5</span> Tutorial</h2>
<a target="_top" href="default.asp">HTML HOME</a>
<a target="_top" href="html_intro.asp">HTML Introduction</a>
<a target="_top" href="html_editors.asp">HTML Editors</a>
<a target="_top" href="html_basic.asp">HTML Basic</a>
<a target="_top" href="html_elements.asp">HTML Elements</a>
<a target="_top" href="html_attributes.asp">HTML Attributes</a>
<a target="_top" href="html_headings.asp">HTML Headings</a>
<a target="_top" href="html_paragraphs.asp">HTML Paragraphs</a>
<a target="_top" href="html_styles.asp">HTML Styles</a>
<a target="_top" href="html_formatting.asp">HTML Formatting</a>
<a target="_top" href="html_quotation_elements.asp">HTML Quotations</a>
<a target="_top" href="html_computercode_elements.asp">HTML Computercode</a>
<a target="_top" href="html_comments.asp">HTML Comments</a>
<a target="_top" href="html_colors.asp">HTML Colors</a>
<a target="_top" href="html_css.asp">HTML CSS</a>
<a target="_top" href="html_links.asp">HTML Links</a>
<a target="_top" href="html_images.asp">HTML Images</a>
<a target="_top" href="html_tables.asp">HTML Tables</a>
<a target="_top" href="html_lists.asp">HTML Lists</a>
<a target="_top" href="html_blocks.asp">HTML Blocks</a>
<a target="_top" href="html_classes.asp">HTML Classes</a>
<a target="_top" href="html_iframe.asp">HTML Iframes</a>
<a target="_top" href="html_scripts.asp">HTML JavaScript</a>
<a target="_top" href="html_filepaths.asp">HTML File Paths</a>
<a target="_top" href="html_head.asp">HTML Head</a>
<a target="_top" href="html_layout.asp">HTML Layout</a>
<a target="_top" href="html_responsive.asp">HTML Responsive</a>
<a target="_top" href="html_entities.asp">HTML Entities</a>
<a target="_top" href="html_symbols.asp">HTML Symbols</a>
<a target="_top" href="html_charset.asp">HTML Charset</a>
<a target="_top" href="html_urlencode.asp">HTML URL Encode</a>
<a target="_top" href="html_xhtml.asp">HTML XHTML</a>
<br>
<h2 class="left"><span class="left_h2">HTML</span> Forms</h2>
<a target="_top" href="html_forms.asp">HTML Forms</a>
<a target="_top" href="html_form_elements.asp">HTML Form Elements</a>
<a target="_top" href="html_form_input_types.asp">HTML Input Types</a>
<a target="_top" href="html_form_attributes.asp">HTML Input Attributes</a>
<br>
<h2 class="left"><span class="left_h2">HTML5</span></h2>
<a target="_top" href="html5_intro.asp">HTML5 Intro</a>
<a target="_top" href="html5_browsers.asp">HTML5 Support</a>
<a target="_top" href="html5_new_elements.asp">HTML5 Elements</a>
<a target="_top" href="html5_semantic_elements.asp">HTML5 Semantics</a>
<a target="_top" href="html5_migration.asp">HTML5 Migration</a>
<a target="_top" href="html5_syntax.asp">HTML5 Style Guide</a>
<br>
<h2 class="left"><span class="left_h2">HTML</span> Graphics</h2>
<a target="_top" href="html5_canvas.asp">HTML Canvas</a>
<a target="_top" href="html5_svg.asp">HTML SVG</a>
<a target="_top" href="html_googlemaps.asp">HTML Google Maps</a>
<br>
<h2 class="left"><span class="left_h2">HTML</span> Media</h2>
<a target="_top" href="html_media.asp">HTML Media</a>
<a target="_top" href="html5_video.asp">HTML Video</a>
<a target="_top" href="html5_audio.asp">HTML Audio</a>
<a target="_top" href="html_object.asp">HTML Plug-ins</a>
<a target="_top" href="html_youtube.asp">HTML YouTube</a>
<br>
<h2 class="left"><span class="left_h2">HTML</span> APIs</h2>
<a target="_top" href="html5_geolocation.asp">HTML Geolocation</a>
<a target="_top" href="html5_draganddrop.asp">HTML Drag/Drop</a>
<a target="_top" href="html5_webstorage.asp">HTML Local Storage</a>
<a target="_top" href="html5_app_cache.asp">HTML App Cache</a>
<a target="_top" href="html5_webworkers.asp">HTML Web Workers</a>
<a target="_top" href="html5_serversentevents.asp">HTML SSE</a>
<br>
<h2 class="left"><span class="left_h2">HTML</span> Examples</h2>
<a target="_top" href="html_examples.asp">HTML Examples</a>
<a target="_top" href="html_quiz.asp">HTML Quiz</a>
<a target="_top" href="html_exercises.asp">HTML Exercises</a>
<a target="_top" href="html_exam.asp">HTML Certificate</a>
<a target="_top" href="html_summary.asp">HTML Summary</a>
<br>
<h2 class="left"><span class="left_h2">HTML</span> References</h2>
<a target="_top" href="/tags/default.asp">HTML Tag List</a>
<a target="_top" href="/tags/ref_standardattributes.asp">HTML Attributes</a>
<a target="_top" href="/tags/ref_eventattributes.asp">HTML Events</a>
<a target="_top" href="/tags/ref_colornames.asp">HTML Colors</a>
<a target="_top" href="/tags/ref_canvas.asp">HTML Canvas</a>
<a target="_top" href="/tags/ref_av_dom.asp">HTML Audio/Video</a>
<a target="_top" href="/tags/ref_html_dtd.asp">HTML Doctypes</a>
<a target="_top" href="/tags/ref_charactersets.asp">HTML Character Sets</a>
<a target="_top" href="/tags/ref_urlencode.asp">HTML URL Encode</a>
<a target="_top" href="/tags/ref_language_codes.asp">HTML Lang Codes</a>
<a target="_top" href="/tags/ref_httpmessages.asp">HTTP Messages</a>
<a target="_top" href="/tags/ref_httpmethods.asp">HTTP Methods</a>
<a target="_top" href="/tags/ref_pxtoemconversion.asp">PX to EM Converter</a>
<a target="_top" href="/tags/ref_keyboardshortcuts.asp">Keyboard Shortcuts</a>
      <br><br>
    </div>
  </div>
</div>
<div class='w3-main w3-light-grey' id='belowtopnav' style='margin-left:220px;'>
  <div class='w3-row w3-white'>
    <div class='w3-col l10 m12' id='main'>
      <!-- Ezoic - Leaderboard - top_of_page -->
      <div id="ezoic-pub-ad-placeholder-103">
        <div id='mainLeaderboard' style='overflow:hidden;'>
          <!-- MainLeaderboard-->
          <div id='div-gpt-ad-1422003450156-2'>
            <script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1422003450156-2'); });</script>
          </div>
        </div>
      </div>
      <!-- End Ezoic - Leaderboard - top_of_page -->
<h1>HTML <span class="color_h1">Headings</span></h1>
<div class="w3-clear nextprev">
<a class="w3-left w3-btn" href="html_attributes.asp">&#10094; Previous</a>
<a class="w3-right w3-btn" href="html_paragraphs.asp">Next &#10095;</a>
</div>
<hr>
<p class="intro">Headings are important in HTML documents.</p>
<hr>

<h2>HTML Headings</h2>
<p>Headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</p>
<p>&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.</p>
<div class="w3-example">
<h3>Example</h3>
<div class="w3-code notranslate htmlHigh">
&lt;h1&gt;This is heading 1&lt;/h1&gt;<br>
&lt;h2&gt;This is heading 2&lt;/h2&gt;<br>
&lt;h3&gt;This is heading 3&lt;/h3&gt;<br>&lt;h4&gt;This is heading 4&lt;/h4&gt;<br>&lt;h5&gt;This is heading 5&lt;/h5&gt;<br>&lt;h6&gt;This is heading 6&lt;/h6&gt;</div>
<a target="_blank" href="tryit.asp?filename=tryhtml_headings" class="w3-btn w3-margin-bottom">Try it Yourself &raquo;</a>
</div>

<div class="w3-panel w3-note">
  <p><strong>Note:</strong> Browsers automatically add some white space (a margin) before and after a heading.</p>
</div>
<hr>

<h2>Headings Are Important</h2>
<p>Search engines use the headings to index the structure and content of your web pages.</p>
<p>Users skim your pages by its headings. It is important to use headings to show the document structure.</p>
<p>&lt;h1&gt; headings should be used for main headings, followed by &lt;h2&gt; headings, then the less important 
&lt;h3&gt;, and so on.</p>
<div class="w3-panel w3-note">
  <p><strong>Note:</strong> Use HTML headings for headings only. Don't use headings to make text 
  <strong>BIG</strong> or <strong>bold</strong>.</p>
</div>
<hr>

<h2>HTML Horizontal Rules</h2>
<p>The &lt;hr&gt; tag defines a thematic break in an HTML page, and is most often 
displayed as a horizontal rule.</p>
<p>The &lt;hr&gt; element is used to separate content (or define a change) in an HTML 
page:</p>
<div class="w3-example">
<h3>Example</h3>
<div class="w3-code notranslate htmlHigh">
 &lt;h1&gt;This is heading 1&lt;/h1&gt;<br>&lt;p&gt;This is some text.&lt;/p&gt;<br>&lt;hr&gt;<br>&lt;h2&gt;This is heading 2&lt;/h2&gt;<br>&lt;p&gt;This is some other text.&lt;/p&gt;<br>&lt;hr&gt;
</div>
<a target="_blank" href="tryit.asp?filename=tryhtml_headings_hr" class="w3-btn w3-margin-bottom">Try it Yourself &raquo;</a>
</div>
<hr>

<h2>The HTML &lt;head&gt; Element</h2>
<p>The HTML <strong>&lt;head&gt;</strong> element has nothing to do with HTML 
headings.</p>
<p>The &lt;head&gt; element is a container for metadata. HTML metadata is data about the HTML document. Metadata is not displayed.</p>
<p>The &lt;head&gt; element is placed between the &lt;html&gt; tag and the &lt;body&gt; tag:</p>
<div class="w3-example">
<h3>Example</h3>
<div class="w3-code notranslate htmlHigh">
&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br><br>&lt;head&gt;<br>&nbsp; &lt;title&gt;My First HTML&lt;/title&gt;<br>&nbsp; &lt;meta charset=&quot;UTF-8&quot;&gt;<br>&lt;/head&gt;<br><br>&lt;body&gt;<br>.<br>
 .<br>.</div>
<a class="w3-btn w3-margin-bottom" href="tryit.asp?filename=tryhtml_headings_head" target="_blank">Try it Yourself &raquo;</a>
</div>
<div class="w3-panel w3-note">
  <p><strong>Note:</strong> Metadata typically define the document title, character set, styles, links, scripts, and other meta information.</p>
</div>
<hr>

<h2>HTML Tip - How to View HTML Source</h2>
<p>Have you ever seen a Web page and wondered &quot;Hey! How did they do that?&quot;</p>
<p>To find out, right-click in the page and select &quot;View Page Source&quot; (in 
Chrome) or &quot;View Source&quot; (in IE), or similar in another browser. This will open a window 
containing the HTML code of the page.</p>
<hr>

<h2>Test Yourself with Exercises!</h2>
<p>
<a class="w3-btn" href="exercise.asp?filename=exercise_headings1" target="_blank">Exercise 1 &raquo;</a>&nbsp;&nbsp;
<a class="w3-btn" href="exercise.asp?filename=exercise_headings2" target="_blank">Exercise 2 &raquo;</a>&nbsp;&nbsp;
<a class="w3-btn" href="exercise.asp?filename=exercise_headings3" target="_blank">Exercise 3 &raquo;</a>&nbsp;&nbsp;
<a class="w3-btn" href="exercise.asp?filename=exercise_headings4" target="_blank">Exercise 4 &raquo;</a>
</p>
<hr>

<h2>HTML Tag Reference</h2>
<p>W3Schools' tag reference contains additional information about these tags and their attributes.</p>
<p>You will learn more about HTML tags and attributes in the next chapters of this tutorial.</p>
<table class="w3-table-all notranslate">
<tr>
  <th>Tag</th>
  <th>Description</th>
</tr>
<tr>
  <td><a href="/tags/tag_html.asp">&lt;html&gt;</a></td>
  <td>Defines the root of an HTML document</td>
</tr>
<tr>
  <td><a href="/tags/tag_body.asp">&lt;body&gt;</a></td>
  <td>Defines the document's body</td>
</tr>
<tr>
  <td><a href="/tags/tag_head.asp">&lt;head&gt;</a></td>
  <td>A container for all the head elements (title, scripts, styles, meta information, and more)</td>
</tr>
<tr>
  <td><a href="/tags/tag_hn.asp">&lt;h1&gt; to &lt;h6&gt;</a></td>
  <td>Defines HTML headings</td>
</tr>
<tr>
  <td><a href="/tags/tag_hr.asp">&lt;hr&gt;</a></td>
  <td>Defines a thematic change in the content</td>
</tr>
</table>
<br>

<div class="w3-clear nextprev">
<a class="w3-left w3-btn" href="html_attributes.asp">&#10094; Previous</a>
<a class="w3-right w3-btn" href="html_paragraphs.asp">Next &#10095;</a>
</div>
</div>
<div class="w3-col l2 m12" id="right">

<!-- Ezoic - WideSkyScraper - sidebar -->
<div id="ezoic-pub-ad-placeholder-104">
  <div class="sidesection">
    <div id="skyscraper">
      <div id="div-gpt-ad-1422003450156-5">
        <script>
        googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-1422003450156-5');
        });
        </script> 
      </div>
    </div>
  </div>
</div>
<!-- End Ezoic - WideSkyScraper - sidebar -->

<div class="sidesection">
<h4><a href="/colors/colors_picker.asp">COLOR PICKER</a></h4>
<a href="/colors/colors_picker.asp">
<img src="/images/colorpicker.gif" alt="colorpicker"></a>
</div>

<div class="sidesection">
<h4><a href="/howto/default.asp">LEARN MORE</a></h4>
<p>
<a href="/howto/howto_js_tabs.asp">Tabs</a><br>
<a href="/howto/howto_css_dropdown.asp">Dropdowns</a><br>
<a href="/howto/howto_js_accordion.asp">Accordions</a><br>
<a href="/howto/howto_js_weight_converter.asp">Convert Weights</a><br>
<a href="/howto/howto_css_animate_buttons.asp">Animated Buttons</a><br>
<a href="/howto/howto_js_sidenav.asp">Side Navigation</a><br>
<a href="/howto/howto_js_topnav.asp">Top Navigation</a><br>
<a href="/howto/howto_js_animate.asp">JS Animations</a><br>
<a href="/howto/howto_css_modals.asp">Modal Boxes</a><br>
<a href="/howto/howto_js_progressbar.asp">Progress Bars</a><br>
<a href="/howto/howto_css_login_form.asp">Login Form</a><br>
<a href="/howto/howto_html_include.asp">HTML Includes</a><br>
<a href="/howto/howto_google_maps.asp">Google Maps</a><br>
<a href="/howto/howto_css_loader.asp">Loaders</a><br>
<a href="/howto/howto_css_tooltip.asp">Tooltips</a><br>
<a href="/howto/howto_js_slideshow.asp">Slideshow</a><br>
<a href="/howto/howto_js_filter_lists.asp">Filter List</a><br>
<a href="/howto/howto_js_sort_list.asp">Sort List</a><br>
</p>
</div>

<div class="sidesection">
<h4>SHARE</h4>
<div class="w3-text-grey sharethis">
<script>
<!--
try{
loc=location.pathname;
if (loc.toUpperCase().indexOf(".ASP")<0) loc=loc+"default.asp";
txt='<a href="http://www.facebook.com/sharer.php?u=https://www.w3schools.com'+loc+'" target="_blank" title="Facebook"><span class="fa fa-facebook-square fa-2x"></span></a>';
txt=txt+'<a href="https://twitter.com/home?status=Currently reading https://www.w3schools.com'+loc+'" target="_blank" title="Twitter"><span class="fa fa-twitter-square fa-2x"></span></a>';
txt=txt+'<a href="https://plus.google.com/share?url=https://www.w3schools.com'+loc+'" target="_blank" title="Google+"><span class="fa fa-google-plus-square fa-2x"></span></a>';
document.write(txt);
} catch(e) {}
//-->
</script>
<br><br>
<a href="javascript:void(0);" onclick="clickFBLike()" title="Like W3Schools on Facebook">
<span class="fa fa-thumbs-o-up fa-2x"></span></a>
<div id="fblikeframe" class="w3-modal">
<div class="w3-modal-content w3-padding-64 w3-animate-zoom" id="popupDIV"></div>
</div>
</div>
</div>

<div class="sidesection">
<h4><a target="_blank" href="//www.w3schools.com/cert/default.asp">CERTIFICATES</a></h4>
<p>HTML, CSS, JavaScript, PHP, jQuery, Bootstrap and XML.</p>
<a target="_blank" href="//www.w3schools.com/cert/default.asp" class="w3-btn w3-dark-grey">
Read More &raquo;</a>
</div>
  <div id="stickypos" class="sidesection" style="text-align:center;">
    <div id="stickyadcontainer">

<!-- Ezoic - StickySkyScraper - sidebar -->
<div id="ezoic-pub-ad-placeholder-105">
      <div style="position:relative;margin:auto;">
        <div id='div-gpt-ad-1472547360578-0'>
          <script>
          if (Number(w3_getStyleValue(document.getElementById("main"), "height").replace("px", "")) > 2200) {
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1472547360578-0'); });
          }
          </script>
        </div>
      </div>
</div>
<!-- End Ezoic - StickySkyScraper - sidebar -->
    </div>
  </div>

<script>
  window.addEventListener("scroll", fix_stickyad);
  window.addEventListener("resize", fix_stickyad);
</script>

</div>
</div>
<div id="footer" class="footer w3-container w3-white">

<hr>
<div style="overflow:auto">
  <!-- Ezoic - BottomMediumRectangle - bottom_of_page -->
  <div id="ezoic-pub-ad-placeholder-106">
    <!-- BottomMediumRectangle -->
    <div class="bottomad" id='div-gpt-ad-1422003450156-0'>
      <script type='text/javascript'>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1422003450156-0'); });
      </script>
    </div>
  </div>
  <!-- End Ezoic - BottomMediumRectangle - bottom_of_page -->
  <!-- Ezoic - RightBottomMediumRectangle - bottom_of_page -->
  <div id="ezoic-pub-ad-placeholder-107">
    <!-- RightBottomMediumRectangle -->
    <div class="bottomad" id='div-gpt-ad-1422003450156-3'>
      <script type='text/javascript'>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1422003450156-3'); });
      </script>
    </div>
  </div>
  <!-- End Ezoic - RightBottomMediumRectangle - bottom_of_page -->
</div>
<hr>
<div class="w3-row w3-center w3-small">
<div class="w3-col l3 m3 s12">
<a href="javascript:void(0);" onclick="displayError();return false" style="white-space:nowrap;">REPORT ERROR</a>
</div>
<div class="w3-col l3 m3 s12">
<a href="javascript:void(0);" target="_blank" onclick="printPage();return false;">PRINT PAGE</a>
</div>
<div class="w3-col l3 m3 s12">
<a href="/forum/default.asp" target="_blank">FORUM</a>
</div>
<div class="w3-col l3 m3 s12">
<a href="/about/default.asp" target="_top">ABOUT</a>
</div>
</div>
<hr>
<div class="w3-light-grey w3-padding w3-center" id="err_form" style="display:none;">
<span onclick="this.parentElement.style.display='none'" class="w3-closebtn">&times;</span>     
<h2>Your Suggestion:</h2>
<form>
<div class="w3-group">      
<label for="err_email">Your E-mail:</label>
<input class="w3-input" type="text" style="width:100%" id="err_email" name="err_email">
</div>
<div class="w3-group">      
<label for="err_email">Page address:</label>
<input class="w3-input" type="text" style="width:100%" id="err_url" name="err_url" disabled="disabled">
</div>
<div class="w3-group">
<label for="err_email">Description:</label>
<textarea rows="10" class="w3-input" id="err_desc" name="err_desc" style="width:100%;"></textarea>
</div>
<div class="form-group">        
<button type="button" onclick="sendErr()">Submit</button>
</div>
<br>
</form>
</div>
<div class="w3-container w3-light-grey w3-padding" id="err_sent" style="display:none;">
<span onclick="this.parentElement.style.display='none'" class="w3-closebtn">&times;</span>     
<h2>Thank You For Helping Us!</h2>
<p>Your message has been sent to W3Schools.</p>
</div>

<div class="w3-row w3-center w3-small">
<div class="w3-col l3 m6 s12">
<div class="top10">
<h4>Top 10 Tutorials</h4>
<a href="/html/default.asp">HTML Tutorial</a><br>
<a href="/css/default.asp">CSS Tutorial</a><br>
<a href="/js/default.asp">JavaScript Tutorial</a><br>
<a href="/w3css/default.asp">W3.CSS Tutorial</a><br>
<a href="/bootstrap/default.asp">Bootstrap Tutorial</a><br>
<a href="/sql/default.asp">SQL Tutorial</a><br>
<a href="/php/default.asp">PHP Tutorial</a><br>
<a href="/jquery/default.asp">jQuery Tutorial</a><br>
<a href="/angular/default.asp">Angular Tutorial</a><br>
<a href="/xml/default.asp">XML Tutorial</a><br>
</div>
</div>
<div class="w3-col l3 m6 s12">
<div class="top10">
<h4>Top 10 References</h4>
<a href="/tags/default.asp">HTML Reference</a><br>
<a href="/cssref/default.asp">CSS Reference</a><br>
<a href="/jsref/default.asp">JavaScript Reference</a><br>
<a href="/w3css/w3css_references.asp">W3.CSS Reference</a><br>
<a href="/browsers/default.asp">Browser Statistics</a><br>
<a href="/php/php_ref_array.asp">PHP Reference</a><br>
<a href="/colors/colors_names.asp">HTML Colors</a><br>
<a href="/charsets/default.asp">HTML Character Sets</a><br>
<a href="/jquery/jquery_ref_selectors.asp">jQuery Reference</a><br>
<a href="/angular/angular_ref_directives.asp">AngularJS Reference</a><br>
</div>
</div>
<div class="w3-col l3 m6 s12">
<div class="top10">
<h4>Top 10 Examples</h4>
<a href="/html/html_examples.asp">HTML Examples</a><br>
<a href="/css/css_examples.asp">CSS Examples</a><br>
<a href="/js/js_examples.asp">JavaScript Examples</a><br>
<a href="/w3css/w3css_examples.asp">W3.CSS Examples</a><br>
<a href="/js/js_dom_examples.asp">HTML DOM Examples</a><br>
<a href="/php/php_examples.asp">PHP Examples</a><br>
<a href="/asp/asp_examples.asp">ASP Examples</a><br>
<a href="/jquery/jquery_examples.asp">jQuery Examples</a><br>
<a href="/angular/angular_examples.asp">Angular Examples</a><br>
<a href="/xml/xml_examples.asp">XML Examples</a><br>
</div>
</div>
<div class="w3-col l3 m6 s12">
<div class="top10">
<h4>Web Certificates</h4>
<a href="/cert/default.asp">HTML Certificate</a><br>
<a href="/cert/default.asp">CSS Certificate</a><br>
<a href="/cert/default.asp">JavaScript Certificate</a><br>
<a href="/cert/default.asp">jQuery Certificate</a><br>
<a href="/cert/default.asp">PHP Certificate</a><br>
<a href="/cert/default.asp">Bootstrap Certificate</a><br>
<a href="/cert/default.asp">XML Certificate</a><br>
</div>
</div>        
</div>        

<hr>
<div class="w3-center w3-small w3-opacity">
W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding.
Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.
While using this site, you agree to have read and accepted our <a href="/about/about_copyright.asp">terms of use</a>,
<a href="/about/about_privacy.asp">cookie and privacy policy</a>.
<a href="/about/about_copyright.asp">Copyright 1999-2017</a> by Refsnes Data. All Rights Reserved.<br>
 <a href="//www.w3schools.com/w3css/">Powered by W3.CSS</a>.<br><br>
<a href="//www.w3schools.com">
<img style="width:150px;height:28px;border:0" src="/images/w3schoolscom_gray.gif" alt="W3Schools.com"></a>
</div>
<br><br>
</div>

</div>

<script src="/lib/w3schools_footer.js"></script>
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>  
<![endif]-->
<script type='text/javascript' src='//www.w3schools.com/utilcave_com/inc/ezf-min.php?a=a&cb=3&shcb=8' style='display:none;'></script>
</body>
</html>