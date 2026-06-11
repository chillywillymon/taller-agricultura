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

// Alimentos y productos de la FASE 4 (Juego de clasificar - 2 por cereal con ilustraciones reales/dibujos)
const FASE4_PRODUCTS = [
  { name: 'Pan de trigo', image: 'assets/images/pan_trigo.png', grain: 'trigo', text: '¡El trigo se muele para hacer harina y hornear ricas barras de pan!' },
  { name: 'Pasta y espaguetis', image: 'assets/images/pasta_trigo.png', grain: 'trigo', text: '¡Los espaguetis y macarrones deliciosos se hacen con sémola de trigo!' },
  { name: 'Pan de centeno', image: 'assets/images/pan_centeno.png', grain: 'centeno', text: '¡El centeno se utiliza para hacer panes oscuros y rústicos muy sabrosos!' },
  { name: 'Cama para animales', image: 'assets/images/paja_centeno.png', grain: 'centeno', text: '¡La paja de centeno es súper resistente y sirve para hacer camas calentitas para los animales!' },
  { name: 'Copos de avena', image: 'assets/images/copos_avena.png', grain: 'avena', text: '¡Los copos de avena te dan súper fuerza y energía en tus desayunos!' },
  { name: 'Bebida de avena', image: 'assets/images/leche_avena.png', grain: 'avena', text: '¡La avena también se utiliza para hacer una bebida vegetal dulce y muy rica!' },
  { name: 'Cerveza', image: 'assets/images/cerveza_cebada.png', grain: 'cebada', text: '¡La cebada es el ingrediente principal para elaborar cerveza!' },
  { name: 'Pienso para animales', image: 'assets/images/pienso_cebada.png', grain: 'cebada', text: '¡La cebada es un cereal excelente y muy nutritivo para alimentar a los animales!' }
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
    image: 'assets/images/paso_10.jpeg',
    title: '10. Hacer harina y pan',
    desc: 'Con el grano del cereal hacemos harina muy fina, ¡y con la harina hacemos pan, galletas o espaguetis!',
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
    soundName: 'tractor_sound',
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
    soundName: 'cosechadora_sound',
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
    name: 'Camión',
    icon: '🚛',
    soundName: 'camion_sound',
    svg: `<svg viewBox="0 0 400 250" width="100%" height="100%">
      <rect width="400" height="180" fill="#A3D8F4" rx="20"/>
      <rect y="160" width="400" height="90" fill="#8D5B4C" rx="20"/>
      <g class="animate-chug">
        <!-- Cabina del camión -->
        <rect x="240" y="75" width="70" height="85" fill="#E74C3C" rx="10" stroke="#FFF" stroke-width="3"/>
        <rect x="265" y="85" width="35" height="30" fill="#FFF" rx="5"/>
        <rect x="240" y="115" width="15" height="35" fill="#444"/>
        <!-- Remolque tolva de grano -->
        <rect x="70" y="65" width="160" height="95" fill="#4A90E2" rx="8" stroke="#FFF" stroke-width="3"/>
        <path d="M 70 65 L 230 65 L 230 75 L 70 75 Z" fill="#2B6CB0"/>
        <!-- Ruedas -->
        <circle cx="110" cy="165" r="25" fill="#333" stroke="#FFF" stroke-width="4"/>
        <circle cx="170" cy="165" r="25" fill="#333" stroke="#FFF" stroke-width="4"/>
        <circle cx="275" cy="165" r="25" fill="#333" stroke="#FFF" stroke-width="4"/>
        <!-- Tubo de escape y humo -->
        <line x1="235" y1="75" x2="235" y2="30" stroke="#555" stroke-width="6" stroke-linecap="round"/>
        <circle cx="235" cy="25" r="6" fill="#DDD" class="puff-smoke"/>
        <circle cx="240" cy="12" r="9" fill="#EEE" class="puff-smoke" style="animation-delay: 0.3s;"/>
      </g>
    </svg>`
  }
];

