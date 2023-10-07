//Terrain Rotation
AFRAME.registerComponent("island-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});
AFRAME.registerComponent("scuba-diver-controls", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscend:{type:'number',default:0}
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        this.data.speedOfRotation=this.el.getAttribute('rotation')
  
        var diver_rotation=this.data.speedOfRotation
  
        if (e.key === "ArrowRight") {
          if (diver_rotation.x < 10) {
            diver_rotation.x += 0.5;
            this.el.setAttribute('rotation',diver_rotation)
          }
          if (planePosition.x < 10) {
            planePosition.x += 0.5;
            this.el.setAttribute("position", planePosition);
          }
          
        }
        if (e.key === "ArrowLeft") {
          if (diver_rotation.x > -10) {
            diver_rotation.x -= 0.5;
            this.el.setAttribute('rotation',diver_rotation)
          }
          if (planePosition.x < -10) {
            planePosition.x -= 0.1;
            this.el.setAttribute("position", planePosition);
          }
        
        }
        if (e.key === "ArrowUp") {
          if (diverRotation.z < 20) {
            diverRotation.z += 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.y < 2) {
            diverPosition.y += 0.01;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (diverRotation.z > -10) {
            diverRotation.z -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.y > -2) {
            diverPosition.y -= 0.01;
            this.el.setAttribute("position", diverPosition);
          }
        }
      });
    },
  });
  