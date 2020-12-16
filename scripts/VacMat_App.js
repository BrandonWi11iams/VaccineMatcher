vacMatch = {

  init: function() {
    for (let i = 0; i < 16; i++) {
      let playGrid = document.createElement("div");
      playGrid.className = "score-container";
      playGrid_container.appendChild(playGrid);
    }
  }

}

vacMatch.init();
