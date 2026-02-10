export const destructuringArrays = (): void => {
  const avenger: [string, boolean, number] = ["Captain America", true, 2500];
  const [captainAmerica, active, power] = avenger;

  console.log({captainAmerica, active, power});

  console.log("--- END DESTRUCTURING ARRAYS FILE ---");
};
