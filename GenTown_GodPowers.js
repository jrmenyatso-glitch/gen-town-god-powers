// ==GenTown Mod==
// Name: God Powers
// File: GenTown_GodPowers.js

Mod.event("god_miracle", {
  random: true,
  subject: { reg: "player", id: 1 },
  target: { reg: "town", random: true },
  message: () => "✨ Grant a town a divine miracle?",
  messageDone: () => "✨ A miracle has occurred!",
  func: (subject, town) => {
    if (typeof town.population === "number") {
      town.population += 100;
    }
    if (town.resources && typeof town.resources === "object") {
      for (const key in town.resources) {
        if (typeof town.resources[key] === "number") {
          town.resources[key] += 1000;
        }
      }
    }
  },
  weight: $c.RARE
});

Mod.event("god_golden_age", {
  random: true,
  subject: { reg: "player", id: 1 },
  target: { reg: "town", random: true },
  message: () => "👑 Begin a Golden Age?",
  messageDone: () => "👑 A Golden Age begins!",
  func: (subject, town) => {
    if (Array.isArray(town.color)) {
      town.color = [255, 215, 0];
    }
  },
  weight: $c.RARE
});

Mod.event("god_chaos", {
  random: true,
  subject: { reg: "player", id: 1 },
  target: { reg: "town", random: true },
  message: () => "☄️ Unleash Cosmic Chaos?",
  messageDone: () => "☄️ Cosmic Chaos strikes!",
  func: (subject, town) => {
    if (Array.isArray(town.color)) {
      town.color = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
      ];
    }
  },
  weight: $c.RARE
});