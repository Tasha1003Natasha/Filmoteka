function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"Ujaud":"index.c58b9fda.js","9v6fF":"symbol-defs.ce986458.svg","jVFD5":"library.9bbbddce.js"}')),a("asUcn"),a("9o3Er");var l,s=a("eWCmQ");l=new URL(a("kyEFX").resolve("9v6fF"),import.meta.url).toString(),t(s).Notify.init({width:"300px",position:"top-left",closeButton:!1,cssAnimationStyle:"from-right",timeout:1200,success:{background:"#50c184"},info:{background:"#FF6B08"}});const i=document.querySelector(".gallery"),d=document.querySelector(".backdrop");let c,u,g=[],f=[];function m(e){27===e.keyCode&&d.classList.add("is-hidden")}function p(e){e.target===d&&d.classList.add("is-hidden")}localStorage.getItem("watched")&&(f=JSON.parse(localStorage.getItem("watched"))),localStorage.getItem("queue")&&(g=JSON.parse(localStorage.getItem("queue"))),i.addEventListener("click",(function(e){let n;if(!e.target.closest("li"))return;{let o=JSON.parse(localStorage.getItem("response"));d.classList.remove("is-hidden");const r=e.target.closest("li").id;n=o.find((e=>String(e.id)===r)),c=n,function(e){u=e,document.addEventListener("click",p),document.addEventListener("keydown",m);const n=JSON.parse(localStorage.getItem("genres")),o="https://image.tmdb.org/t/p/w500",r=`\n    <div class="modal-group">\n      <button data-modal-close class="modal-group__close-btn">\n      <object class="modal-group__close-object">\n          <svg class="modal-group__close-icon" width="28" height="28">\n            <use href="${t(l)}#icon-close-modal"></use>\n          </svg>\n        </object>\n      </button>\n      <div class="modal-group__img-wrapper">\n        <img\n          class="modal-group__img"\n          src="${e.poster_path?o+e.poster_path:"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg"}"\n          alt="${e.original_title}"\n          \n        />\n      </div>\n      <div class="modal-group__wrapper">\n        <h2 class="modal-group__title">${e.original_title}</h2>\n        <table class="table">\n          <tbody>\n            <tr>\n              <td class="table__title">Vote / Votes</td>\n              <td class="table__text">\n                <span class="gallery-text__rating table-text-orange">${e.vote_average}</span>\n                /\n                <span class="table-text-grey">${e.vote_count}</span>\n              </td>\n            </tr>\n\n            <tr>\n              <td class="table__title">Popularity</td>\n              <td class="table__text">${e.popularity}</td>\n            </tr>\n            <tr>\n              <td class="table__title">Original Title</td>\n              <td class="table__text">${e.original_title}</td>\n            </tr>\n            <tr>\n              <td class="table__title">Genre</td>\n              <td class="table__text">${e.genre_ids.length>0?e.genre_ids.map((e=>" "+n[e])):"No genres found"}</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3 class="modal-group__about-title">About</h3>\n        <p class="modal-group__about-text">\n        ${e.overview?e.overview:"No info"}\n        </p>\n        <div class="modal-group__btns">\n          <button class="watched-btn" type="submit">ADD TO WATCHED</button>\n          <button class="queue-btn" type="submit">ADD TO QUEUE</button>\n        </div>\n      </div>\n    </div>`;d.innerHTML=r;document.querySelector(".modal-group__close-btn").addEventListener("click",(()=>{d.classList.add("is-hidden"),document.removeEventListener("click",p),document.removeEventListener("keydown",m)}));const a=document.querySelector(".watched-btn"),i=document.querySelector(".queue-btn");a.addEventListener("click",y),i.addEventListener("click",O);let b=JSON.parse(localStorage.getItem("watched"));if(b){const e=b.some((e=>e.id===u.id));a.textContent=e?"REMOVE FROM WATCHED":"ADD TO WATCHED"}let _=JSON.parse(localStorage.getItem("queue"));if(_){const e=_.some((e=>e.id===u.id));i.textContent=e?"REMOVE FROM QUEUE":"ADD TO QUEUE"}function E(){return"ADD TO WATCHED"===a.textContent?(t(s).Notify.success("Film was added to your library"),a.textContent="REMOVE FROM WATCHED","ADD"):(a.textContent="ADD TO WATCHED",t(s).Notify.info("Film was removed from your library"),"REMOVE")}function v(){return"ADD TO QUEUE"===i.textContent?(t(s).Notify.success("Film was added to your queue"),i.textContent="REMOVE FROM QUEUE","ADD"):(i.textContent="ADD TO QUEUE",t(s).Notify.info("Film was removed from your queue"),"REMOVE")}function y(){if("REMOVE"===E()){let e=JSON.parse(localStorage.getItem("watched")).filter((e=>e.id!==u.id));localStorage.setItem("watched",JSON.stringify(e))}else{let e=f.filter((e=>e.id!==c.id));f=e,f.push(c),localStorage.setItem("watched",JSON.stringify(f))}}function O(){if("REMOVE"===v()){let e=JSON.parse(localStorage.getItem("queue")).filter((e=>e.id!==u.id));localStorage.setItem("queue",JSON.stringify(e))}else{let e=g.filter((e=>e.id!==c.id));g=e,g.push(c),localStorage.setItem("queue",JSON.stringify(g))}}}(n)}}));
//# sourceMappingURL=index.c58b9fda.js.map