// Información de los cereales para la FASE 1
const CEREALES_INFO = {
  trigo: {
    name: 'Trigo',
    desc: '¡Hola, soy el Trigo! Soy el cereal más famoso. Mis espigas son doradas y con mis granos hacemos harina blanca para preparar pan de molde, galletas, bizcochos y espaguetis.',
    planta: 'assets/images/trigo_planta.png',
    grano: 'assets/images/trigo_grano.png',
    svg: `<svg viewBox="0 0 120 150" class="cereal-char-svg">
      <path d="M 60 20 C 85 45, 95 90, 85 120 C 75 140, 45 140, 35 120 C 25 90, 35 45, 60 20 Z" fill="#F9D342" stroke="#4E3629" stroke-width="4"/>
      <path d="M 60 20 Q 60 5 65 0 M 60 20 Q 55 10 50 5 M 60 20 Q 65 10 70 5" stroke="#4E3629" stroke-width="3" fill="none"/>
      <circle cx="48" cy="75" r="8" fill="#FFF" stroke="#4E3629" stroke-width="3"/>
      <circle cx="48" cy="75" r="3" fill="#000"/>
      <circle cx="72" cy="75" r="8" fill="#FFF" stroke="#4E3629" stroke-width="3"/>
      <circle cx="72" cy="75" r="3" fill="#000"/>
      <circle cx="46" cy="73" r="2" fill="#FFF"/>
      <circle cx="70" cy="73" r="2" fill="#FFF"/>
      <circle cx="40" cy="85" r="5" fill="#FF8E8E" opacity="0.8"/>
      <circle cx="80" cy="85" r="5" fill="#FF8E8E" opacity="0.8"/>
      <path d="M 50 88 Q 60 102 70 88" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 32 90 Q 15 85 20 75" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 88 90 Q 105 85 100 75" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 45 133 Q 45 145 40 145" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 75 133 Q 75 145 80 145" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  centeno: {
    name: 'Centeno',
    desc: '¡Hola, soy el Centeno! Soy muy fuerte y resisto muy bien el frío. Mis espigas son alargadas y con mis granos se hace un pan oscuro muy rico y paja muy fuerte para las camas de los animales.',
    planta: 'assets/images/centeno_planta.png',
    grano: 'assets/images/centeno_grano.png',
    svg: `<svg viewBox="0 0 120 150" class="cereal-char-svg">
      <path d="M 60 15 C 80 40, 85 95, 80 125 C 75 142, 45 142, 40 125 C 35 95, 40 40, 60 15 Z" fill="#C19A6B" stroke="#4E3629" stroke-width="4"/>
      <path d="M 60 15 Q 40 -5 50 -10 Q 60 -12 65 -2 Z" fill="#76C043" stroke="#4E3629" stroke-width="3"/>
      <circle cx="48" cy="70" r="8" fill="#FFF" stroke="#4E3629" stroke-width="3"/>
      <circle cx="48" cy="70" r="3" fill="#000"/>
      <circle cx="72" cy="70" r="8" fill="#FFF" stroke="#4E3629" stroke-width="3"/>
      <circle cx="72" cy="70" r="3" fill="#000"/>
      <circle cx="46" cy="68" r="2" fill="#FFF"/>
      <circle cx="70" cy="68" r="2" fill="#FFF"/>
      <circle cx="40" cy="80" r="5" fill="#FF8E8E" opacity="0.8"/>
      <circle cx="80" cy="80" r="5" fill="#FF8E8E" opacity="0.8"/>
      <path d="M 52 82 Q 60 92 68 82 Z" fill="#E74C3C" stroke="#4E3629" stroke-width="3"/>
      <path d="M 36 90 Q 20 85 22 75" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 84 90 Q 100 85 98 75" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 46 135 Q 46 146 41 146" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 74 135 Q 74 146 79 146" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  avena: {
    name: 'Avena',
    desc: '¡Hola, soy la Avena! Mis granos crecen en ramitas colgantes muy bonitas. Me usan para hacer copos de avena que dan súper fuerza en el desayuno, bebidas dulces y jabones muy suaves.',
    planta: 'assets/images/avena_planta.png',
    grano: 'assets/images/avena_grano.png',
    svg: `<svg viewBox="0 0 120 150" class="cereal-char-svg">
      <path d="M 60 25 C 85 45, 90 90, 80 120 C 72 138, 48 138, 40 120 C 30 90, 35 45, 60 25 Z" fill="#F5F0E6" stroke="#4E3629" stroke-width="4"/>
      <path d="M 40 30 Q 30 20 40 15 Q 50 20 40 30 Z M 50 30 Q 60 20 50 15 Q 40 20 50 30 Z" fill="#F47A22" stroke="#4E3629" stroke-width="2"/>
      <circle cx="45" cy="22" r="4" fill="#E74C3C"/>
      <circle cx="48" cy="72" r="8" fill="#FFF" stroke="#4E3629" stroke-width="3"/>
      <circle cx="48" cy="72" r="3" fill="#000"/>
      <path d="M 40 66 L 44 68 M 38 72 L 42 73" stroke="#4E3629" stroke-width="2.5"/>
      <circle cx="72" cy="72" r="8" fill="#FFF" stroke="#4E3629" stroke-width="3"/>
      <circle cx="72" cy="72" r="3" fill="#000"/>
      <path d="M 80 66 L 76 68 M 82 72 L 78 73" stroke="#4E3629" stroke-width="2.5"/>
      <circle cx="46" cy="70" r="2" fill="#FFF"/>
      <circle cx="70" cy="70" r="2" fill="#FFF"/>
      <circle cx="40" cy="82" r="5" fill="#FF8E8E" opacity="0.8"/>
      <circle cx="80" cy="82" r="5" fill="#FF8E8E" opacity="0.8"/>
      <path d="M 52 84 Q 60 94 68 84" stroke="#4E3629" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 34 88 Q 18 95 24 105" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 86 88 Q 102 95 96 105" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 46 132 Q 46 144 41 144" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 74 132 Q 74 144 79 144" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  cebada: {
    name: 'Cebada',
    desc: '¡Hola, soy la Cebada! Mis espigas tienen unas barbas muy largas y finas. Sirvo para hacer bebidas ricas como la malta y la cerveza, y también soy un alimento estupendo para las vacas y ovejas.',
    planta: 'assets/images/cebada_planta.png',
    grano: 'assets/images/cebada_grano.png',
    svg: `<svg viewBox="0 0 120 150" class="cereal-char-svg">
      <path d="M 60 20 C 85 45, 95 90, 85 120 C 75 140, 45 140, 35 120 C 25 90, 35 45, 60 20 Z" fill="#E5C158" stroke="#4E3629" stroke-width="4"/>
      <path d="M 60 20 L 60 -15 M 55 22 L 40 -10 M 65 22 L 80 -10 M 50 30 L 25 5 M 70 30 L 95 5" stroke="#4E3629" stroke-width="3" fill="none"/>
      <circle cx="48" cy="75" r="8" fill="#FFF" stroke="#4E3629" stroke-width="3"/>
      <circle cx="48" cy="75" r="3" fill="#000"/>
      <circle cx="72" cy="75" r="8" fill="#FFF" stroke="#4E3629" stroke-width="3"/>
      <circle cx="72" cy="75" r="3" fill="#000"/>
      <circle cx="46" cy="73" r="2" fill="#FFF"/>
      <circle cx="70" cy="73" r="2" fill="#FFF"/>
      <circle cx="40" cy="85" r="5" fill="#FF8E8E" opacity="0.8"/>
      <circle cx="80" cy="85" r="5" fill="#FF8E8E" opacity="0.8"/>
      <path d="M 50 88 Q 60 102 70 88" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 32 90 Q 15 85 20 75" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 88 90 Q 105 85 100 75" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 45 133 Q 45 145 40 145" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 75 133 Q 75 145 80 145" stroke="#4E3629" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`
  }
};


/* ==========================================================================
   ESTADO GLOBAL DE LA APLICACIÓN
   ========================================================================== */

let state = {
  currentScreen: 'menu', // 'menu', 'phase0', 'phase1', 'phase2', 'phase3', 'phase4'
  phaseIndex: null,      // 0, 1, 2, 3, 4
  
  // Fase 0 state
  p0SlideIndex: 0,

  // Fase 1 state (Presentando a nuestros amigos)
  p1CerealIndex: 0,
  p1CerealsList: ['trigo', 'centeno', 'avena', 'cebada'],

  // Fase 2 state
  p2StepIndex: 0,

  // Fase 3 state
  p3MachineIndex: 0,
  p3MachinesList: [],
  p3SelectedAnswer: null,
  p3CelebrationActive: false,

  // Fase 4 state (¿Con qué se hace esto?)
  p4ProductIndex: 0,
  p4ProductsList: [],
  p4CorrectCount: 0,
  p4WaitingNext: false
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
  currentAudio: null,
  audioTimeout: null,

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

    // Detener cualquier reproducción en curso
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
      } catch (e) {}
      this.currentAudio = null;
    }
    if (this.audioTimeout) {
      clearTimeout(this.audioTimeout);
      this.audioTimeout = null;
    }

    // Intentar reproducir archivo de audio real (.mp3) si existe
    const audioPath = `assets/sounds/${soundName}.mp3`;
    const audio = new Audio(audioPath);
    this.currentAudio = audio;
    
    audio.play().then(() => {
      console.log("Sonido real reproducido con éxito:", audioPath);
      // Iniciar el fade out a los 3 segundos, deteniendo por completo a los 3.5 segundos
      this.audioTimeout = setTimeout(() => {
        let startVolume = audio.volume;
        let fadeInterval = setInterval(() => {
          if (audio.volume > 0.05) {
            audio.volume -= 0.05;
          } else {
            clearInterval(fadeInterval);
            audio.pause();
            audio.currentTime = 0;
            audio.volume = startVolume; // restaurar
          }
        }, 50); // fade out de 500ms
      }, 3000);
    }).catch(err => {
      console.warn("No se pudo reproducir el archivo .mp3 real. Usando sintetizador:", err);
      // Fallback al sintetizador Web Audio API
      switch(soundName) {
        case 'tractor_sound':
          this.synthEngine(50, 6.5, 0.18, 3.5, 220);
          break;
        case 'cosechadora_sound':
          this.synthHarvester(3.5);
          break;
        case 'camion_sound':
          this.synthEngine(65, 5.0, 0.15, 3.5, 180);
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
  // Detener sonidos de maquinaria en reproducción al cambiar de pantalla
  if (AudioEffects.currentAudio) {
    try {
      AudioEffects.currentAudio.pause();
    } catch(e) {}
    AudioEffects.currentAudio = null;
  }
  if (AudioEffects.audioTimeout) {
    clearTimeout(AudioEffects.audioTimeout);
    AudioEffects.audioTimeout = null;
  }

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
      phaseTitle.textContent = "🌱 Presentando a nuestros amigos";
      createStepDots(state.p1CerealsList.length, state.p1CerealIndex);
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
      phaseTitle.textContent = "🥖 ¿Con qué se hace esto?";
      createStepDots(state.p4ProductsList.length, state.p4ProductIndex);
      break;
    case 5:
      phaseTitle.textContent = "🎨 Taller de arte";
      createStepDots(1, 0);
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
    state.p1CerealIndex = 0;
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
    // Barajar productos para hacerlo interactivo cada vez
    state.p4ProductsList = [...FASE4_PRODUCTS].sort(() => Math.random() - 0.5);
    state.p4ProductIndex = 0;
    state.p4CorrectCount = 0;
    state.p4WaitingNext = false;

    const celScreen = document.getElementById('quiz-celebration');
    if (celScreen) celScreen.classList.add('hidden');

    showScreen('screen-phase4');
    renderPhase4();
  } else if (index === 5) {
    showScreen('screen-activity');
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
    showToast("¡Historia completada!");
    showScreen('screen-menu');
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


// --- FASE 1: PRESENTANDO A NUESTROS AMIGOS ---
function renderPhase1() {
  const cerealKey = state.p1CerealsList[state.p1CerealIndex];
  const cereal = CEREALES_INFO[cerealKey];

  // Activar la pestaña correcta
  document.querySelectorAll('.cereal-tab-btn').forEach(btn => {
    if (btn.dataset.cereal === cerealKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Actualizar el avatar SVG y la descripción
  document.getElementById('cereal-detail-avatar').innerHTML = cereal.svg;
  document.getElementById('cereal-detail-desc').textContent = cereal.desc;

  updateGlobalHeader();
}

function nextPhase1() {
  if (state.p1CerealIndex < state.p1CerealsList.length - 1) {
    state.p1CerealIndex++;
    renderPhase1();
  } else {
    showToast("¡Hemos conocido a todos nuestros amigos!");
    showScreen('screen-menu');
  }
}

function prevPhase1() {
  if (state.p1CerealIndex > 0) {
    state.p1CerealIndex--;
    renderPhase1();
  } else {
    loadPhase(0);
  }
}


// --- FASE 2: EL CAMINO DEL GRANO ---
function getMediaHTML(src, alt, fallbackSvg, useContain = false) {
  if (!src) return fallbackSvg;
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
  if (isVideo) {
    return `
      <video src="${src}" autoplay loop muted playsinline class="step-video-graphic"></video>
      <div class="step-svg-fallback" style="display: none;">${fallbackSvg}</div>
    `;
  } else {
    const extraClass = useContain ? ' contain' : '';
    return `
      <img src="${src}" alt="${alt}" class="step-image-graphic${extraClass}">
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
  // Usamos ajuste 'contain' en paso 6 (índice 5) y paso 10 (índice 9) para no cortar las caras
  const useContain = (state.p2StepIndex === 5 || state.p2StepIndex === 9);
  canvas.innerHTML = getMediaHTML(step.image, step.title, step.svg, useContain);
  
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
    showToast("¡Hemos visto todo el camino!");
    showScreen('screen-menu');
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
    showScreen('screen-menu');
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


// --- FASE 4: ¿CON QUÉ SE HACE ESTO? ---
function renderPhase4() {
  if (state.p4ProductIndex >= state.p4ProductsList.length) {
    // Juego terminado - mostrar pantalla de celebración final
    const celScreen = document.getElementById('quiz-celebration');
    if (celScreen) celScreen.classList.remove('hidden');
    
    AudioEffects.playSuccess();
    triggerConfetti();
    
    let count = 0;
    const interval = setInterval(() => {
      if (count++ > 5) clearInterval(interval);
      triggerConfetti();
    }, 1000);
    
    return;
  }

  state.p4WaitingNext = false;
  const product = state.p4ProductsList[state.p4ProductIndex];
  
  // Ocultar bocadillo de feedback
  document.getElementById('p4-feedback-bubble').classList.add('hidden');
  
  // Limpiar estilos anteriores de la tarjeta
  const card = document.getElementById('product-card');
  card.className = 'product-card';
  
  // Render producto actual
  const imgEl = document.getElementById('product-img');
  imgEl.src = product.image;
  imgEl.alt = product.name;
  document.getElementById('product-name').textContent = product.name;

  // Habilitar clics en recipientes
  document.querySelectorAll('.grain-bucket').forEach(b => {
    b.style.pointerEvents = 'auto';
  });

  updateGlobalHeader();
}

function checkPhase4Answer(chosenGrain) {
  if (state.p4WaitingNext) return;

  const product = state.p4ProductsList[state.p4ProductIndex];
  const card = document.getElementById('product-card');
  const feedbackBubble = document.getElementById('p4-feedback-bubble');
  const feedbackText = document.getElementById('p4-feedback-text');

  // Bloquear clics temporales
  state.p4WaitingNext = true;
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

    // Avanzar automáticamente tras 3.5 segundos para dar tiempo a leer el texto del abuelo
    setTimeout(() => {
      state.p4ProductIndex++;
      renderPhase4();
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
      state.p4WaitingNext = false;
      document.querySelectorAll('.grain-bucket').forEach(b => {
        b.style.pointerEvents = 'auto';
      });
    }, 1200);
  }
}

function nextPhase4() {
  if (state.p4ProductIndex < state.p4ProductsList.length - 1) {
    state.p4ProductIndex++;
    renderPhase4();
  } else {
    state.p4ProductIndex = state.p4ProductsList.length;
    renderPhase4();
  }
}

function prevPhase4() {
  if (state.p4ProductIndex > 0) {
    state.p4ProductIndex--;
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
      nextPhase1();
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
    case 5:
      showScreen('screen-menu');
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
    case 5:
      loadPhase(4);
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
  document.getElementById('btn-menu-activity').addEventListener('click', () => loadPhase(5));

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

  // --- Eventos Fase 1 (Presentando a nuestros amigos) ---
  document.querySelectorAll('.cereal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cerealName = btn.dataset.cereal;
      const index = state.p1CerealsList.indexOf(cerealName);
      if (index !== -1) {
        state.p1CerealIndex = index;
        AudioEffects.playClick();
        renderPhase1();
      }
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

  // --- Eventos Fase 4 (Cubos de Grano) ---
  document.querySelectorAll('.grain-bucket').forEach(bucket => {
    bucket.addEventListener('click', () => {
      const chosenGrain = bucket.dataset.grain;
      checkPhase4Answer(chosenGrain);
    });
  });

  const resetQuizBtn = document.getElementById('btn-quiz-reset');
  if (resetQuizBtn) {
    resetQuizBtn.addEventListener('click', () => {
      AudioEffects.playClick();
      showScreen('screen-menu');
    });
  }

  const quizActivityBtn = document.getElementById('btn-quiz-activity');
  if (quizActivityBtn) {
    quizActivityBtn.addEventListener('click', () => {
      AudioEffects.playClick();
      loadPhase(5);
    });
  }

  const resetActivityBtn = document.getElementById('btn-activity-home');
  if (resetActivityBtn) {
    resetActivityBtn.addEventListener('click', () => {
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
