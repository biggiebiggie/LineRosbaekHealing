   document.addEventListener("DOMContentLoaded", hentContent);

   async function hentContent() {
   	let footerData = await fetch("footer.html");
   	let footer = await footerData.text();
   	document.querySelector("#footer").innerHTML = footer;

	let menubarData = await fetch("menubar.html");
	let menubar = await menubarData.text();
	   document.querySelector("#header").innerHTML = menubar;
   }

   function toggleMenu() {
   	document.querySelector(".burger_icon").classList.toggle("change");
   	document.querySelector("#burger_menu").classList.toggle("show");
   }

   document.querySelector(".burger_icon").addEventListener("click", toggleMenu);
   document.querySelector("#burger_menu").addEventListener("click", toggleMenu);
