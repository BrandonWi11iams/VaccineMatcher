vacMatch = {
  cells: null,


  init: function() {
    let cells_container = document.getElementById("grid");
    for (let i = 0; i < 16; i++) {
      let cells = document.createElement("div");
      cells.className = "score-container";
      cells_container.appendChild(cells);
    }
  }

}

vacMatch.init();
