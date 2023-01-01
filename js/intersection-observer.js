!function(){"use strict";var f,n,d,g;function r(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function u(t){this.time=t.time,this.target=t.target,this.rootBounds=o(t.rootBounds),this.boundingClientRect=o(t.boundingClientRect),this.intersectionRect=o(t.intersectionRect||a()),this.isIntersecting=!!t.intersectionRect;var t=this.boundingClientRect,t=t.width*t.height,e=this.intersectionRect,e=e.width*e.height;this.intersectionRatio=t?Number((e/t).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var n,o,i,e=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(e.root&&1!=e.root.nodeType&&9!=e.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i=i||setTimeout(function(){n(),i=null},o)}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(e.rootMargin),this.thresholds=this._initThresholds(e.threshold),this.root=e.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function h(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function m(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?e.width&&e.height?e:{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}:a()}function a(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function o(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function _(t,e){var n=e.top-t.top,t=e.left-t.left;return{top:n,left:t,height:e.height,width:e.width,bottom:n+e.height,right:t+e.width}}function i(t,e){for(var n=e;n;){if(n==t)return!0;n=b(n)}return!1}function b(t){var e=t.parentNode;return 9==t.nodeType&&t!=f?r(t):(e=e&&e.assignedSlot?e.assignedSlot.parentNode:e)&&11==e.nodeType&&e.host?e.host:e}function c(t){return t&&9===t.nodeType}"object"==typeof window&&("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}):(f=function(){for(var t=window.document,e=r(t);e;)e=r(t=e.ownerDocument);return t}(),n=[],g=d=null,t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t._setupCrossOriginUpdater=function(){return d=d||function(t,e){g=t&&e?_(t,e):a(),n.forEach(function(t){t._checkForIntersections()})}},t._resetCrossOriginUpdater=function(){g=d=null},t.prototype.observe=function(e){var t=this._observationTargets.some(function(t){return t.element==e});if(!t){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){t=t||[0];return(t=Array.isArray(t)?t:[t]).sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){t=(t||"0px").split(/\s+/).map(function(t){t=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(t)return{value:parseFloat(t[1]),unit:t[2]};throw new Error("rootMargin must be specified in pixels or percent")});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},t.prototype._monitorIntersections=function(e){var n,o,i,t=e.defaultView;t&&-1==this._monitoringDocuments.indexOf(e)&&(n=this._checkForIntersections,i=o=null,this.POLL_INTERVAL?o=t.setInterval(n,this.POLL_INTERVAL):(s(t,"resize",n,!0),s(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(i=new t.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push(function(){var t=e.defaultView;t&&(o&&t.clearInterval(o),h(t,"resize",n,!0)),h(e,"scroll",n,!0),i&&i.disconnect()}),t=this.root&&(this.root.ownerDocument||this.root)||f,e!=t)&&(t=r(e))&&this._monitorIntersections(t.ownerDocument)},t.prototype._unmonitorIntersections=function(o){var i,t,e=this._monitoringDocuments.indexOf(o);-1==e||(i=this.root&&(this.root.ownerDocument||this.root)||f,this._observationTargets.some(function(t){if((e=t.element.ownerDocument)==o)return!0;for(;e&&e!=i;){var e,n=r(e);if((e=n&&n.ownerDocument)==o)return!0}return!1}))||(t=this._monitoringUnsubscribes[e],this._monitoringDocuments.splice(e,1),this._monitoringUnsubscribes.splice(e,1),t(),o!=i&&(e=r(o))&&this._unmonitorIntersections(e.ownerDocument))},t.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0;for(var e=this._monitoringUnsubscribes.length=0;e<t.length;e++)t[e]()},t.prototype._checkForIntersections=function(){var h,c;(this.root||!d||g)&&(h=this._rootIsInDom(),c=h?this._getRootRect():a(),this._observationTargets.forEach(function(t){var e=t.element,n=m(e),o=this._rootContainsTarget(e),i=t.entry,r=h&&o&&this._computeTargetAndRootIntersection(e,n,c),s=null,t=(this._rootContainsTarget(e)?d&&!this.root||(s=c):s=a(),t.entry=new u({time:window.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:s,intersectionRect:r}));i?h&&o?this._hasCrossedThreshold(i,t)&&this._queuedEntries.push(t):i&&i.isIntersecting&&this._queuedEntries.push(t):this._queuedEntries.push(t)},this),this._queuedEntries.length)&&this._callback(this.takeRecords(),this)},t.prototype._computeTargetAndRootIntersection=function(t,e,n){if("none"!=window.getComputedStyle(t).display){for(var o,i,r=e,s=b(t),h=!1;!h&&s;){var c,u,a,l=null,p=1==s.nodeType?window.getComputedStyle(s):{};if("none"==p.display)return null;if(s==this.root||9==s.nodeType?(h=!0,s==this.root||s==f?d&&!this.root?!g||0==g.width&&0==g.height?r=l=s=null:l=g:l=n:(c=(a=b(s))&&m(a),u=a&&this._computeTargetAndRootIntersection(a,c,n),c&&u?(s=a,l=_(c,u)):r=s=null)):s!=(a=s.ownerDocument).body&&s!=a.documentElement&&"visible"!=p.overflow&&(l=m(s)),l&&(c=l,u=r,i=o=l=p=void 0,p=Math.max(c.top,u.top),l=Math.min(c.bottom,u.bottom),o=Math.max(c.left,u.left),c=Math.min(c.right,u.right),i=l-p,r=0<=(u=c-o)&&0<=i?{top:p,bottom:l,left:o,right:c,width:u,height:i}:null),!r)break;s=s&&b(s)}return r}},t.prototype._getRootRect=function(){var t,e;return e=this.root&&!c(this.root)?m(this.root):(e=(t=c(this.root)?this.root:f).documentElement,t=t.body,{top:0,left:0,right:e.clientWidth||t.clientWidth,width:e.clientWidth||t.clientWidth,bottom:e.clientHeight||t.clientHeight,height:e.clientHeight||t.clientHeight}),this._expandRectByRootMargin(e)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),t={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return t.width=t.right-t.left,t.height=t.bottom-t.top,t},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||i(f,this.root)},t.prototype._rootContainsTarget=function(t){var e=this.root&&(this.root.ownerDocument||this.root)||f;return i(e,t)&&(!this.root||e==t.ownerDocument)},t.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},t.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},window.IntersectionObserver=t,window.IntersectionObserverEntry=u))}();