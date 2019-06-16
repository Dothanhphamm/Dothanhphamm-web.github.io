function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}



// PROJECT //
///open and close tab menu
//open and close tab menu
$(".nav-tabs-dropdown")
  .on("click", "li:not('.active') a", function(event) {
    $(this)
      .closest("ul")
      .removeClass("open");
  })
  .on("click", "li.active a", function(event) {
    $(this)
      .closest("ul")
      .toggleClass("open");
  });

// END OF PROJECT //