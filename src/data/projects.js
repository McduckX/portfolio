export const games = [
  {
    id: "runner-rogue",
    title: "Neon Runner: Rogue Circuit",
    role: "Lead Programmer / Systems Designer",
    releaseStatus: "Prototyped, itch.io Demo Available",
    teamSize: "2 People",
    duration: "3 Months",
    tools: ["Godot", "C#", "Aseprite", "Tiled"],
    status: "First playable demo with core loop",
    platformTags: ["Godot", "2D Pixel Art", "Roguelike"],
    heroMedia: "",
    media: "",
    summary:
      "A neon-soaked 2D roguelike built around speed, procedural layouts, and tight combat feedback.",
    vision:
      "The core loop is built for risk-reward flow: players sprint through corridors, trigger traps, and use the environment as a weapon while scoring combo chains.",
    responsibilities: [
      "Designed and implemented the player state machine for movement, dash, and attack combos.",
      "Built the procedural room generator that creates varied encounters on every run.",
      "Designed and tuned audio/visual feedback for hit confirmation and combo pacing.",
    ],
    deepDives: [
      {
        title: "Procedural Room Generation",
        description:
          "To keep runs fresh, I created a room system that stitches together hand-authored modules with random spawn patterns and hazard placement.",
        media: "",
      },
      {
        title: "Player State Machine & Combat Flow",
        description:
          "I built a modular FSM to manage player movement, dash recovery, and attack buffering so combat feels responsive under pressure.",
        media: "",
      },
    ],
    lessons:
      "This project taught me the importance of early running prototypes, stronger player feedback, and keeping systems decoupled so the game can evolve without breaking existing mechanics.",
    gallery: ["", "", ""],
    contributions: [
      "Built a custom procedural room generator for fast-paced 2D roguelike runs.",
      "Implemented an object-oriented state machine for player movement, combat, and loot systems.",
      "Designed and balanced enemy wave patterns and responsive hit feedback in Godot.",
    ],
    storefrontLinks: {
      itch: "https://itch.io/",
      steam: "",
      github: "https://github.com/McduckX/neon-runner",
      website: "",
    },
  },
  {
    id: "shadow-pixel",
    title: "Shadow Pixel: Nightfall Protocol",
    role: "Gameplay Programmer / Pixel Artist",
    releaseStatus: "Coming Soon • 2026",
    teamSize: "3 People",
    duration: "4 Months",
    tools: ["Godot", "Aseprite", "C#", "Figma"],
    status: "Pre-production, prototype phase",
    platformTags: ["Godot", "Aseprite", "C#"],
    heroMedia: "",
    media: "",
    summary:
      "A stealth-action pixel game with modular dialogue and mission systems that reward planning and creative takedowns.",
    vision:
      "The game’s hook is procedural stealth zones paired with character-driven choices that change how missions unfold.",
    responsibilities: [
      "Implemented enemy AI with layered vision cones and patrol states.",
      "Built the branching dialogue and quest system to support multiple mission outcomes.",
      "Created pixel art animations for playable characters and enemy encounters.",
    ],
    deepDives: [
      {
        title: "AI Vision System",
        description:
          "I designed a dynamic vision cone system and guard behaviour tree that allows enemies to search intelligently and react to sound triggers.",
        media: "",
      },
      {
        title: "Branching Mission Dialogue",
        description:
          "I built a dialogue/quest manager that supports branching outcomes and flags to influence mission flow without hardcoding story paths.",
        media: "",
      },
    ],
    lessons:
      "I learned how important modular systems are for stealth games, especially when balancing AI and dialogue systems without introducing bugs during iteration.",
    gallery: ["", "", ""],
    contributions: [
      "Implemented enemy AI behaviors with layered pathfinding and vision cones.",
      "Built a modular dialogue and quest system for branching mission outcomes.",
      "Created animated pixel art for 4 playable characters and 6 enemy types.",
    ],
    storefrontLinks: {
      itch: "https://itch.io/",
      steam: "",
      github: "https://github.com/McduckX/shadow-pixel",
      website: "",
    },
  },
  {
    id: "vault-runner",
    title: "Vault Runner: Quantum Shift",
    role: "Systems Programmer / UX Designer",
    releaseStatus: "Game Jam Prototype • Playable Build",
    teamSize: "1 Person (Solo)",
    duration: "2 Weeks",
    tools: ["Godot", "C#", "Aseprite", "Web Export"],
    status: "Playable jam build",
    platformTags: ["Game Jam", "Web Export", "Prototype"],
    heroMedia: "",
    media: "",
    summary:
      "A speed-run arcade prototype where players race through shifting vaults while avoiding traps and collecting power-ups.",
    vision:
      "The focus is on tight, responsive controls and quick progression through evolving room layouts that feel fair and fast.",
    responsibilities: [
      "Programmed core movement, scoring, and dash mechanics for tight arcade controls.",
      "Added polished VFX, audio triggers, and camera shake for stronger player feedback.",
      "Optimized the gameplay loop for rapid iteration and fast user testing.",
    ],
    deepDives: [
      {
        title: "Web Export Optimization",
        description:
          "I optimized the Godot export settings and asset pipeline so the jam build loads quickly in the browser without compromising visuals.",
        media: "",
      },
      {
        title: "Feedback-First Controls",
        description:
          "I tuned dash, landing, and scoring response so the prototype felt precise at high speed, with clear visual cues for every action.",
        media: "",
      },
    ],
    lessons:
      "The jam taught me that rapid prototyping and aggressive scope control are key to shipping polished gameplay in a short window.",
    gallery: ["", "", ""],
    contributions: [
      "Programmed core movement, scoring, and dash mechanics for tight arcade controls.",
      "Added polished VFX, audio triggers, and camera shake for stronger player feedback.",
      "Optimized the gameplay loop for rapid iteration and fast user testing.",
    ],
    storefrontLinks: {
      itch: "https://itch.io/",
      steam: "",
      github: "https://github.com/McduckX/vault-runner",
      website: "",
    },
  },
];
