export const finishes = [
  {
    id: "castagno-bianco",
    name: "Castagno Bianco",
    type: "scratch-horiz",
    color: "#e8e5df",
    bgPattern: "linear-gradient(90deg, #eae7e1 25%, #dfdcd6 25%, #dfdcd6 50%, #eae7e1 50%, #eae7e1 75%, #dfdcd6 75%)",
    description: "Finitura scratch materica a venatura orizzontale, tonalità bianca calda."
  },
  {
    id: "coffee",
    name: "Coffee",
    type: "scratch-horiz",
    color: "#4a3c31",
    bgPattern: "linear-gradient(90deg, #4f4136 25%, #42352b 25%, #42352b 50%, #4f4136 50%, #4f4136 75%, #42352b 75%)",
    description: "Tonalità wengé/caffè scuro con venature orizzontali in rilievo."
  },
  {
    id: "rovere-spazzolato",
    name: "Rovere Spazzolato",
    type: "scratch-horiz",
    color: "#cbbb9f",
    bgPattern: "linear-gradient(90deg, #cfc0a4 25%, #c2b295 25%, #c2b295 50%, #cfc0a4 50%, #cfc0a4 75%, #c2b295 75%)",
    description: "Effetto legno spazzolato con venature orizzontali calde e naturali."
  },
  {
    id: "noce-canaletto",
    name: "Noce Canaletto",
    type: "scratch-horiz",
    color: "#785f4b",
    bgPattern: "linear-gradient(90deg, #7d6450 25%, #715844 25%, #715844 50%, #7d6450 50%, #7d6450 75%, #715844 75%)",
    description: "Legno noce canaletto con venature orizzontali classiche ed eleganti."
  },
  {
    id: "bianco-frassino",
    name: "Bianco Frassino",
    type: "scratch-horiz",
    color: "#f5f5f5",
    bgPattern: "linear-gradient(90deg, #f7f7f7 25%, #efefef 25%, #efefef 50%, #f7f7f7 50%, #f7f7f7 75%, #efefef 75%)",
    description: "Effetto legno frassino sbiancato a venatura orizzontale."
  },
  {
    id: "palissandro-grigio",
    name: "Palissandro Grigio",
    type: "scratch-horiz",
    color: "#8e8d89",
    bgPattern: "linear-gradient(90deg, #93928e 25%, #888783 25%, #888783 50%, #93928e 50%, #93928e 75%, #888783 75%)",
    description: "Trama grigio desaturato con venature orizzontali stile contemporaneo."
  },
  {
    id: "rovere-tranche",
    name: "Rovere Tranché",
    type: "scratch-vert",
    color: "#baac98",
    bgPattern: "linear-gradient(0deg, #bfaa95 25%, #b4a08b 25%, #b4a08b 50%, #bfaa95 50%, #bfaa95 75%, #b4a08b 75%)",
    description: "Effetto taglio sega materico con venature verticali."
  },
  {
    id: "bianco-opaco",
    name: "Bianco Opaco",
    type: "opaco",
    color: "#ffffff",
    bgPattern: "#ffffff",
    description: "Laccatura liscia bianco puro opaco, per ambienti minimalisti."
  },
  {
    id: "avorio-opaco",
    name: "Avorio Opaco",
    type: "opaco",
    color: "#fdf6e6",
    bgPattern: "#fdf6e6",
    description: "Laccatura liscia avorio caldo opaco."
  },
  {
    id: "noce-nazionale",
    name: "Noce Nazionale",
    type: "opaco",
    color: "#5c4033",
    bgPattern: "linear-gradient(0deg, #614538 25%, #563b2e 25%, #563b2e 50%, #614538 50%, #614538 75%, #563b2e 75%)",
    description: "Noce nazionale classico liscio con venature verticali."
  },
  {
    id: "ciliegio",
    name: "Ciliegio",
    type: "opaco",
    color: "#7b3f00",
    bgPattern: "linear-gradient(0deg, #814405 25%, #753a00 25%, #753a00 50%, #814405 50%, #814405 75%, #753a00 75%)",
    description: "Legno ciliegio liscio a venatura verticale con tonalità rossastre."
  },
  {
    id: "penelope",
    name: "Penelope",
    type: "penelope",
    color: "#d7ccc8",
    bgPattern: "radial-gradient(circle, #d7ccc8 20%, transparent 20%), radial-gradient(circle, #bfa59e 20%, transparent 20%)",
    description: "Texture geometrica in tinta unica, intreccio materico contemporaneo."
  }
];

export const openings = [
  {
    id: "battente",
    name: "Battente",
    description: "L'apertura classica ed elegante su cerniere tradizionali. Massima stabilità.",
    icon: "DoorOpen"
  },
  {
    id: "rototraslante",
    name: "Rototraslante",
    description: "L'anta ruota su se stessa e trasla a spinta su entrambi i lati, riducendo l'ingombro del 50%.",
    icon: "RotateCw"
  },
  {
    id: "magic",
    name: "Scorrevole Magic",
    description: "Sistema scorrevole invisibile esterno muro brevettato. Design minimalista estremo.",
    icon: "MoveRight"
  },
  {
    id: "saloon",
    name: "Saloon",
    description: "Anta a spinta bidirezionale per un passaggio rapido in entrambi i sensi.",
    icon: "TrendingUp"
  },
  {
    id: "libro",
    name: "Libro Asimmetrico",
    description: "Anta pieghevole asimmetrica a libro per ridurre al minimo l'ingombro laterale.",
    icon: "BookOpen"
  }
];

