(()=>{"use strict";!function(){const e=document.querySelector("body"),t=document.createElement("header");t.classList.add("header");const n=document.createElement("div");n.classList.add("top");const d=document.createElement("p");d.textContent="Sakura Sushi & Ramen";const c=document.createElement("div");c.classList.add("bottom");const i=document.createElement("div");i.classList.add("left");const a=document.createElement("img");a.src="./pictures/rice.png";const o=document.createElement("div");o.classList.add("right");const s=document.createElement("button");s.textContent="Home",s.id="home";const l=document.createElement("button");l.textContent="Menu",l.id="menu";const r=document.createElement("button");r.textContent="Contact",r.id="contact",t.appendChild(n),n.appendChild(d),t.appendChild(c),c.appendChild(i),c.appendChild(o),i.appendChild(a),o.appendChild(s),o.appendChild(l),o.appendChild(r),e.appendChild(t)}();const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact"),d=document.createElement("main");function c(){d.innerHTML="",d.appendChild(function(){const e=document.createDocumentFragment(),t=document.createElement("section");t.classList.add("info");const n=document.createElement("p");n.classList.add("title"),n.textContent="About Us";const d=document.createElement("p");d.textContent="Sakura Sushi & Ramen is a well-established Japanese restaurant located in the heart of Paris. With a focus on authentic Japanese cuisine, it has become a favorite for sushi and ramen enthusiasts.";const c=document.createElement("ul"),i=document.createElement("li");i.textContent="Culinary Excellence";const a=document.createElement("li");a.textContent="Diverse Menu";const o=document.createElement("li");o.textContent="Warm Atmosphere";const s=document.createElement("li");return s.textContent="Friendly Staff",t.appendChild(n),t.appendChild(d),t.appendChild(c),c.appendChild(i),c.appendChild(a),c.appendChild(o),c.appendChild(s),e.appendChild(t),e}())}document.body.appendChild(d),e.addEventListener("click",c),t.addEventListener("click",(function(){d.innerHTML="",d.appendChild(function(){const e=document.createDocumentFragment(),t=document.createElement("section");t.classList.add("menu");const n=document.createElement("p");n.classList.add("title"),n.textContent="Menu";const d=document.createElement("div");d.classList.add("grid");const c=[{imgSrc:"./pictures/ramen.png",title:"Pork Ramen",description:"Pork Broth, Thinly Sliced Pork Belly, Wheat Flour Noodles, Soft Boiled Egg, Green Onions, Nori, Corn"},{imgSrc:"./pictures/noodles.png",title:"Stir Fried Noodles",description:"Thinly Sliced Beef, Homemade Sauce, Green Onions, Ginger, Garlic, Broccoli, Mushrooms"},{imgSrc:"./pictures/nigiri.png",title:"Salmon/Tuna Nigiri",description:"Salmon/Tuna, Rice, Wasabi, Pickled Ginger, Soy Sauce"},{imgSrc:"./pictures/sashimi.png",title:"Salmon/Tuna Sashimi",description:"Fresh Ahi Tuna/Salmon, Soy Sauce, Fresh Ginger, Wasabi"},{imgSrc:"./pictures/sushi.png",title:"Sakura Sushi Rolls",description:"White Rice, Seaweed, Cucumbers, Ahi Tuna, Avocado, Spicy Mayo, Sesame Seeds"},{imgSrc:"./pictures/onigiri.png",title:"Spicy Salmon Onigiri",description:"White Rice, Kewpie Mayo, Sriracha, Nori, Cooked Salmon"}];function i(e){const t=document.createElement("div");t.classList.add("item");const n=document.createElement("img");n.src=e.imgSrc;const c=document.createElement("div");c.classList.add("image-text");const i=document.createElement("h1");i.textContent=e.title;const a=document.createElement("p");a.textContent=e.description,c.appendChild(i),c.appendChild(a),t.appendChild(n),t.appendChild(c),d.appendChild(t)}for(const e of c)i(e);return t.appendChild(n),t.appendChild(d),e.appendChild(t),e}())})),n.addEventListener("click",(function(){d.innerHTML="",d.appendChild(function(){const e=document.createDocumentFragment(),t=document.createElement("section");t.classList.add("contact");const n=document.createElement("div");n.classList.add("time");const d=document.createElement("p");d.classList.add("infoTitle"),d.textContent="Hours: ";const c=document.createElement("ul"),i=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];for(let e=0;e<i.length;e++){const t=document.createElement("li"),n=document.createElement("p");n.classList.add("timeInfo"),n.textContent=i[e]+": ",n.textContent+="Sunday"===i[e]?"CLOSED":"10:00 - 22:00",t.appendChild(n),c.appendChild(t)}const a=document.createElement("div");a.classList.add("imageHolder");const o=document.createElement("p");o.classList.add("infoTitle"),o.textContent="Address: ";const s=document.createElement("br"),l=document.createElement("p");l.textContent="Champ de Mars, 5 Av. Anatole France, 75007 Paris, France";const r=document.createElement("img");return r.src="./pictures/map.png",n.appendChild(d),n.appendChild(c),n.appendChild(a),n.appendChild(o),n.appendChild(s),n.appendChild(l),n.appendChild(r),t.appendChild(n),e.appendChild(t),e}())})),c(),function(){const e=document.querySelector("body"),t=document.createElement("footer");t.classList.add("footer");const n=document.createElement("p");n.textContent="Copyright © The Odin Project 2023 | Nicholas Tsoukatos",t.appendChild(n),e.appendChild(t)}()})();