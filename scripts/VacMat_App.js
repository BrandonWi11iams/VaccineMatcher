let VacMatApp = {

  cells: [],
  container: document.getElementsByClassName("grid"),


  init: function () {
    let cells_container = document.getElementsByClassName("grid"); {

    }
    for (let i = 0; i < 16; i++) {
      let cells = document.createElement("div");
      cells.className = "cells";
      cells_container.appendChild(cells);
    }
    this.cells = cells_container.children;

    for (let i = 0; i < 2; i++) {
      this.chemical.push(this.createchem())
    }
    this.renderchemical();

    
  },

  createChem: function() {
    let chemDiv= document.createElement("div") 
    chemDiv.className = "chemical"
    this.container.append(chemDiv)
    let chemical = {
      color: "rgba(3,252,65)",
      element: persondiv,
      
    }
    return chemical;
  },

  
  


}
VacMatApp.init();




