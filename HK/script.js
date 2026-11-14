const contenido = {

  portada: {
    titulo: "¡FELIZ MESESITO, MI VIDA!",
    intro: "Estoy muy feliz de que estemos cumpliendo un mes:D, por eso te hice este detallito:3 (espero te guste mucho y que lo disfrutes, mi amor<333)",
    pregunta: "¿QUIERES VER TU SORPRESA?",
    botonSi: "¡SÍÍ, POR FAVOR!",
    botonNo: "NO GRACIAS"
  },

  insistencia: {
    titulo: "¿SEGURO QUE NOOO?:((",
    mensaje: "PROMETO QUE TE ENCANTARÁ!!!",
    pide: "DI QUE SÍ<333",
    boton: "¡SÍ!"
  },

  final: {
    titulo: "GRACIAS POR VER TU SORPRESITA CARIÑO<3",
    carta: "[mensaje final] (sí borré casi todo pq me da pena neputo)",
    despedida: "[otro mensaje]"
  },

  botones: { continuar: "CONTINUAR →", volver: "← VOLVER A LOS REGALOS", reiniciar: "VOLVER A EMPEZAR" }
};

// ---------- PANTALLA DE LOS 4 REGALOS ----------
// regalo1 = frases (nocturno) · regalo2 = carta (Panteón)
// regalo3 = fotos (nocturno)   · regalo4 = poema (Panteón)
const regalos = {
  titulo: "SOLO PARA TI :D",
  subtitulo: "Escoge un regalo amor jeje sioc teamo<33",
  regalo1: { titulo: "1" },
  regalo2: { titulo: "2" },
  regalo3: { titulo: "3" },
  regalo4: { titulo: "4" },

  frases: {
    titulo: "♥️ RAZONES POR LAS QUE TE AMO ♥️",
    subtitulo: "Hay muchas razones por las que te amo, pero aquí te dejo algunas de ellas<3",
    frase1: "[frase 1]",
    frase2: "[frase 2]",
    frase3: "[frase 3]",
    frase4: "[frase 4]",
    frase5: "[frase 5]",
    frase6: "[frase 6]"
  },

  carta: {
    titulo: "Una carta para el amor de mi vida ♥️",
    contenido: `[inserte una carta super mega cursi]`
  },

  fotos: {
    titulo: "NUESTRAS FOTOS JUNTOS!! <3",
    subtitulo: "Escogí las que más me gustan de nosotros, y espero que te gusten mucho también JEJWHE.",
    foto1Texto: "[descripción 1]",
    foto2Texto: "[descripción 2]",
    foto3Texto: "[descripción 3]",
    foto4Texto: "[descripción 4]",
    foto5Texto: "[descripción 5]",
    foto6Texto: "[descripción 6]"
  },

  poema: {
    titulo: "A puerta abierta.",
    contenido: `[un poema que me da pena dejar]
`
  }
};

// ================================
// PERSONALIZACIÓN DE IMÁGENES
// ================================
// Caballerito → assets/kinght_poto-removebg-preview.png
// Los 4 regalos → assets/5055476760425729941_120-removebg-preview.png
const imagenes = {
  caballeritoPrincipal: "assets/kinght_poto-removebg-preview.png",
  caballeritoTriste:    "assets/kinght_poto-removebg-preview.png",
  caballeritoFeliz:     "assets/kinght_poto-removebg-preview.png",
  caballeritoCalido:    "assets/kinght_poto-removebg-preview.png",
  regalo1: "assets/5055476760425729941_120-removebg-preview.png",
  regalo2: "assets/5055476760425729941_120-removebg-preview.png",
  regalo3: "assets/5055476760425729941_120-removebg-preview.png",
  regalo4: "assets/5055476760425729941_120-removebg-preview.png",
  foto1: "assets/5055476760425729943_119.jpg",
  foto2: "assets/5055476760425729944_121.jpg",
  foto3: "assets/5055476760425729945_120.jpg",
  foto4: "assets/5055476760425729946_120.jpg",
  foto5: "assets/5055476760425729947_121.jpg",
  foto6: "assets/5055476760425729948_121.jpg"
};

// ================================
// CÓDIGO (no necesitas tocarlo)
// ================================
const $ = (id) => document.getElementById(id);

