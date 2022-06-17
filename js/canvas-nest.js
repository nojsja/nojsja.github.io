!function(){"use strict";function e(e){e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")&&e.default}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var i=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=1;t.default=function(){return""+n++},e.exports=t.default}),n=(e(i),t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(i){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:30,a=null;return function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];clearTimeout(a),a=setTimeout(function(){i.apply(e,n)},r)}},e.exports=t.default})),s=(e(n),t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SizeSensorId="size-sensor-id",t.SensorStyle="display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0",t.SensorClassName="size-sensor-object"})),o=(e(s),s.SizeSensorId,s.SensorStyle,s.SensorClassName,t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a=n&&n.__esModule?n:{default:n};t.createSensor=function(n){function t(){o&&o.parentNode&&(o.contentDocument.defaultView.removeEventListener("resize",r),o.parentNode.removeChild(o),o=void 0,i=[])}var o=void 0,i=[],r=(0,a.default)(function(){i.forEach(function(e){e(n)})});return{element:n,bind:function(e){var t;o||("static"===getComputedStyle(n).position&&(n.style.position="relative"),(t=document.createElement("object")).onload=function(){t.contentDocument.defaultView.addEventListener("resize",r),r()},t.setAttribute("style",s.SensorStyle),t.setAttribute("class",s.SensorClassName),t.type="text/html",n.appendChild(t),t.data="about:blank",o=t),-1===i.indexOf(e)&&i.push(e)},destroy:t,unbind:function(e){e=i.indexOf(e);-1!==e&&i.splice(e,1),0===i.length&&o&&t()}}}})),r=(e(o),o.createSensor,t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a=n&&n.__esModule?n:{default:n};t.createSensor=function(n){function t(){o.disconnect(),i=[],o=void 0}var o=void 0,i=[],r=(0,a.default)(function(){i.forEach(function(e){e(n)})});return{element:n,bind:function(e){var t;o||((t=new ResizeObserver(r)).observe(n),r(),o=t),-1===i.indexOf(e)&&i.push(e)},destroy:t,unbind:function(e){e=i.indexOf(e);-1!==e&&i.splice(e,1),0===i.length&&o&&t()}}}})),a=(e(r),r.createSensor,t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0,t.createSensor=("undefined"!=typeof ResizeObserver?r:o).createSensor})),u=(e(a),a.createSensor,t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var n=i&&i.__esModule?i:{default:i},o={};t.getSensor=function(e){var t=e.getAttribute(s.SizeSensorId);if(t&&o[t])return o[t];t=(0,n.default)(),e.setAttribute(s.SizeSensorId,t),e=(0,a.createSensor)(e);return o[t]=e},t.removeSensor=function(e){var t=e.element.getAttribute(s.SizeSensorId);e.element.removeAttribute(s.SizeSensorId),e.destroy(),t&&o[t]&&delete o[t]}})),l=(e(u),u.removeSensor,u.getSensor,t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.clear=t.bind=void 0,t.bind=function(e,t){var n=(0,u.getSensor)(e);return n.bind(t),function(){n.unbind(t)}},t.clear=function(e){e=(0,u.getSensor)(e);(0,u.removeSensor)(e)}})),c=(e(l),l.clear),d=l.bind,f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},m=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame||window.clearTimeout,v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(function(e,t,n){t&&h(e.prototype,t),n&&h(e,n)})(p,[{key:"bindEvent",value:function(){var t=this;d(this.el,function(){t.canvas.width=t.el.clientWidth,t.canvas.height=t.el.clientHeight}),this.onmousemove=window.onmousemove,window.onmousemove=function(e){t.current.x=e.clientX-t.el.offsetLeft+document.scrollingElement.scrollLeft,t.current.y=e.clientY-t.el.offsetTop+document.scrollingElement.scrollTop,t.onmousemove&&t.onmousemove(e)},this.onmouseout=window.onmouseout,window.onmouseout=function(){t.current.x=null,t.current.y=null,t.onmouseout&&t.onmouseout()}}},{key:"newCanvas",value:function(){"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative");var e,t=document.createElement("canvas");return t.style.cssText="display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:"+(e=this.c).zIndex+";opacity:"+e.opacity,t.width=this.el.clientWidth,t.height=this.el.clientHeight,this.el.appendChild(t),t}},{key:"requestFrame",value:function(e){var t=this;this.tid=f(function(){return e.call(t)})}},{key:"drawCanvas",value:function(){var n=this,o=this.context,i=this.canvas.width,r=this.canvas.height,a=this.current,e=this.points,s=this.all,u=(o.clearRect(0,0,i,r),void 0),l=void 0,c=void 0,d=void 0,f=void 0,m=void 0;e.forEach(function(e,t){for(e.x+=e.xa,e.y+=e.ya,e.xa*=e.x>i||e.x<0?-1:1,e.ya*=e.y>r||e.y<0?-1:1,o.fillStyle="rgba("+n.c.pointColor+")",o.fillRect(e.x-.5,e.y-.5,1,1),l=t+1;l<s.length;l++)null!==(u=s[l]).x&&null!==u.y&&(d=e.x-u.x,f=e.y-u.y,(m=d*d+f*f)<u.max&&(u===a&&m>=u.max/2&&(e.x-=.03*d,e.y-=.03*f),c=(u.max-m)/u.max,o.beginPath(),o.lineWidth=c/2,o.strokeStyle="rgba("+n.c.color+","+(c+.2)+")",o.moveTo(e.x,e.y),o.lineTo(u.x,u.y),o.stroke()))}),this.requestFrame(this.drawCanvas)}},{key:"destroy",value:function(){c(this.el),window.onmousemove=this.onmousemove,window.onmouseout=this.onmouseout,m(this.tid),this.canvas.parentNode.removeChild(this.canvas)}}]);var l=p;function p(e,t){var n=this;if(!(this instanceof p))throw new TypeError("Cannot call a class as a function");this.randomPoints=function(){return e=n.c.count,new Array(e).fill(0).map(function(e,t){return t}).map(function(){return{x:Math.random()*n.canvas.width,y:Math.random()*n.canvas.height,xa:2*Math.random()-1,ya:2*Math.random()-1,max:6e3}});var e},this.el=e,this.c=v({zIndex:-1,opacity:.5,color:"0,0,0",pointColor:"0,0,0",count:99},t),this.canvas=this.newCanvas(),this.context=this.canvas.getContext("2d"),this.points=this.randomPoints(),this.current={x:null,y:null,max:2e4},this.all=this.points.concat([this.current]),this.bindEvent(),this.requestFrame(this.drawCanvas)}l.version="2.0.4",new l(document.body,{zIndex:(l=(l=document.getElementsByTagName("script"))[l.length-1]).getAttribute("zIndex"),opacity:l.getAttribute("opacity"),color:l.getAttribute("color"),pointColor:l.getAttribute("pointColor"),count:Number(l.getAttribute("count"))||99})}();