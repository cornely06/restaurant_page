(()=>{"use strict";function e(e){const n=document.createElement("p");return n.textContent=e,n}const n=function(){const n=document.querySelector("#content");n.appendChild(e("Serving the area since 1988!")),n.appendChild(function(e){const n=document.createElement("img");return n.classList.add("home-image"),n.src="./images/chef.png",n}()),n.appendChild(e("Online ordering and indoor seating available!")),document.querySelector("#home").classList.add("current-nav")};function t(e,n){const t=document.createElement("div");return t.appendChild(function(e){const n=document.createElement("p");return n.textContent=e,n}(e)),t.appendChild(function(e){const n=document.createElement("img");return n.classList.add("menu-image"),n.src=e,n}(n)),t.classList.add("menu-item"),t}const c=function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("menu"),n.appendChild(t("Cookies","./images/cookies.jpg")),n.appendChild(t("Donuts","./images/donuts.jpg")),e.appendChild(n),document.querySelector("#menu").classList.add("current-nav")};function o(e){const n=document.createElement("p");return n.textContent=e,n.classList.add("contact"),n}const d=function(){const e=document.querySelector("#content");e.appendChild(o("Hours: 7AM-7PM (closed Sundays)")),e.appendChild(o("Phone: (555) 555-5555")),e.appendChild(o("Address: 20 W 34th St, New York, NY 10001")),e.appendChild(function(e){const n=document.createElement("img");return n.classList.add("contact-image"),n.src="./images/rsz_citymap.png",n}()),document.querySelector("#contact").classList.add("current-nav")};function r(e,n,t){const c=document.createElement("button");return c.textContent=e,c.id=n,c.addEventListener("click",a),c.addEventListener("click",i),c.addEventListener("click",t),c}function a(){const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild)}function i(){const e=document.getElementsByClassName("current-nav");for(;e.length>0;)e[0].classList.remove("current-nav")}(function(){const e=document.querySelector("body");e.appendChild(function(){const e=document.createElement("div");return e.classList.add("header"),e.appendChild(function(e){const n=document.createElement("h1");return n.textContent="Cornely's Bakery",n}()),e.appendChild(function(){const e=document.createElement("nav");return e.appendChild(r("Home","home",n)),e.appendChild(r("Menu","menu",c)),e.appendChild(r("Contact","contact",d)),e}()),e}()),e.appendChild(function(){const e=document.createElement("div");return e.id="content",e}())})(),n()})();
//# sourceMappingURL=main.js.map