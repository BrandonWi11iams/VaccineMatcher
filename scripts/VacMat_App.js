let VacMatApp = {

  cells: [],
  container: document.getElementById("grid"),


  init: function () {
    let cells_container = document.getElementById("grid"); {

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

  renderchemical: function () {
    for (let i = 0; i < this.chemical.length; i++) {
      this.chemical[i].element.style.top = this.chemical[i].y_pos + "px";
      this.chemical[i].element.style.left = this.chemical[i].x_pos + "px";
      this.chemical[i].element.style.backgroundColor = this.chemical[i].color;
      this.chemical[i].element.style.height = this.chemical[i].radius * 2 + "px";
      this.chemical[i].element.style.width = this.chemical[i].radius * 2 + "px";
      if (this.chemical[i].distanced == false) {
        this.chemical[i].x_pos = this.chemical[i].x_pos + this.chemical[i].x_velocity;
        this.chemical[i].y_pos = this.chemical[i].y_pos + this.chemical[i].y_velocity;
      }

    }
  },
  


}
VacMatApp.init();




