!function(){var e={isDragging:!1};function t(e){Array.from(document.querySelectorAll(".wp-block-nelio-compare-images__comparison-wrapper--".concat(e,"ly"))).forEach((function(t){var o=t.querySelector(".wp-block-nelio-compare-images__handler");o&&(o.addEventListener("mousedown",(function(){return n(e,t)})),o.addEventListener("touchstart",(function(){return n(e,t)})),t.addEventListener("mousemove",(function(e){return r(e,t)})),t.addEventListener("touchmove",(function(e){return r(e,t)})))}))}function n(t,n){var o=n.querySelector(".wp-block-nelio-compare-images__handler"),r=n.querySelector(".wp-block-nelio-compare-images__divider"),i=n.querySelector(".wp-block-nelio-compare-images__after-image");o&&r&&i&&(e={afterImage:i,block:n,direction:t,divider:r,handler:o,isDragging:!0})}function o(){e={isDragging:!1}}function r(t,n){if(e.isDragging&&n===e.block){var o=n.getBoundingClientRect(),r=c(t)?t.clientX:t.targetTouches[0].clientX,u=c(t)?t.clientY:t.targetTouches[0].clientY,l=(r-o.left)/o.width,d=(u-o.top)/o.height;"horizontal"===e.direction?i(100*Math.max(0,Math.min(1,l))):a(100*Math.max(0,Math.min(1,d)))}}function i(t){e.isDragging&&(e.afterImage.style.width="".concat(u(100-t),"%"),e.divider.style.left="".concat(u(t),"%"),e.handler.style.left="".concat(u(t),"%"))}function a(t){e.isDragging&&(e.afterImage.style.height="".concat(u(100-t),"%"),e.divider.style.top="".concat(u(t),"%"),e.handler.style.top="".concat(u(t),"%"))}var c=function(e){return"clientX"in e},u=function(e){return e.toFixed(2)};!function(e){if("undefined"!=typeof document){if("complete"!==document.readyState&&"interactive"!==document.readyState)return document.addEventListener("DOMContentLoaded",e);e()}}((function(){Array.from(document.querySelectorAll(".wp-block-nelio-compare-images__comparison-wrapper")).forEach((function(e){var t,r=parseInt(null!==(t=e.getAttribute("data-position"))&&void 0!==t?t:"0")||0,c=function(e){return"horizontal"===e.getAttribute("data-direction")?"horizontal":"vertical"}(e);n(c,e),"horizontal"===c?i(r):a(r),o()})),document.addEventListener("mouseup",(function(){return o()})),document.addEventListener("touchend",(function(){return o()})),t("horizontal"),t("vertical")}))}();