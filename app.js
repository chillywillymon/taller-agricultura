/* ==========================================================================
   DATOS Y CONFIGURACIÓN DEL PROYECTO
   ========================================================================== */

// Configuración de la galería de fotos reales de la FASE 0 ("Conoce nuestros orígenes")
const FASE0_GALLERY = [
  { url: 'assets/images/abuelo_1.jpeg', text: 'El abuelo y el tío de Jimena son agricultores y tienen campos llenos de trigo, centeno y avena.' },
  { url: 'assets/images/abuelo_2.jpeg', text: 'Sus tierras se encuentran en el Páramo de Fontecha, cerca de Guardo (Palencia).' },
  { url: 'assets/images/abuelo_3.jpeg', text: 'Tienen mucha maquinaria, como tractores, cosechadoras, empacadoras...' },
  { url: 'assets/images/abuelo_4.png', text: 'En verano es la época favorita, porque el campo se pone de un color dorado y comienza la cosecha.' },
  { url: 'assets/images/abuelo_5.jpeg', text: 'Llenamos el almacén de grano y a Jimena le encanta tirarse a jugar.' }
];

// Alimentos y productos de la FASE 1
const FASE1_PRODUCTS = [
  { name: 'Barra de pan', emoji: '🥖', grain: 'trigo', text: '¡El trigo se muele para hacer harina y hornear ricas barras de pan!' },
  { name: 'Espaguetis', emoji: '🍝', grain: 'trigo', text: '¡Los espaguetis y la pasta se hacen con sémola de trigo!' },
  { name: 'Gorro de paja', emoji: '👒', grain: 'trigo', text: '¡La paja seca del trigo sirve para tejer sombreros para el sol!' },
  { name: 'Copos de avena', emoji: '🥣', grain: 'avena', text: '¡Los copos de avena te dan súper fuerza y energía por las mañanas!' },
  { name: 'Jabón de avena', emoji: '🧼', grain: 'avena', text: '¡La avena es súper suave y cuida la piel de tus manos!' },
  { name: 'Leche de avena', emoji: '🥛', grain: 'avena', text: '¡La leche de avena es una bebida vegetal dulce y muy rica!' },
  { name: 'Cama de animales', emoji: '🛏️', grain: 'centeno', text: '¡La paja de centeno es muy resistente y abriga a los animales en el establo!' },
  { name: 'Pan oscuro', emoji: '🍞', grain: 'centeno', text: '¡El centeno se usa para hacer pan negro u oscuro, muy saludable!' },
  { name: 'Cerveza', emoji: '🍺', grain: 'centeno', text: '¡El grano de centeno (y cebada) se fermenta para elaborar cerveza!' }
];

