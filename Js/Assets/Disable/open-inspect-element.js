// take body to change the content
const body = document.getElementsByTagName('body');

// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
  if(event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "I")) {
      alert("Sorry you can`t do that.");

  } else if(event.ctrlKey && (event.key === "u" || event.key === "u")) {
      alert("You Can not Do This!");

  } else if(event.ctrlKey && event.shiftKey  && (event.key === "J" || event.key === "J")) {
      alert("You Can not Do This!");

  }

  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("You Can not Do This!");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("You Can not Do This!");
      window.event.returnValue = false;
    });

}
});


// stop right click
document.addEventListener('contextmenu', function(e) {
      alert("You Can not Do This!");
      window.event.returnValue = false;
});