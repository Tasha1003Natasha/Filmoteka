window.addEventListener("load",(function(){const e=document.documentElement,t=localStorage.getItem("user-theme");let a;window.matchMedia&&(a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{!t&&d()}));const s=document.querySelector(".page-theme"),c=document.querySelector(".page-reset");s&&s.addEventListener("click",(function(e){c.classList.remove("active"),d(!0)}));c&&c.addEventListener("click",(function(e){c.classList.remove("active"),localStorage.setItem("user-theme","")}));function d(t=!1){let a,s=e.classList.contains("light")?"light":"dark";"light"===s?a="dark":"dark"===s&&(a="light"),e.classList.remove(s),e.classList.add(a),t&&localStorage.setItem("user-theme",a)}t?(e.classList.add(t),c.classList.add("active")):e.classList.add(a)}));
//# sourceMappingURL=library.b7f6c125.js.map