// Pasos de cultivo de la FASE 2
const FASE2_STEPS = [
  {
    image: 'assets/images/paso_1.jpeg',
    title: '1. Preparar la tierra',
    desc: 'El abuelo o el tío pasan con el tractor y el arado para remover la tierra seca, dejándola blandita.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#8D5B4C"/>
      <g fill="#6E4437"><ellipse cx="40" cy="150" rx="30" ry="10"/><ellipse cx="120" cy="152" rx="40" ry="12"/></g>
      <circle cx="350" cy="40" r="25" fill="#FCD12A"/>
      <g class="animate-chug">
        <path d="M 120 130 L 150 145" stroke="#555" stroke-width="4"/>
        <rect x="150" y="80" width="90" height="50" fill="#E74C3C" rx="10"/>
        <circle cx="170" cy="130" r="18" fill="#333" stroke="#FFF" stroke-width="3"/>
        <circle cx="225" cy="125" r="26" fill="#333" stroke="#FFF" stroke-width="4"/>
      </g>
    </svg>`
  },
  {
    image: 'assets/images/paso_2.jpeg',
    title: '2. Gradear la tierra',
    desc: 'Pasamos la grada para desmenuzar los terrones, dejar la tierra muy suelta y eliminar las malas hierbas.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#8D5B4C"/>
      <circle cx="80" cy="40" r="20" fill="#FCD12A"/>
      <g class="animate-chug">
        <rect x="160" y="80" width="80" height="45" fill="#E74C3C" rx="8"/>
        <circle cx="180" cy="125" r="16" fill="#333"/>
        <circle cx="220" cy="125" r="16" fill="#333"/>
        <line x1="100" y1="120" x2="160" y2="120" stroke="#777" stroke-width="4"/>
        <circle cx="110" cy="125" r="12" fill="none" stroke="#555" stroke-width="3"/>
        <circle cx="130" cy="125" r="12" fill="none" stroke="#555" stroke-width="3"/>
        <circle cx="150" cy="125" r="12" fill="none" stroke="#555" stroke-width="3"/>
      </g>
    </svg>`
  },
  {
    image: 'assets/images/paso_3.jpeg',
    title: '3. La siembra',
    desc: 'La máquina sembradora va soltando las semillitas de cereal en filas perfectas debajo de la tierra.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#8D5B4C"/>
      <g class="animate-chug">
        <rect x="190" y="80" width="90" height="50" fill="#E74C3C" rx="10"/>
        <circle cx="210" cy="130" r="18" fill="#333"/>
        <circle cx="265" cy="125" r="26" fill="#333"/>
        <rect x="110" y="90" width="60" height="35" fill="#F47A22" rx="5"/>
        <line x1="170" y1="110" x2="190" y2="110" stroke="#777" stroke-width="6"/>
      </g>
      <circle cx="125" cy="145" r="3" fill="#FCD12A" class="falling-seed"/>
      <circle cx="140" cy="148" r="3" fill="#FCD12A" class="falling-seed" style="animation-delay: 0.3s;"/>
    </svg>`
  },
  {
    image: 'assets/images/paso_4.jpeg',
    title: '4. Sulfatar y fertilizar',
    desc: 'Regamos las plantitas con nutrientes y medicinas para que crezcan fuertes y sanas sin bichos.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#8D5B4C"/>
      <g fill="#68BB59"><path d="M 40 130 Q 45 115 50 130" stroke="#68BB59" stroke-width="3" fill="none"/></g>
      <g class="animate-chug">
        <rect x="160" y="80" width="80" height="45" fill="#68BB59" rx="8"/>
        <circle cx="178" cy="125" r="16" fill="#333"/>
        <circle cx="225" cy="125" r="16" fill="#333"/>
        <line x1="80" y1="100" x2="160" y2="100" stroke="#444" stroke-width="4"/>
        <line x1="240" y1="100" x2="320" y2="100" stroke="#444" stroke-width="4"/>
      </g>
      <path d="M 100 105 L 90 128" stroke="#FFF" stroke-width="3" class="spray-mist"/>
    </svg>`
  },
  {
    image: 'assets/images/paso_5.jpeg',
    title: '5. El clima y el tiempo',
    desc: 'El sol brillante calienta el campo y las nubes regalan lluvia fresca para dar de beber a los cereales.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#8D5B4C"/>
      <circle cx="70" cy="50" r="30" fill="#FCD12A"/>
      <g fill="#FFF"><path d="M 260 60 a 20 20 0 0 1 20 -20 a 25 25 0 0 1 40 5 Z"/></g>
      <line x1="280" y1="95" x2="275" y2="115" stroke="#4A90E2" stroke-width="3" class="rain-drop"/>
    </svg>`
  },
  {
    image: 'assets/images/paso_6.jpeg',
    title: '6. Crecimiento y cambio de color',
    desc: '¡Las plantas crecen altísimas! Con el calor del verano, pasan de color verde a un color amarillo oro.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#FFEAA7"/>
      <rect y="130" width="400" height="70" fill="#D39E82"/>
      <g class="sway-crop">
        <path d="M 40 130 L 40 70 M 40 70 L 35 60 M 40 70 L 45 60" stroke="#FCD12A" stroke-width="5"/>
        <path d="M 80 130 L 80 60 M 80 60 L 75 50" stroke="#E2B13C" stroke-width="6"/>
      </g>
    </svg>`
  },
  {
    image: 'assets/images/paso_7.mp4',
    title: '7. La cosecha',
    desc: 'La gran máquina cosechadora corta las espigas, separa el grano limpio y lo guarda en su gran tanque.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#C17A63"/>
      <g class="animate-chug">
        <rect x="80" y="60" width="140" height="70" fill="#E74C3C" rx="10"/>
        <circle cx="115" cy="130" r="28" fill="#333"/>
        <circle cx="195" cy="135" r="18" fill="#333"/>
        <g class="spin-wheel" style="transform-origin: 55px 125px;"><circle cx="55" cy="125" r="22" fill="none" stroke="#777" stroke-width="4"/></g>
      </g>
    </svg>`
  },
  {
    image: 'assets/images/paso_8.mp4',
    title: '8. Empaque de la paja',
    desc: 'Con lo que sobra de las plantas, hacemos grandes paquetes redondos de paja llamados alpacas.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#E2B13C"/>
      <g class="animate-chug">
        <rect x="220" y="80" width="80" height="45" fill="#68BB59" rx="8"/>
        <circle cx="285" cy="125" r="22" fill="#333"/>
        <rect x="120" y="85" width="80" height="40" fill="#F47A22" rx="5"/>
      </g>
    </svg>`
  },
  {
    image: 'assets/images/paso_9.jpeg',
    title: '9. Almacenamiento',
    desc: 'Guardamos el grano limpio dentro de unos depósitos gigantes de metal llamados silos para protegerlo.',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#68BB59"/>
      <rect x="180" y="15" width="90" height="125" rx="5" fill="#DFDFDF" stroke="#888" stroke-width="4"/>
    </svg>`
  },
  {
    image: 'assets/images/Antiguas/paso_9.png',
    title: '10. Fábricas y molinos',
    desc: 'Los molinos muelen los granos de cereal para convertirlos en harina, ¡lista para hornear cosas ricas!',
    svg: `<svg viewBox="0 0 400 200" width="100%" height="100%">
      <rect width="400" height="150" fill="#A3D8F4"/>
      <rect y="130" width="400" height="70" fill="#E2B13C"/>
      <path d="M 180 140 L 190 50 L 210 50 L 220 140 Z" fill="#D2C4B1" stroke="#8D5B4C" stroke-width="4"/>
      <g class="spin-wheel" style="transform-origin: 200px 50px; animation-duration: 10s;">
        <line x1="200" y1="50" x2="200" y2="-10" stroke="#8D5B4C" stroke-width="4"/>
        <line x1="200" y1="50" x2="200" y2="110" stroke="#8D5B4C" stroke-width="4"/>
      </g>
    </svg>`
  }
];

// Datos de las máquinas para la FASE 3 (Juego de sonidos)
const FASE3_MACHINES = [
  {
    name: 'Tractor',
    icon: '🚜',
    soundName: 'tractor',
    svg: `<svg viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="180" fill="#A3D8F4" rx="20"/>
      <rect y="160" width="400" height="90" fill="#8D5B4C" rx="20"/>
      <!-- Tractor Gigante Animado -->
      <g class="animate-chug">
        <rect x="120" y="90" width="160" height="85" fill="#E74C3C" rx="15" stroke="#FFF" stroke-width="3"/>
        <rect x="200" y="45" width="70" height="50" fill="#E74C3C" rx="8" stroke="#FFF" stroke-width="3"/>
        <rect x="210" y="55" width="50" height="35" fill="#FFF" rx="4"/>
        <circle cx="150" cy="170" r="30" fill="#333" stroke="#FFF" stroke-width="5"/>
        <circle cx="250" cy="160" r="45" fill="#333" stroke="#FFF" stroke-width="6"/>
        <line x1="145" y1="90" x2="145" y2="30" stroke="#444" stroke-width="8" stroke-linecap="round"/>
        <circle cx="145" cy="30" r="8" fill="#DDD" class="puff-smoke"/>
        <circle cx="155" cy="15" r="12" fill="#EEE" class="puff-smoke" style="animation-delay: 0.3s;"/>
      </g>
    </svg>`
  },
  {
    name: 'Cosechadora',
    icon: '🌾',
    soundName: 'cosechadora',
    svg: `<svg viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="180" fill="#A3D8F4" rx="20"/>
      <rect y="160" width="400" height="90" fill="#8D5B4C" rx="20"/>
      <g class="animate-chug">
        <rect x="110" y="80" width="190" height="95" fill="#E74C3C" rx="15" stroke="#FFF" stroke-width="3"/>
        <rect x="210" y="50" width="70" height="40" fill="#A3D8F4" stroke="#E74C3C" stroke-width="5" rx="6"/>
        <!-- Rueda delantera gigante -->
        <circle cx="150" cy="170" r="42" fill="#333" stroke="#FFF" stroke-width="6"/>
        <!-- Rueda trasera pequeña -->
        <circle cx="265" cy="180" r="26" fill="#333" stroke="#FFF" stroke-width="4"/>
        <!-- Tubo descarga -->
        <path d="M 210 80 L 160 30 L 130 38" stroke="#DDD" stroke-width="10" stroke-linecap="round" fill="none"/>
        <!-- Rodillo giratorio -->
        <g class="spin-wheel" style="transform-origin: 70px 165px; animation-duration: 2s;">
          <circle cx="70" cy="165" r="32" fill="none" stroke="#666" stroke-width="5"/>
          <line x1="38" y1="165" x2="102" y2="165" stroke="#666" stroke-width="4"/>
          <line x1="70" y1="133" x2="70" y2="197" stroke="#666" stroke-width="4"/>
        </g>
      </g>
    </svg>`
  },
  {
    name: 'Sembradora',
    icon: '🌱',
    soundName: 'sembradora',
    svg: `<svg viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="180" fill="#A3D8F4" rx="20"/>
      <rect y="160" width="400" height="90" fill="#8D5B4C" rx="20"/>
      <g class="animate-chug">
        <!-- Tractor Verde -->
        <rect x="200" y="90" width="120" height="70" fill="#68BB59" rx="10" stroke="#FFF" stroke-width="2"/>
        <rect x="260" y="55" width="50" height="40" fill="#68BB59" rx="5"/>
        <circle cx="225" cy="160" r="22" fill="#333"/>
        <circle cx="295" cy="155" r="32" fill="#333"/>
        <!-- Sembradora naranja acoplada -->
        <rect x="90" y="100" width="90" height="50" fill="#F47A22" rx="6" stroke="#FFF" stroke-width="2"/>
        <circle cx="110" cy="160" r="18" fill="#444"/>
        <circle cx="160" cy="160" r="18" fill="#444"/>
        <line x1="180" y1="125" x2="200" y2="125" stroke="#555" stroke-width="8"/>
      </g>
      <!-- Semillas cayendo animadas -->
      <circle cx="110" cy="180" r="4.5" fill="#FCD12A" class="falling-seed"/>
      <circle cx="130" cy="175" r="4.5" fill="#FCD12A" class="falling-seed" style="animation-delay: 0.3s;"/>
      <circle cx="150" cy="182" r="4.5" fill="#FCD12A" class="falling-seed" style="animation-delay: 0.1s;"/>
      <circle cx="160" cy="178" r="4.5" fill="#FCD12A" class="falling-seed" style="animation-delay: 0.5s;"/>
    </svg>`
  },
  {
    name: 'Remolque',
    icon: '🚛',
    soundName: 'remolque',
    svg: `<svg viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="180" fill="#A3D8F4" rx="20"/>
      <rect y="160" width="400" height="90" fill="#8D5B4C" rx="20"/>
      <g class="animate-chug">
        <!-- Tractor -->
        <rect x="250" y="100" width="90" height="55" fill="#E74C3C" rx="8"/>
        <circle cx="270" cy="155" r="18" fill="#222"/>
        <circle cx="320" cy="150" r="24" fill="#222"/>
        <!-- Remolque gigante lleno de grano amarillo -->
        <rect x="80" y="80" width="145" height="70" fill="#4A90E2" rx="5" stroke="#FFF" stroke-width="3"/>
        <!-- Carga de trigo -->
        <path d="M 80 80 Q 110 65 150 72 T 225 80 Z" fill="#FCD12A"/>
        <circle cx="110" cy="155" r="22" fill="#222" stroke="#FFF" stroke-width="3"/>
        <circle cx="180" cy="155" r="22" fill="#222" stroke="#FFF" stroke-width="3"/>
        <!-- Enganche -->
        <line x1="225" y1="125" x2="250" y2="125" stroke="#666" stroke-width="8"/>
      </g>
    </svg>`
  },
  {
    name: 'Arado',
    icon: '🚜⛏️',
    soundName: 'arado',
    svg: `<svg viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="180" fill="#A3D8F4" rx="20"/>
      <!-- Tierra con surcos marcados -->
      <rect y="160" width="400" height="90" fill="#8D5B4C" rx="20"/>
      <path d="M 0 170 Q 100 160 200 172 T 400 168" fill="none" stroke="#6E4437" stroke-width="12"/>
      <g class="animate-chug">
        <!-- Tractor -->
        <rect x="160" y="90" width="130" height="70" fill="#E74C3C" rx="10" stroke="#FFF" stroke-width="2"/>
        <circle cx="190" cy="160" r="20" fill="#333"/>
        <circle cx="260" cy="155" r="28" fill="#333"/>
        <!-- Arado de metal detrás -->
        <path d="M 80 120 L 140 145 M 100 130 L 115 152 M 120 130 L 132 152" stroke="#777" stroke-width="6" stroke-linecap="round"/>
        <!-- Ruedita del arado -->
        <circle cx="95" cy="155" r="12" fill="#555"/>
        <line x1="140" y1="130" x2="160" y2="130" stroke="#555" stroke-width="8"/>
      </g>
    </svg>`
  }
];

// Preguntas y respuestas de la FASE 4 (¡Todos al campo!)
const FASE4_QUESTIONS = [
  {
    question: "¿De qué cereal hacemos harina blanca para hacer pan de molde y espaguetis?",
    choices: [
      { text: "Trigo", emoji: "🌾", isCorrect: true },
      { text: "Avena", emoji: "🥣", isCorrect: false },
      { text: "Centeno", emoji: "🌾", isCorrect: false }
    ],
    elementId: "farm-wheat"
  },
  {
    question: "¿Qué máquina remueve la tierra seca para dejarla blandita antes de sembrar?",
    choices: [
      { text: "Remolque", emoji: "🚛", isCorrect: false },
      { text: "Arado", emoji: "🚜⛏️", isCorrect: true },
      { text: "Cosechadora", emoji: "🌾", isCorrect: false }
    ],
    elementId: "farm-plow"
  },
  {
    question: "¿Qué necesita la semilla en el cielo para calentarse y crecer con energía?",
    choices: [
      { text: "El Sol", emoji: "☀️", isCorrect: true },
      { text: "La Nieve", emoji: "❄️", isCorrect: false },
      { text: "La Luna", emoji: "🌙", isCorrect: false }
    ],
    elementId: "farm-sun"
  },
  {
    question: "¿Con qué cereal hacemos los copos para un desayuno súper energético y jabón suave?",
    choices: [
      { text: "Trigo", emoji: "🌾", isCorrect: false },
      { text: "Centeno", emoji: "🌾", isCorrect: false },
      { text: "Avena", emoji: "🥣", isCorrect: true }
    ],
    elementId: "farm-avena"
  },
  {
    question: "¿Qué gran máquina corta las espigas maduras y separa el grano limpio en verano?",
    choices: [
      { text: "Sembradora", emoji: "🌱", isCorrect: false },
      { text: "Cosechadora", emoji: "🚜", isCorrect: true },
      { text: "Remolque", emoji: "🚛", isCorrect: false }
    ],
    elementId: "farm-harvester"
  },
  {
    question: "¿Qué hacemos con la paja seca que sobra en el campo tras la cosecha?",
    choices: [
      { text: "Alpacas o pacas", emoji: "🟡", isCorrect: true },
      { text: "Juguetes de plástico", emoji: "🧸", isCorrect: false },
      { text: "Leche de avena", emoji: "🥛", isCorrect: false }
    ],
    elementId: "farm-bales"
  },
  {
    question: "¿Dónde molemos el grano de cereal para convertirlo en harina lista para hornear?",
    choices: [
      { text: "En la empacadora", emoji: "🚜", isCorrect: false },
      { text: "En el molino", emoji: "🏠", isCorrect: true },
      { text: "En el silo", emoji: "🛢️", isCorrect: false }
    ],
    elementId: "farm-windmill"
  },
  {
    question: "¿Quiénes trabajan la tierra cada día en el Páramo de Fontecha?",
    choices: [
      { text: "El abuelo y el tío", emoji: "👴👨", isCorrect: true },
      { text: "Los marcianos", emoji: "👽", isCorrect: false },
      { text: "Los pingüinos", emoji: "🐧", isCorrect: false }
    ],
    elementId: "farm-characters"
  }
];


/* ==========================================================================
   ESTADO GLOBAL DE LA APLICACIÓN
   ========================================================================== */

let state = {
  currentScreen: 'menu', // 'menu', 'phase0', 'phase1', 'phase2', 'phase3', 'phase4'
  phaseIndex: null,      // 0, 1, 2, 3, 4
  
  // Fase 0 state
  p0SlideIndex: 0,

  // Fase 1 state
  p1ProductIndex: 0,
  p1ProductsList: [],
  p1CorrectCount: 0,
  p1WaitingNext: false,

  // Fase 2 state
  p2StepIndex: 0,

  // Fase 3 state
  p3MachineIndex: 0,
  p3MachinesList: [],
  p3SelectedAnswer: null,
  p3CelebrationActive: false,

  // Fase 4 state
  p4QuestionIndex: 0,
  p4QuestionAnswered: false
};


/* ==========================================================================
   CONTROLADOR DE SONIDOS (SINTETIZADOR WEB AUDIO API)
   ========================================================================== */

let audioCtx = null;

function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Reproductor de efectos integrados
const AudioEffects = {
  // Pitido alegre de victoria / acierto
  playSuccess: function() {
    initAudioContext();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  },

  // Sonido suave de error / aviso
  playError: function() {
    initAudioContext();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.setValueAtTime(120, audioCtx.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.35);
  },

  // Clic suave de interfaz
  playClick: function() {
    initAudioContext();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  },

  // Generador de sonidos específicos de maquinaria agrícola (Sintetizador Web Audio API)
  playMachineSound: function(soundName) {
    initAudioContext();
    console.log("Intentando reproducir sonido:", soundName);

    // Intentar reproducir archivo de audio real (.mp3) si existe
    const audioPath = `assets/sounds/${soundName}.mp3`;
    const audio = new Audio(audioPath);
    
    audio.play().then(() => {
      console.log("Sonido real reproducido con éxito:", audioPath);
    }).catch(err => {
      console.warn("No se encontró el archivo real, usando sintetizador de audio:", err);
      // Fallback al sintetizador Web Audio API
      switch(soundName) {
        case 'tractor':
          this.synthEngine(50, 6.5, 0.18, 1.2, 220);
          break;
        case 'cosechadora':
          this.synthHarvester(1.5);
          break;
        case 'sembradora':
          this.synthSeeder(1.8);
          break;
        case 'remolque':
          this.synthSqueak(1.6);
          break;
        case 'arado':
          this.synthScraping(1.8);
          break;
      }
    });
  },

  // Sintetizador de motor diésel base
  synthEngine: function(baseFreq, chugSpeed, depth, duration, filterFreq) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    
    // LFO para el chug-chug
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);

    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(chugSpeed, audioCtx.currentTime); // Clicks por segundo

    // Modular volumen y un poco de tono con el LFO
    lfoGain.gain.setValueAtTime(depth * 5, audioCtx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency); // Modula frecuencia

    // Modulador de volumen secundario por LFO
    const ampLfoGain = audioCtx.createGain();
    ampLfoGain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    lfo.connect(ampLfoGain); // Modula volumen

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterFreq, audioCtx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    osc.start();
    lfo.start();
    osc.stop(audioCtx.currentTime + duration);
    lfo.stop(audioCtx.currentTime + duration);
  },

  // Sintetizador de cosechadora (motor + triturador ruidoso)
  synthHarvester: function(duration) {
    // Motor base
    this.synthEngine(65, 8.5, 0.12, duration, 300);

    // Ruido blanco filtrado para simular las espigas trituradas
    const bufferSize = audioCtx.sampleRate * duration;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(400, audioCtx.currentTime);
    // Modulamos la frecuencia del filtro del triturador
    filter.frequency.exponentialRampToValueAtTime(250, audioCtx.currentTime + duration);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + duration);

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    noiseSource.start();
    noiseSource.stop(audioCtx.currentTime + duration);
  },

  // Sintetizador de sembradora (clic rítmico metálico + motor suave)
  synthSeeder: function(duration) {
    // Motor muy suave de fondo
    this.synthEngine(45, 5, 0.05, duration, 150);

    // Clics rítmicos periódicos
    const interval = 0.22; // Clic cada 220ms
    const totalClicks = Math.floor(duration / interval);

    for (let i = 0; i < totalClicks; i++) {
      const clickTime = audioCtx.currentTime + (i * interval);
      const clickOsc = audioCtx.createOscillator();
      const clickGain = audioCtx.createGain();

      clickOsc.type = 'triangle';
      clickOsc.frequency.setValueAtTime(1200, clickTime);
      clickOsc.frequency.exponentialRampToValueAtTime(100, clickTime + 0.04);

      clickGain.gain.setValueAtTime(0.06, clickTime);
      clickGain.gain.exponentialRampToValueAtTime(0.001, clickTime + 0.04);

      clickOsc.connect(clickGain);
      clickGain.connect(audioCtx.destination);

      clickOsc.start(clickTime);
      clickOsc.stop(clickTime + 0.05);
    }
  },

  // Sintetizador de remolque (chirrido y ruido de ruedas)
  synthSqueak: function(duration) {
    // Motor lejano tirando del remolque
    this.synthEngine(40, 5, 0.05, duration, 120);

    // Generar un chirrido metálico agudo de eje oscilando
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(2500, audioCtx.currentTime);
    
    // LFO que modula la frecuencia para simular chirrido irregular
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.frequency.setValueAtTime(12, audioCtx.currentTime);
    lfoGain.gain.setValueAtTime(800, audioCtx.currentTime);
    
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, audioCtx.currentTime);
    filter.Q.setValueAtTime(3, audioCtx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    // Vibrar la intensidad
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.02, audioCtx.currentTime + 0.3);
    gain.gain.linearRampToValueAtTime(0.005, audioCtx.currentTime + 0.6);
    gain.gain.linearRampToValueAtTime(0.025, audioCtx.currentTime + 1.0);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.start();
    lfo.start();
    osc.stop(audioCtx.currentTime + duration);
    lfo.stop(audioCtx.currentTime + duration);
  },

  // Sintetizador de arado (tierra rascándose)
  synthScraping: function(duration) {
    // Motor haciendo fuerza (grave y filtrado)
    this.synthEngine(55, 6, 0.25, duration, 180);

    // Ruido rosa/marrón para la tierra
    const bufferSize = audioCtx.sampleRate * duration;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Generación de ruido marrón aproximado
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Ganancia de compensación
    }

    const noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, audioCtx.currentTime);
    // Modulamos la frecuencia para simular piedras o variaciones en la tierra
    filter.frequency.linearRampToValueAtTime(150, audioCtx.currentTime + (duration * 0.5));
    filter.frequency.linearRampToValueAtTime(290, audioCtx.currentTime + duration);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + duration);

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    noiseSource.start();
    noiseSource.stop(audioCtx.currentTime + duration);
  }
};


/* ==========================================================================
   NAVEGACIÓN Y GESTIÓN DE VISTAS (SPA)
   ========================================================================== */

function showScreen(screenId) {
  // Ocultar todas las pantallas
  document.querySelectorAll('.screen').forEach(scr => {
    scr.classList.remove('active');
  });

  // Mostrar la pantalla correspondiente
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
    state.currentScreen = screenId.replace('screen-', '');
  }

  // Mostrar/Ocultar barra de herramientas y flechas
  const header = document.getElementById('global-header');
  const navArrows = document.getElementById('global-nav-arrows');

  if (screenId === 'screen-menu') {
    header.classList.add('hidden');
    navArrows.classList.add('hidden');
    state.phaseIndex = null;
  } else {
    header.classList.remove('hidden');
    // En las fases de juegos (1 y 3) o finales, podemos regular el avance manual para evitar saltos accidentales
    navArrows.classList.remove('hidden');
    updateGlobalHeader();
  }
}

function updateGlobalHeader() {
  const phaseTitle = document.getElementById('phase-title');
  const stepIndicator = document.getElementById('step-indicator');

  stepIndicator.innerHTML = ''; // Limpiar indicadores

  switch(state.phaseIndex) {
    case 0:
      phaseTitle.textContent = "👴 Conoce nuestros orígenes";
      createStepDots(FASE0_GALLERY.length, state.p0SlideIndex);
      break;
    case 1:
      phaseTitle.textContent = "🥖 ¿Con qué se hace esto?";
      createStepDots(FASE1_PRODUCTS.length, state.p1ProductIndex);
      break;
    case 2:
      phaseTitle.textContent = "🌾 El camino del grano";
      createStepDots(FASE2_STEPS.length, state.p2StepIndex);
      break;
    case 3:
      phaseTitle.textContent = "🚜 ¿Qué máquina es?";
      createStepDots(FASE3_MACHINES.length, state.p3MachineIndex);
      break;
    case 4:
      phaseTitle.textContent = "🚜 ¡Todos al campo!";
      createStepDots(FASE4_QUESTIONS.length, state.p4QuestionIndex);
      break;
  }
}

function createStepDots(count, currentIndex) {
  const container = document.getElementById('step-indicator');
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.className = 'step-dot';
    if (i === currentIndex) {
      dot.classList.add('active');
    } else if (i < currentIndex) {
      dot.classList.add('completed');
    }
    container.appendChild(dot);
  }
}

// Inicializar y cargar una fase
function loadPhase(index) {
  state.phaseIndex = index;
  AudioEffects.playClick();
  
  if (index === 0) {
    state.p0SlideIndex = 0;
    showScreen('screen-phase0');
    renderPhase0();
  } else if (index === 1) {
    // Barajar productos para hacerlo interactivo cada vez
    state.p1ProductsList = [...FASE1_PRODUCTS].sort(() => Math.random() - 0.5);
    state.p1ProductIndex = 0;
    state.p1CorrectCount = 0;
    state.p1WaitingNext = false;
    showScreen('screen-phase1');
    renderPhase1();
  } else if (index === 2) {
    state.p2StepIndex = 0;
    showScreen('screen-phase2');
    renderPhase2();
  } else if (index === 3) {
    // Barajar máquinas
    state.p3MachinesList = [...FASE3_MACHINES].sort(() => Math.random() - 0.5);
    state.p3MachineIndex = 0;
    state.p3CelebrationActive = false;
    showScreen('screen-phase3');
    renderPhase3();
  } else if (index === 4) {
    state.p4QuestionIndex = 0;
    state.p4QuestionAnswered = false;
    // Ocultar todos los elementos interactivos del lienzo al iniciar
    document.querySelectorAll('.farm-element').forEach(el => {
      el.classList.remove('active');
    });
    const resetBtn = document.getElementById('quiz-celebration');
    if (resetBtn) resetBtn.classList.add('hidden');
    showScreen('screen-phase4');
    renderPhase4();
  }
}


/* ==========================================================================
   LÓGICA DETALLADA DE CADA FASE
   ========================================================================== */

// --- FASE 0: HISTORIA DEL ABUELO ---
function renderPhase0() {
  const slidesContainer = document.getElementById('gallery-slides');
  const storyText = document.getElementById('p0-story-text');

  slidesContainer.innerHTML = '';
  FASE0_GALLERY.forEach((slide, i) => {
    const isVideo = slide.url.endsWith('.mp4') || slide.url.endsWith('.webm');
    let mediaEl;

    if (isVideo) {
      mediaEl = document.createElement('video');
      mediaEl.src = slide.url;
      mediaEl.autoplay = true;
      mediaEl.loop = true;
      mediaEl.muted = true;
      mediaEl.playsInline = true;
      mediaEl.className = 'slide-video';
    } else {
      mediaEl = document.createElement('img');
      mediaEl.src = slide.url;
      mediaEl.alt = `Historia ${i}`;
      mediaEl.className = 'slide-img';
    }

    if (i === state.p0SlideIndex) {
      mediaEl.classList.add('active');
      if (isVideo) {
        mediaEl.play().catch(err => console.warn("Error playing video:", err));
      }
    }

    // Si el archivo falla, cargamos un fondo de color y texto alternativo
    mediaEl.onerror = function() {
      mediaEl.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = isVideo ? 'slide-video active' : 'slide-img active';
      fallback.style.background = 'linear-gradient(135deg, #FCD12A, #C17A63)';
      fallback.style.display = 'flex';
      fallback.style.alignItems = 'center';
      fallback.style.justifyContent = 'center';
      fallback.style.fontSize = '8rem';
      fallback.innerHTML = i === 0 ? '👴' : i === 1 ? '👧' : i === 2 ? '🌾' : '🥖';
      slidesContainer.appendChild(fallback);
    };

    slidesContainer.appendChild(mediaEl);
  });

  storyText.textContent = FASE0_GALLERY[state.p0SlideIndex].text;
  updateGlobalHeader();
}

function nextPhase0() {
  if (state.p0SlideIndex < FASE0_GALLERY.length - 1) {
    state.p0SlideIndex++;
    renderPhase0();
  } else {
    showToast("¡Historia completada! Vamos a jugar.");
    loadPhase(1); // Saltar automáticamente a fase 1
  }
}

function prevPhase0() {
  if (state.p0SlideIndex > 0) {
    state.p0SlideIndex--;
    renderPhase0();
  } else {
    showScreen('screen-menu');
  }
}


// --- FASE 1: ¿CON QUÉ SE HACE ESTO? ---
function renderPhase1() {
  if (state.p1ProductIndex >= state.p1ProductsList.length) {
    // Juego terminado
    showToast("¡Enhorabuena! Has clasificado todos los alimentos.");
    loadPhase(2);
    return;
  }

  state.p1WaitingNext = false;
  const product = state.p1ProductsList[state.p1ProductIndex];
  
  // Ocultar bocadillo de feedback
  document.getElementById('p1-feedback-bubble').classList.add('hidden');
  
  // Limpiar estilos anteriores de la tarjeta
  const card = document.getElementById('product-card');
  card.className = 'product-card';
  
  // Render producto actual
  document.getElementById('product-icon').textContent = product.emoji;
  document.getElementById('product-name').textContent = product.name;

  // Habilitar clics en recipientes
  document.querySelectorAll('.grain-bucket').forEach(b => {
    b.style.pointerEvents = 'auto';
  });

  updateGlobalHeader();
}

function checkPhase1Answer(chosenGrain) {
  if (state.p1WaitingNext) return;

  const product = state.p1ProductsList[state.p1ProductIndex];
  const card = document.getElementById('product-card');
  const feedbackBubble = document.getElementById('p1-feedback-bubble');
  const feedbackText = document.getElementById('p1-feedback-text');

  // Bloquear clics temporales
  state.p1WaitingNext = true;
  document.querySelectorAll('.grain-bucket').forEach(b => {
    b.style.pointerEvents = 'none';
  });

  if (chosenGrain === product.grain) {
    // ACIERTO
    AudioEffects.playSuccess();
    triggerConfetti();
    card.classList.add('correct-anim');
    feedbackText.textContent = `¡Sí! ${product.text}`;
    feedbackBubble.classList.remove('hidden');

    // Animación de la pila de granos creciendo un poco
    const pile = document.querySelector(`.${chosenGrain}-pile`);
    if (pile) {
      const currentHeight = parseInt(window.getComputedStyle(pile).height) || 60;
      pile.style.height = `${Math.min(currentHeight + 12, 140)}px`;
    }

    // Avanzar automáticamente tras 3.5 segundos para dar tiempo a leer el texto del abuelo
    setTimeout(() => {
      state.p1ProductIndex++;
      renderPhase1();
    }, 3500);

  } else {
    // ERROR
    AudioEffects.playError();
    card.classList.add('wrong-anim');
    
    // Consejos amables del abuelo
    let cerealCorrecto = product.grain.toUpperCase();
    feedbackText.textContent = `¡Casi! Pero no es de ${chosenGrain.toUpperCase()}. El abuelo dice: El/la ${product.name} se elabora con ${cerealCorrecto}. ¡Inténtalo otra vez!`;
    feedbackBubble.classList.remove('hidden');

    // Quitar animación de error para poder repetirla
    setTimeout(() => {
      card.classList.remove('wrong-anim');
      state.p1WaitingNext = false;
      document.querySelectorAll('.grain-bucket').forEach(b => {
        b.style.pointerEvents = 'auto';
      });
    }, 1200);
  }
}

function prevPhase1() {
  if (state.p1ProductIndex > 0) {
    state.p1ProductIndex--;
    renderPhase1();
  } else {
    loadPhase(0);
  }
}


// --- FASE 2: EL CAMINO DEL GRANO ---
function getMediaHTML(src, alt, fallbackSvg) {
  if (!src) return fallbackSvg;
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
  if (isVideo) {
    return `
      <video src="${src}" autoplay loop muted playsinline class="step-video-graphic"></video>
      <div class="step-svg-fallback" style="display: none;">${fallbackSvg}</div>
    `;
  } else {
    return `
      <img src="${src}" alt="${alt}" class="step-image-graphic">
      <div class="step-svg-fallback" style="display: none;">${fallbackSvg}</div>
    `;
  }
}

function renderPhase2() {
  const step = FASE2_STEPS[state.p2StepIndex];
  
  document.getElementById('step-number-text').textContent = `Paso ${state.p2StepIndex + 1} de ${FASE2_STEPS.length}`;
  document.getElementById('step-title').textContent = step.title;
  document.getElementById('step-description').textContent = step.desc;

  const canvas = document.getElementById('step-svg-canvas');
  canvas.innerHTML = getMediaHTML(step.image, step.title, step.svg);
  
  const mediaElement = canvas.querySelector('.step-image-graphic, .step-video-graphic');
  if (mediaElement) {
    mediaElement.onerror = function() {
      mediaElement.style.display = 'none';
      const fallback = canvas.querySelector('.step-svg-fallback');
      if (fallback) fallback.style.display = 'block';
    };
  }

  updateGlobalHeader();
}

function nextPhase2() {
  if (state.p2StepIndex < FASE2_STEPS.length - 1) {
    state.p2StepIndex++;
    renderPhase2();
  } else {
    showToast("¡Hemos visto todo el camino! Ahora, ¿adivinamos las máquinas?");
    loadPhase(3);
  }
}

function prevPhase2() {
  if (state.p2StepIndex > 0) {
    state.p2StepIndex--;
    renderPhase2();
  } else {
    loadPhase(1);
  }
}


// --- FASE 3: ¿QUÉ MÁQUINA ES? ---
function renderPhase3() {
  if (state.p3MachineIndex >= state.p3MachinesList.length) {
    showToast("¡Eres un experto en máquinas agrícolas!");
    loadPhase(4);
    return;
  }

  state.p3CelebrationActive = false;
  document.getElementById('machine-celebration').classList.add('hidden');

  const correctMachine = state.p3MachinesList[state.p3MachineIndex];

  // Generar dos distractores incorrectos
  const distractors = FASE3_MACHINES.filter(m => m.name !== correctMachine.name)
                                    .sort(() => Math.random() - 0.5)
                                    .slice(0, 2);

  // Mezclar opciones
  const options = [correctMachine, ...distractors].sort(() => Math.random() - 0.5);

  // Renderizar las 3 tarjetas de opciones
  options.forEach((opt, idx) => {
    const btn = document.getElementById(`machine-opt-${idx + 1}`);
    const nameText = document.getElementById(`machine-opt-${idx + 1}-name`);
    const iconSpan = document.getElementById(`machine-opt-${idx + 1}-icon`);

    btn.className = 'machine-card-btn';
    btn.dataset.machineName = opt.name;
    nameText.textContent = opt.name;
    iconSpan.textContent = opt.icon;
  });

  // Habilitar pulsación de sonido
  const soundBtn = document.getElementById('btn-play-sound');
  soundBtn.style.pointerEvents = 'auto';
  soundBtn.classList.add('pulse-animation');

  updateGlobalHeader();
  
  // Autoreproducción del sonido inicial (opcional, ayuda a captar atención)
  setTimeout(() => {
    playCurrentMachineSound();
  }, 500);
}

function playCurrentMachineSound() {
  if (state.p3CelebrationActive) return;
  const correctMachine = state.p3MachinesList[state.p3MachineIndex];
  
  // Intenta reproducir el sonido sintetizado
  AudioEffects.playMachineSound(correctMachine.soundName);
}

function checkPhase3Answer(button, chosenName) {
  if (state.p3CelebrationActive) return;

  const correctMachine = state.p3MachinesList[state.p3MachineIndex];

  if (chosenName === correctMachine.name) {
    // ACIERTO GIGANTE
    state.p3CelebrationActive = true;
    AudioEffects.playSuccess();
    triggerConfetti();
    button.classList.add('correct');

    // Mostrar pantalla de celebración gigante
    const celebrationScreen = document.getElementById('machine-celebration');
    const animArea = document.getElementById('celebration-animation-area');
    const title = document.getElementById('celebration-machine-title');

    animArea.innerHTML = correctMachine.svg;
    title.textContent = `¡SÍ! ¡ES EL/LA ${correctMachine.name.toUpperCase()}!`;
    celebrationScreen.classList.remove('hidden');

    // Volver a reproducir el sonido para asociar bien el acierto con el ruido real
    setTimeout(() => {
      AudioEffects.playMachineSound(correctMachine.soundName);
    }, 600);

  } else {
    // ERROR
    AudioEffects.playError();
    button.classList.add('wrong');
    showToast("¡Vuelve a escuchar el ruido!");

    setTimeout(() => {
      button.classList.remove('wrong');
    }, 1200);
  }
}

function nextPhase3() {
  state.p3MachineIndex++;
  renderPhase3();
}

function prevPhase3() {
  if (state.p3MachineIndex > 0) {
    state.p3MachineIndex--;
    renderPhase3();
  } else {
    loadPhase(2);
  }
}


// --- FASE 4: ¡TODOS AL CAMPO! ---
function renderPhase4() {
  if (state.p4QuestionIndex >= FASE4_QUESTIONS.length) {
    const celScreen = document.getElementById('quiz-celebration');
    if (celScreen) celScreen.classList.remove('hidden');
    triggerConfetti();
    return;
  }

  const qData = FASE4_QUESTIONS[state.p4QuestionIndex];

  // Renderizar textos
  document.getElementById('quiz-question-number').textContent = `Pregunta ${state.p4QuestionIndex + 1} de ${FASE4_QUESTIONS.length}`;
  document.getElementById('quiz-question-text').textContent = qData.question;

  // Renderizar las 3 opciones de botones
  qData.choices.forEach((choice, idx) => {
    const ids = ['quiz-opt-a', 'quiz-opt-b', 'quiz-opt-c'];
    const btn = document.getElementById(ids[idx]);
    const emojiSpan = document.getElementById(ids[idx] + '-emoji');
    const textSpan = document.getElementById(ids[idx] + '-text');

    btn.className = 'quiz-choice-btn';
    emojiSpan.textContent = choice.emoji;
    textSpan.textContent = choice.text;
  });

  // Habilitar clics
  document.querySelectorAll('.quiz-choice-btn').forEach(btn => {
    btn.style.pointerEvents = 'auto';
  });

  updateGlobalHeader();
}

function checkPhase4Answer(button, optionIndex) {
  if (state.p4QuestionAnswered) return; // Ya acertaron esta pregunta

  const qData = FASE4_QUESTIONS[state.p4QuestionIndex];
  const choice = qData.choices[optionIndex];

  if (choice.isCorrect) {
    // ACIERTO
    state.p4QuestionAnswered = true;
    AudioEffects.playSuccess();
    triggerConfetti();
    button.classList.add('correct');

    // Desbloquear elemento correspondiente en el campo con animación
    const element = document.getElementById(qData.elementId);
    if (element) {
      element.classList.add('active');
    }

    // Bloquear otros botones
    document.querySelectorAll('.quiz-choice-btn').forEach(btn => {
      btn.style.pointerEvents = 'none';
    });

    // Pequeño aviso toast para que sepan que pueden avanzar
    showToast("¡Respuesta correcta! Pulsa Barra Espaciadora o Siguiente para continuar.");

  } else {
    // ERROR
    AudioEffects.playError();
    button.classList.add('wrong');
    showToast("¡Vuelve a intentarlo!");

    setTimeout(() => {
      button.classList.remove('wrong');
    }, 1200);
  }
}

function nextPhase4() {
  if (!state.p4QuestionAnswered) {
    showToast("¡Debéis responder correctamente antes de avanzar!");
    return;
  }

  if (state.p4QuestionIndex < FASE4_QUESTIONS.length - 1) {
    state.p4QuestionIndex++;
    state.p4QuestionAnswered = false;
    renderPhase4();
  } else {
    // Fin de preguntas: Celebración final
    AudioEffects.playSuccess();
    triggerConfetti();
    // Lanzar confeti periódico en bucle
    let count = 0;
    const interval = setInterval(() => {
      if (count++ > 5) clearInterval(interval);
      triggerConfetti();
    }, 1000);

    const celScreen = document.getElementById('quiz-celebration');
    if (celScreen) celScreen.classList.remove('hidden');
  }
}

function prevPhase4() {
  if (state.p4QuestionIndex > 0) {
    state.p4QuestionIndex--;
    // Al volver atrás, asumimos que ya estaba contestada correctamente
    state.p4QuestionAnswered = true;
    renderPhase4();
  } else {
    loadPhase(3);
  }
}


/* ==========================================================================
   NAVEGACIÓN GLOBAL POR TECLADO Y BOTONES DE FLECHA
   ========================================================================== */

function goNextGlobal() {
  if (state.currentScreen === 'menu') return;

  switch(state.phaseIndex) {
    case 0:
      nextPhase0();
      break;
    case 1:
      state.p1ProductIndex++;
      renderPhase1();
      break;
    case 2:
      nextPhase2();
      break;
    case 3:
      nextPhase3();
      break;
    case 4:
      nextPhase4();
      break;
  }
}

function goPrevGlobal() {
  if (state.currentScreen === 'menu') return;

  switch(state.phaseIndex) {
    case 0:
      prevPhase0();
      break;
    case 1:
      prevPhase1();
      break;
    case 2:
      prevPhase2();
      break;
    case 3:
      prevPhase3();
      break;
    case 4:
      prevPhase4();
      break;
  }
}


/* ==========================================================================
   ELEMENTOS DE AYUDA (TOAST MESSAGE)
   ========================================================================== */

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast-message');
  toast.textContent = message;
  toast.classList.remove('hidden');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

// Emisor de confeti dinámico en el DOM
function triggerConfetti() {
  const duration = 2.5 * 1000; // 2.5 segundos de emisión
  const animationEnd = Date.now() + duration;
  const colors = ['#FCD12A', '#F47A22', '#68BB59', '#4A90E2', '#E74C3C', '#FFF'];

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.width = Math.random() * 8 + 8 + 'px';
    confetti.style.height = Math.random() * 12 + 8 + 'px';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.opacity = Math.random() * 0.5 + 0.5;

    const speed = Math.random() * 2 + 2; // entre 2 y 4 segundos de caída
    confetti.style.animation = `confetti-fall ${speed}s linear forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, speed * 1000);
  }, 25);
}


