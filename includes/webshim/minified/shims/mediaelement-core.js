!function(a){"use strict";var b=a.support,c=b.mediaelement,d=!1,e=a.bugs,f="mediaelement-jaris",g=function(){a.ready(f,function(){a.mediaelement.createSWF||(a.mediaelement.loadSwf=!0,a.reTest([f],c))})},h=a.cfg,i=h.mediaelement,j=-1!=navigator.userAgent.indexOf("MSIE");if(!i)return void a.error("mediaelement wasn't implemented but loaded");if(c){var k=document.createElement("video");b.videoBuffered="buffered"in k,b.mediaDefaultMuted="defaultMuted"in k,d="loop"in k,b.mediaLoop=d,a.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),(!b.videoBuffered||!d||!b.mediaDefaultMuted&&j&&"ActiveXObject"in window)&&(a.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),a.loader.loadList(["mediaelement-native-fix"]))}b.track&&!e.track&&!function(){if(!e.track){window.VTTCue&&!window.TextTrackCue?window.TextTrackCue=window.VTTCue:window.VTTCue||(window.VTTCue=window.TextTrackCue);try{new VTTCue(2,3,"")}catch(a){e.track=!0}}}(),a.register("mediaelement-core",function(a,e,h,i,j,k){var l=swfmini.hasFlashPlayerVersion("11.3"),m=e.mediaelement;m.parseRtmp=function(a){var b,c,d,f=a.src.split("://"),g=f[1].split("/");for(a.server=f[0]+"://"+g[0]+"/",a.streamId=[],b=1,c=g.length;c>b;b++)d||-1===g[b].indexOf(":")||(g[b]=g[b].split(":")[1],d=!0),d?a.streamId.push(g[b]):a.server+=g[b]+"/";a.streamId.length||e.error("Could not parse rtmp url"),a.streamId=a.streamId.join("/")};var n=function(b,c){b=a(b);var d,e={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};return e.src?(d=b.attr("data-server"),null!=d&&(e.server=d),d=b.attr("type")||b.attr("data-type"),d?(e.type=d,e.container=a.trim(d.split(";")[0])):(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e.server?(e.type=c+"/rtmp",e.container=c+"/rtmp"):(d=m.getTypeForSrc(e.src,c,e),d&&(e.type=d,e.container=d))),d=b.attr("media"),d&&(e.media=d),("audio/rtmp"==e.type||"video/rtmp"==e.type)&&(e.server?e.streamId=e.src:m.parseRtmp(e)),e):e},o=!l&&"postMessage"in h&&c,p=function(){p.loaded||(p.loaded=!0,k.noAutoTrack||e.ready("WINDOWLOAD",function(){r(),e.loader.loadList(["track-ui"])}))},q=function(){var b;return function(){!b&&o&&(b=!0,e.loader.loadScript("https://www.youtube.com/player_api"),a(function(){e._polyfill(["mediaelement-yt"])}))}}(),r=function(){l?g():q()};e.addPolyfill("mediaelement-yt",{test:!o,d:["dom-support"]}),m.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},m.mimeTypes.source=a.extend({},m.mimeTypes.audio,m.mimeTypes.video),m.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||-1!=b.indexOf("youtube.com/v/"))return"video/youtube";if(!b.indexOf("mediastream:")||!b.indexOf("blob:http"))return"usermedia";if(!b.indexOf("webshimstream"))return"jarisplayer/stream";if(!b.indexOf("rtmp"))return c+"/rtmp";b=b.split("?")[0].split("#")[0].split("."),b=b[b.length-1];var d;return a.each(m.mimeTypes[c],function(a,c){return-1!==c.indexOf(b)?(d=a,!1):void 0}),d},m.srces=function(b,c){if(b=a(b),!c){c=[];var d=b[0].nodeName.toLowerCase(),f=n(b,d);return f.src?c.push(f):a("source",b).each(function(){f=n(this,d),f.src&&c.push(f)}),c}e.error("setting sources was removed.")},m.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","jarisplayer/stream","video/youtube","video/rtmp","audio/rtmp"],m.canThirdPlaySrces=function(b,c){var d="";return(l||o)&&(b=a(b),c=c||m.srces(b),a.each(c,function(a,b){return b.container&&b.src&&(l&&-1!=m.swfMimeTypes.indexOf(b.container)||o&&"video/youtube"==b.container)?(d=b,!1):void 0})),d};var s={};m.canNativePlaySrces=function(b,d){var e="";if(c){b=a(b);var f=(b[0].nodeName||"").toLowerCase(),g=(s[f]||{prop:{_supvalue:!1}}).prop._supvalue||b[0].canPlayType;if(!g)return e;d=d||m.srces(b),a.each(d,function(a,c){return"usermedia"==c.type||c.type&&g.call(b[0],c.type)?(e=c,!1):void 0})}return e};var t=/^\s*application\/octet\-stream\s*$/i,u=function(){var b=t.test(a.attr(this,"type")||"");return b&&a(this).removeAttr("type"),b};m.setError=function(b,c){if(a("source",b).filter(u).length){e.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{a(b).mediaLoad()}catch(d){}}else c||(c="can't play sources"),a(b).pause().data("mediaerror",c),e.error("mediaelementError: "+c+". Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"),setTimeout(function(){a(b).data("mediaerror")&&a(b).addClass("media-error").trigger("mediaerror")},1)};var v=function(){var b,c=l?f:"mediaelement-yt";return function(d,f,g){e.ready(c,function(){m.createSWF&&a(d).parent()[0]?m.createSWF(d,f,g):b||(b=!0,r(),v(d,f,g))}),b||!o||m.createSWF||q()}}(),w={"native":function(a,b,c){c&&"third"==c.isActive&&m.setActive(a,"html5",c)},third:v},x=function(a,b,c){var d,e,f=[{test:"canNativePlaySrces",activate:"native"},{test:"canThirdPlaySrces",activate:"third"}];for((k.preferFlash||b&&"third"==b.isActive)&&f.reverse(),d=0;2>d;d++)if(e=m[f[d].test](a,c)){w[f[d].activate](a,e,b);break}e||(m.setError(a,!1),b&&"third"==b.isActive&&m.setActive(a,"html5",b))},y=/^(?:embed|object|datalist|picture)$/i,z=function(b,c){var d=e.data(b,"mediaelementBase")||e.data(b,"mediaelementBase",{}),f=m.srces(b),g=b.parentNode;clearTimeout(d.loadTimer),a(b).removeClass("media-error"),a.data(b,"mediaerror",!1),f.length&&g&&1==g.nodeType&&!y.test(g.nodeName||"")&&(c=c||e.data(b,"mediaelement"),m.sortMedia&&f.sort(m.sortMedia),x(b,c,f))};m.selectSource=z,a(i).on("ended",function(b){var c=e.data(b.target,"mediaelement");(!d||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()})});var A=!1,B=function(){var f=function(){e.implement(this,"mediaelement")&&(z(this),b.mediaDefaultMuted||null==a.attr(this,"muted")||a.prop(this,"muted",!0))};e.ready("dom-support",function(){A=!0,d||e.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(b){var d;d=e.defineNodeNameProperty(b,"load",{prop:{value:function(){var b=e.data(this,"mediaelement");z(this,b),!c||b&&"html5"!=b.isActive||!d.prop._supvalue||d.prop._supvalue.apply(this,arguments),!p.loaded&&this.querySelector("track")&&p(),a(this).triggerHandler("wsmediareload")}}}),s[b]=e.defineNodeNameProperty(b,"canPlayType",{prop:{value:function(d){var e="";return c&&s[b].prop._supvalue&&(e=s[b].prop._supvalue.call(this,d),"no"==e&&(e="")),!e&&l&&(d=a.trim((d||"").split(";")[0]),-1!=m.swfMimeTypes.indexOf(d)&&(e="maybe")),!e&&o&&"video/youtube"==d&&(e="maybe"),e}}})}),e.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer),b.loadTimer=setTimeout(function(){z(a),a=null},9)}}),e.addReady(function(b,c){var d=a("video, audio",b).add(c.filter("video, audio")).each(f);!p.loaded&&a("track",d).length&&p(),d=null})}),c&&!A&&e.addReady(function(b,c){A||a("video, audio",b).add(c.filter("video, audio")).each(function(){return m.canNativePlaySrces(this)?void 0:(r(),A=!0,!1)})})};m.loadDebugger=function(){e.ready("dom-support",function(){e.loader.loadScript("mediaelement-debug")})},{noCombo:1,media:1}[e.cfg.debug]&&a(i).on("mediaerror",function(){m.loadDebugger()}),c?(e.isReady("mediaelement-core",!0),B(),e.ready("WINDOWLOAD mediaelement",r)):e.ready(f,B),e.ready("track",p),"complete"==i.readyState&&e.isReady("WINDOWLOAD",!0)})}(webshims);