// Imagen de respaldo si alguna ruta falla (el Caballerito, o el clavo en los regalos)
const img = (k, alt, cl = "caballero") => {
  const resp = k.startsWith("regalo") ? imagenes.regalo1 : imagenes.caballeritoPrincipal;
  return `<img class="${cl}" src="${imagenes[k]}" alt="${alt}" onerror="this.onerror=null;this.src='${resp}'">`;
};

// ---------- Construcción de pantallas ----------
const C = contenido, R = regalos;
$("p1").innerHTML = `
  ${img("caballeritoPrincipal", "El Caballerito sonriendo")}
  <h1>${C.portada.titulo}</h1>
  <p class="editable">${C.portada.intro}</p>
  <h2>${C.portada.pregunta}</h2>
  <div class="fila">
    <button class="btn" data-ir="2">${C.portada.botonNo}</button>
    <button class="btn" data-ir="4">${C.portada.botonSi}</button>
  </div>`;

$("p2").innerHTML = `
  ${img("caballeritoTriste", "El Caballerito triste y decepcionado")}
  <h1>${C.insistencia.titulo}</h1>
  <p class="editable">${C.insistencia.mensaje}</p>
  <h2>${C.insistencia.pide}</h2>
  <button class="btn" data-ir="4">${C.insistencia.boton}</button>`;

const pastillas = [1, 2, 3, 4, 5, 6].map((n, i) =>
  `<button class="btn frase" data-i="${i}">${R.frases["frase" + n]}</button>`);
// Regalo 1 · FRASES (paleta nocturna)
$("p3").innerHTML = `
  <h2>${R.frases.titulo}</h2>
  <p class="editable">${R.frases.subtitulo}</p>
  <div class="escena">
    <div class="lado">${pastillas.slice(0, 3).join("")}</div>
    <div>${img("caballeritoFeliz", "El Caballerito feliz")}</div>
    <div class="lado">${pastillas.slice(3, 6).join("")}</div>
  </div>
  <button class="btn" data-ir="4">${C.botones.continuar}</button>`;

// Pantalla principal: los 4 regalos
$("p4").innerHTML = `
  <h2>${R.titulo}</h2>
  <p class="editable">${R.subtitulo}</p>
  <div class="rejilla">${[1, 2, 3, 4].map((n) =>
    `<button class="tarjeta" data-s="${n - 1}">${img("regalo" + n, "Ilustración del regalo " + n, "")}<span>${R["regalo" + n].titulo}</span></button>`).join("")}
  </div>
  <button class="btn" id="seguir" data-ir="7" style="display:none">${C.botones.continuar}</button>`;

// Regalo 4 · POEMA (Panteón)
$("p5").innerHTML = `
  <h1 class="cinta">${R.poema.titulo}</h1>
  <article class="cuadro grande"><p>${R.poema.contenido}</p></article>
  ${img("caballeritoCalido", "El Caballerito junto al poema", "caballero chico")}
  <button class="btn" data-ir="4">${C.botones.volver}</button>`;

// Regalo 2 · CARTA (Panteón)
$("p8").innerHTML = `
  <h1 class="cinta">${R.carta.titulo}</h1>
  <article class="cuadro grande"><p>${R.carta.contenido}</p></article>
  ${img("caballeritoCalido", "El Caballerito junto a la carta", "caballero chico")}
  <button class="btn" data-ir="4">${C.botones.volver}</button>`;

// Regalo 3 · FOTOS (paleta nocturna)
const giros = [-4, 3, -2, 5, -5, 2];
$("p6").innerHTML = `
  <h2>${R.fotos.titulo}</h2>
  <p class="editable">${R.fotos.subtitulo}</p>
  <div class="collage">${[1, 2, 3, 4, 5, 6].map((n, i) =>
    `<figure class="foto" style="--giro:${giros[i]}deg"><div class="marco">
      <img src="${imagenes["foto" + n]}" alt="Fotografía de recuerdo ${n}"
        onerror="this.style.display='none';this.parentNode.classList.add('vacia')"></div>
      <figcaption>${R.fotos["foto" + n + "Texto"]}</figcaption></figure>`).join("")}
  </div>
  <button class="btn" data-ir="4">${C.botones.volver}</button>`;

// Dedicatoria final
$("p7").innerHTML = `
  ${img("caballeritoFeliz", "El Caballerito rodeado de corazones")}
  <h1>${C.final.titulo}</h1>
  <div class="carta"><p>${C.final.carta}</p></div>
  <h2>${C.final.despedida}</h2>
  <button class="btn" data-ir="1">${C.botones.reiniciar}</button>`;

