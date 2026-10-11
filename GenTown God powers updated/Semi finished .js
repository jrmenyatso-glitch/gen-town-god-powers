// GenTown God Powers Mod
// Powerful events for your civilization simulator

// 1. Population Boom
Mod.event("godPopulationBoom", {
    random: true,
    subject: { reg: "player", id: 1 },
    target: { reg: "town", random: true },

    message: (subject, target, args) =>
        `Should {{regname:town|${target.id}}} receive a miraculous population boom?`,

    messageDone: (subject, target, args) =>
        `A miraculous population boom has blessed {{regname:town|${target.id}}}!`,

    func: (subject, target, args) => {
        happen("Birth", subject, target, { count: 100 });
    },

    weight: $c.RARE
});

// 2. Divine Prosperity
Mod.event("godProsperity", {
    random: true,
    subject: { reg: "player", id: 1 },
    target: { reg: "town", random: true },

    message: (subject, target, args) =>
        `Should {{regname:town|${target.id}}} enter a divine age of prosperity?`,

    messageDone: (subject, target, args) =>
        `A golden age of prosperity has begun in {{regname:town|${target.id}}}!`,

    func: (subject, target, args) => {
        happen("Recolor", subject, target, args);
    },

    weight: $c.RARE
});

// 3. Divine Judgment
Mod.event("godJudgment", {
    random: true,
    subject: { reg: "player", id: 1 },
    target: { reg: "town", random: true },

    message: (subject, target, args) =>
        `Should {{regname:town|${target.id}}} face divine judgment?`,

    messageDone: (subject, target, args) =>
        `Divine judgment has struck {{regname:town|${target.id}}}!`,

    func: (subject, target, args) => {
        happen("Death", subject, target, { count: 50 });
    },

    weight: $c.RARE
});

// 4. Daily Blessing
Mod.event("godDailyBlessing", {
    daily: true,
    target: { reg: "town", all: true },

    func: (subject, target, args) => {
        happen("Birth", subject, target, { count: 5 });
    }
});
