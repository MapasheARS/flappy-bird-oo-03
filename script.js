const juego = {
    // 1. Agrega la propiedad timerId
    timerId: 0,
    // 2. Agrega la propiedad gravedad
    gravedad: 2,
  
    // 3. Agrega el método aleatorio()
    aleatorio: function (min, max) {
      // Escribe codigo del método 
      Math.round(Math.random() * (max - min + 1) + min);
    },
  

    // 12. Agrega el método loop()
    loop: function () {
     // Escribe codigo del método
     bird.efectoGravedad(),
     bird.dibujar(),
     bird.verificarcolision()
    },
  
    // 13. Agrega el método iniciar()
    iniciar: function() {
     // Escribe codigo del método
     document.addEventListener("keyup",bird.mover)
     juego.timerId = setInterval(juego.loop, 20)
    }
  
  };





const bird = {
    // 4. Agrega la propiedad div
   div: document.querySelector(".bird"),
    // 5. Agrega la propiedad bottom
   bottom: juego.aleatorio(10,570),

    // 6. Agrega la propiedad left
    left: 250,

    // 7. Agrega la propiedad width
    width: 60,

    // 8. Agrega la propiedad height
    height: 45,
    // 9. Agrega el método efectoGravedad()
    efectoGravedad: function () {
      // Agrega codigo del método
      bird.bottom -= juego.gravedad
    },
  
    // 10. Agrega el método dibujar()
    dibujar: function () {
      //Agrega codigo del método
      bird.div.style.bottom = bird.bottom + "px"
    },

    // 11. Agrega el método mover()
    mover: function(){
      bird.bottom = bird.bottom + 40
    }
};
   

// llama a juego.iniciar()
juego.iniciar()
