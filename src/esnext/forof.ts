type Avenger = {
  name: string;
  weapon: string;
};
export const forOf = (): void => {
  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armor suit",
  };

  const captainAmerica: Avenger = {
    name: "Captain America",
    weapon: "Vibranium shield",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjölnir",
  };

  const avengers: Avenger[] = [ironman, captainAmerica, thor];

  for (const avenger of avengers) {
    console.log(avenger);
  }

  console.log("--- END FOR-OF FILE ---");
};
