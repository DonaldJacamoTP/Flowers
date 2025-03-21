var audio = document.querySelector("audio");
var lyricsElement = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ya no importa cada noche que esperé", time: 11 },
  { text: "Cada calle o laberinto que crucé", time: 17 },
  { text: "Porque el cielo ha conspirado a mi favor", time: 22 },
  { text: "Y a un segundo de rendirme te encontré", time: 28 },
  { text: "Piel con piel", time: 34 },
  { text: "El corazón se me desarma", time: 36 },
  { text: "Me haces bien", time: 39 },
  { text: "Enciendes luces en mi alma", time: 41 },
  { text: "Creo en ti y en este amor", time: 45 },
  { text: "Que me vuelve indestructible", time: 50 },
  { text: "Que detuvo mi caída libre", time: 52 },
  { text: "Creo en ti y mi dolor", time: 55 },
  { text: "Se quedó kilómetros atrás", time: 60 },
  { text: "Mis fantasmas hoy, por fin, están en paz", time: 65 },
  { text: "El pasado es un mal sueño que acabó", time: 83 },
  { text: "Un incendio que en tus brazos se apagó", time: 89 },
  { text: "Cuando estaba a medio paso de caer", time: 93 },
  { text: "Mis silencios se encontraron con tu voz", time: 100 },
  { text: "Te seguí y reescribiste mi futuro", time: 105 },
  { text: "Es aquí, mi único lugar seguro", time: 110 },
  { text: "Creo en ti y en este amor", time: 116 },
  { text: "Que me ha vuelto indestructible", time: 120 },
  { text: "Que detuvo mi caída libre", time: 124 },
  { text: "Creo en ti y mi dolor", time: 128 },
  { text: "Se quedó kilómetros atrás", time: 132 },
  { text: "Mis fantasmas hoy, por fin, están en paz", time: 138 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyricsElement.style.opacity = opacity;
    lyricsElement.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyricsElement.style.opacity = 0;
    lyricsElement.innerHTML = "";
  }
}

setInterval(updateLyrics, 100); // Actualización cada 100 ms para mejorar la sincronización

// Función título
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
