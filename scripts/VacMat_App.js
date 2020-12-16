vacMatch = {

  init: function() {
    for (let i = 0; i < 9000; i++) {
      let square = document.createElement("div");
      square.className = "square";
      squares_container.appendChild(square);
    }
  }

}

vacMatch.init();
