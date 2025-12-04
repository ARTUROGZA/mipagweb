const sonido = document.getElementById("sonidoClick");

function cambiarPantalla() {
  sonido.currentTime = 0;
  sonido.play().catch(e => console.log("Audio bloqueado:", e)); // 🔊 solo suena aquí
  document.getElementById("inicio").classList.add("oculto");
  document.getElementById("segunda").classList.remove("oculto");
}

function volverInicio() {
  // ❌ se quita el sonido aquí
  document.getElementById("segunda").classList.add("oculto");
  document.getElementById("inicio").classList.remove("oculto");
}
