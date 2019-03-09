window.onload = function() {
  document.getElementById("js-close-greeting").addEventListener("click", jsCloseGreeting);

  function jsCloseGreeting() {
    this.parentNode.parentNode.removeChild(document.getElementById("greeting"));
  };

}
