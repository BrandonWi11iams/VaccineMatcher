let VacMat = {
  
  cells: null,


  init: function () {
    let cells_container = document.getElementById("grid"); {

    }
    for (let i = 0; i < 16; i++) {
      let cells = document.createElement("div");
      cells.className = "cells";
      cells_container.appendChild(cells);
    }
    this.cells = cells_container.children;


    for (let i = 0; i < this.squares.length; i++) { 

    }
  }


}
vacMatch.init();