export const collections = [
  {
    id: "flat",
    name: "Collezione FLAT",
    tagline: "Il design complanare e la purezza delle linee",
    description: "Il cuore dell'innovazione Quadra: il telaio complanare Filo-coprifilo permette di allineare anta, telaio e coprifilo sullo stesso piano, eliminando gli spessori a vista. È prodotta con un'anima in legno di abete e rivestimento idrofugo HDF per la massima resistenza all'umidità.",
    image: "/images/flat.jpg",
    features: [
      "Telaio Idro (Abete + HDF idrorepellente 3mm)",
      "Coprifilo folding ad alta resistenza",
      "Complanarità unica del lato interno",
      "Ferramenta anuba ad alta resistenza"
    ],
    models: ["Flat Standard", "Flat Complanare", "Flat Rototraslante", "Flat Magic", "Flat Saloon"],
    availableFinishes: ["castagno-bianco", "coffee", "rovere-spazzolato", "noce-canaletto", "bianco-frassino", "bianco-opaco", "avorio-opaco"],
    availableOpenings: ["battente", "rototraslante", "magic", "saloon", "libro"],
    availability: "Disponibile (Consegna in 3 settimane)"
  },
  {
    id: "insert",
    name: "Collezione INSERT",
    tagline: "Customizzazione geometrica ed eleganza metallica",
    description: "Progettata per chi desidera personalizzare ogni dettaglio. La collezione si distingue per i profili in alluminio inseriti con precisione millimetrica nell'anta ed opzioni con cristalli Swarovski che creano giochi di luce unici.",
    image: "/images/insert.jpg",
    features: [
      "Inserti in alluminio spazzolato",
      "Opzioni con cristalli Swarovski",
      "Altissima flessibilità costruttiva",
      "Estetica contemporanea e futuristica"
    ],
    models: ["Isert 1V Alluminio", "Isert 2V Alluminio", "Isert 1V Onda Swarovski", "Isert 10R Onda"],
    availableFinishes: ["rovere-spazzolato", "coffee", "noce-canaletto", "bianco-frassino", "palissandro-grigio"],
    availableOpenings: ["battente", "rototraslante", "magic"],
    availability: "Su ordinazione (Consegna in 4 settimane)"
  },
  {
    id: "compact",
    name: "Collezione COMPACT",
    tagline: "L'incontro perfetto tra artigianalità e modernità",
    description: "Una collezione classica ma reinterpretata. Soluzioni studiate per unire robustezza strutturale e design accogliente, ideale per chi cerca una porta solida con finiture legno calde ed affidabili nel tempo.",
    image: "/images/compact.jpg",
    features: [
      "Incastri strutturali rinforzati",
      "Soluzioni con vetro e traversi",
      "Grande varietà di essenze legno tradizionali",
      "Rapporto qualità-prezzo eccellente"
    ],
    models: ["Compact Mod. C2", "Compact Plus", "Compact Vittoria", "Incastri 3V", "Vetro e Traversi"],
    availableFinishes: ["noce-nazionale", "ciliegio", "avorio-opaco", "bianco-opaco"],
    availableOpenings: ["battente", "libro"],
    availability: "Disponibile (Consegna in 2 settimane)"
  },
  {
    id: "pantografato",
    name: "Collezione PANTOGRAFATO",
    tagline: "Tridimensionalità incisa e lavorazioni artistiche",
    description: "La collezione Pantografato unisce il calore delle laccature tradizionali a incisioni tridimensionali effettuate con macchinari a controllo numerico (CNC). I disegni geometrici e curvilinei scolpiscono la porta dando carattere ad ogni ambiente.",
    image: "/images/pantografato.jpg",
    features: [
      "Incisioni tridimensionali a pantografo",
      "Laccatura opaca ad alto spessore",
      "Versioni laccate e laminate incise",
      "Design geometrici esclusivi"
    ],
    models: ["Laccato Inciso", "Laminato Pantografato", "Laccato Pantografato Premium"],
    availableFinishes: ["bianco-opaco", "avorio-opaco", "penelope"],
    availableOpenings: ["battente", "libro"],
    availability: "Su ordinazione (Consegna in 5 settimane)"
  },
  {
    id: "filomuro",
    name: "Collezione FILO MURO & BLINDATE",
    tagline: "Minimalismo estremo e sicurezza certificata",
    description: "Porte filo muro concepite per sparire nella parete, integrate con telai invisibili in alluminio. E le porte blindate serie Rock 3, che garantiscono la massima sicurezza con una cura artigianale nei rivestimenti e nelle sagomature.",
    image: "/images/filomuro.jpg",
    features: [
      "Blindati con Classe Antieffrazione RC3",
      "Abbattimento acustico certificato 30dB - 38dB",
      "Trasmittanza termica U=1.97 W/m² K",
      "Telai filo muro in alluminio estruso"
    ],
    models: ["Filo Muro Standard", "Rock 3 Blindata", "Rock 3 Luce", "Rock 3 Arco", "Rock 3 Doppia Anta"],
    availableFinishes: ["bianco-opaco", "rovere-spazzolato", "noce-nazionale", "palissandro-grigio", "penelope"],
    availableOpenings: ["battente"],
    availability: "Disponibile (Consegna in 3 settimane)"
  }
];
