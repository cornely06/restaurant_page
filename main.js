(()=>{"use strict";function e(e){const n=document.createElement("p");return n.textContent=e,n}const n=function(){const n=document.querySelector("#content");n.appendChild(e("Serving the area since 1988!")),n.appendChild(function(e){const n=document.createElement("div"),t=document.createElement("img");return t.src="./images/chef.png",n.appendChild(t),n}()),n.appendChild(e("Online ordering and indoor seating available!")),document.querySelector("#home").classList.add("current-nav")},t=function(){document.querySelector("#menu").classList.add("current-nav")},c=function(){document.querySelector("#contact").classList.add("current-nav")};function o(e,n,t){const c=document.createElement("button");return c.textContent=e,c.id=n,c.addEventListener("click",d),c.addEventListener("click",r),c.addEventListener("click",t),c}function d(){const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild)}function r(){const e=document.getElementsByClassName("current-nav");for(;e.length>0;)e[0].classList.remove("current-nav")}(function(){const e=document.querySelector("body");e.appendChild(function(){const e=document.createElement("div");return e.classList.add("header"),e.appendChild(function(e){const n=document.createElement("h1");return n.textContent="Cornely's Bakery",n}()),e.appendChild(function(){const e=document.createElement("nav");return e.appendChild(o("Home","home",n)),e.appendChild(o("Menu","menu",t)),e.appendChild(o("Contact","contact",c)),e}()),e}()),e.appendChild(function(){const e=document.createElement("div");return e.id="content",e}())})(),n()})();
//# sourceMappingURL=main.js.map