/* ==========================================================================
   ASIGNACIÓN DE EVENTOS Y ARRANQUE DE APLICACIÓN
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Eventos Menú Principal ---
  document.getElementById('btn-menu-p0').addEventListener('click', () => loadPhase(0));
  document.getElementById('btn-menu-p1').addEventListener('click', () => loadPhase(1));
  document.getElementById('btn-menu-p2').addEventListener('click', () => loadPhase(2));
  document.getElementById('btn-menu-p3').addEventListener('click', () => loadPhase(3));
  document.getElementById('btn-menu-p4').addEventListener('click', () => loadPhase(4));

  // --- Evento Botón Home ---
  document.getElementById('btn-home').addEventListener('click', () => {
    AudioEffects.playClick();
    showScreen('screen-menu');
  });

  // --- Eventos Fase 0 (Galería) ---
  document.getElementById('btn-gallery-prev').addEventListener('click', (e) => {
    e.stopPropagation();
    AudioEffects.playClick();
    prevPhase0();
  });
  document.getElementById('btn-gallery-next').addEventListener('click', (e) => {
    e.stopPropagation();
    AudioEffects.playClick();
    nextPhase0();
  });

  // --- Eventos Fase 1 (Cubos de Grano) ---
  document.querySelectorAll('.grain-bucket').forEach(bucket => {
    bucket.addEventListener('click', () => {
      const chosenGrain = bucket.dataset.grain;
      checkPhase1Answer(chosenGrain);
    });
  });

  // --- Eventos Fase 3 (Adivinar Máquina) ---
  document.getElementById('btn-play-sound').addEventListener('click', () => {
    playCurrentMachineSound();
  });

  document.querySelectorAll('.machine-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.machineName;
      checkPhase3Answer(btn, name);
    });
  });

  document.getElementById('btn-next-machine').addEventListener('click', () => {
    AudioEffects.playClick();
    nextPhase3();
  });

  // --- Eventos Fase 4 (Cuestionario Construir Campo) ---
  const optA = document.getElementById('quiz-opt-a');
  if (optA) {
    optA.addEventListener('click', () => {
      checkPhase4Answer(optA, 0);
    });
  }
  const optB = document.getElementById('quiz-opt-b');
  if (optB) {
    optB.addEventListener('click', () => {
      checkPhase4Answer(optB, 1);
    });
  }
  const optC = document.getElementById('quiz-opt-c');
  if (optC) {
    optC.addEventListener('click', () => {
      checkPhase4Answer(optC, 2);
    });
  }
  const resetQuizBtn = document.getElementById('btn-quiz-reset');
  if (resetQuizBtn) {
    resetQuizBtn.addEventListener('click', () => {
      AudioEffects.playClick();
      showScreen('screen-menu');
    });
  }

  // --- Eventos Flechas Globales ---
  document.getElementById('btn-prev').addEventListener('click', () => {
    AudioEffects.playClick();
    goPrevGlobal();
  });
  document.getElementById('btn-next').addEventListener('click', () => {
    AudioEffects.playClick();
    goNextGlobal();
  });

  // --- Eventos Teclado Global (Avanzar/Retroceder) ---
  window.addEventListener('keydown', (e) => {
    if (state.currentScreen === 'menu') return;

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      goNextGlobal();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrevGlobal();
    }
  });

  // Interacción inicial de clicks para activar audio en dispositivos móviles o navegadores
  document.addEventListener('click', () => {
    initAudioContext();
  }, { once: true });

});
