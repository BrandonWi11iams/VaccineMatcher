vacMatch = {
  cells: null,


  init: function() {
    let cells_container = document.getElementById("grid");
    for (let i = 0; i < 16; i++) {
      let cells = document.createElement("div");
      cells.className = "cell";
      cells_container.appendChild(square);
    }
    this.squares = squares_container.children;

      
    }

    
  }



vacMatch.init();