// ---------- Navegación con transición suave ----------
const pantallas = [...document.querySelectorAll(".pantalla")];
let actual = 0;

function ir(n) {
  const nueva = pantallas[n - 1];
  const vieja = pantallas[actual];
  if (nueva === vieja && nueva.classList.contains("visible")) return;
  vieja.classList.remove("visible");
  setTimeout(() => {
    vieja.style.display = "none";
    nueva.style.display = "flex";
    void nueva.offsetWidth;
    nueva.classList.add("visible");
  }, vieja.style.display === "flex" ? (vieja.id === "p5" || vieja.id === "p8" ? 750 : 450) : 0);
  actual = n - 1;
  const pan = n === 5 || n === 8; // 5 = poema, 8 = carta (únicas con paleta del Panteón)
  document.body.classList.toggle("calido", pan);
  colorParticulas = pan ? "240,216,138" : "130,170,255";
}

document.addEventListener("click", (e) => {
  const f = e.target.closest(".foto");
  if (f) { const g = f.classList.contains("grande"); document.querySelectorAll(".foto.grande").forEach(x => x.classList.remove("grande")); if (!g) f.classList.add("grande"); }
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.ir) ir(+b.dataset.ir);
  if (b.dataset.i !== undefined) reaccionar(b);
  if (b.dataset.s !== undefined) abrirSorpresa(+b.dataset.s, b);
});

// ---------- Frases: corazón + movimiento + aviso ----------
let tAviso;
function reaccionar(b) {
  const r = b.getBoundingClientRect();
  const h = document.createElement("div");
  h.className = "corazon"; h.textContent = "♥️";
  h.style.left = r.left + r.width / 2 + "px"; h.style.top = r.top + "px";
  document.body.appendChild(h); setTimeout(() => h.remove(), 1400);
  const k = document.querySelector("#p3 .caballero");
  k.classList.remove("rebote"); void k.offsetWidth; k.classList.add("rebote");
  $("aviso").textContent = b.textContent; $("aviso").classList.add("on");
  clearTimeout(tAviso); tAviso = setTimeout(() => $("aviso").classList.remove("on"), 2200);
}

// ---------- Regalos: cada tarjeta abre SU pantalla ----------
const destinos = [3, 8, 6, 5]; // frases, carta, fotos, poema
const abiertas = new Set();
function abrirSorpresa(i, tarjeta) {
  abiertas.add(i); tarjeta.classList.add("abierta");
  if (abiertas.size === 4) $("seguir").style.display = ""; // aparece al abrir los 4
  ir(destinos[i]);
}

// ---------- Música (sin autoplay) ----------
const audio = $("audio"), bm = $("musica");
bm.onclick = () => {
  if (audio.paused) audio.play().then(() => (bm.textContent = "❚❚")).catch(() => ($("aviso").textContent = "No se encontró el audio en la carpeta audio"));
  else { audio.pause(); bm.textContent = "▶"; }
};

// Autoplay: se intenta al abrir la página. Si el navegador lo bloquea
// (casi todos lo hacen), la música empieza con el primer toque o clic.
const eventosInicio = ["click", "keydown", "touchend"];
function iniciarMusica() {
  audio.play().then(() => {
    bm.textContent = "❚❚";
    eventosInicio.forEach((ev) => document.removeEventListener(ev, iniciarMusica));
  }).catch(() => {});
}
iniciarMusica();
eventosInicio.forEach((ev) => document.addEventListener(ev, iniciarMusica));

// ---------- Fondo animado: partículas / polvo dorado ----------
const cv = $("fondo"), cx = cv.getContext("2d");
let colorParticulas = "130,170,255", W, H;
const motas = Array.from({ length: 70 }, () => ({
  x: Math.random(), y: Math.random(), r: Math.random() * 2 + .6,
  v: Math.random() * .0004 + .0001, o: Math.random() * 6
}));
function medir() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
addEventListener("resize", medir); medir();
(function dibujar(t) {
  cx.clearRect(0, 0, W, H);
  motas.forEach((m) => {
    m.y -= m.v; if (m.y < 0) m.y = 1;
    const a = .35 + .35 * Math.sin(t / 700 + m.o);
    cx.fillStyle = `rgba(${colorParticulas},${a})`;
    cx.beginPath(); cx.arc(m.x * W + Math.sin(t / 2000 + m.o) * 12, m.y * H, m.r, 0, 7); cx.fill();
  });
  requestAnimationFrame(dibujar);
})(0);

// Inicio
ir(1);
