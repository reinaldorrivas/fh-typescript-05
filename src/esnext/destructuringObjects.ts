type Avenger = {
  name: string;
  active: boolean;
  power: number;
};

const printAvenger = ({ name, ...rest }: Avenger): void => {
  console.log("name:", name);
  console.log("...rest:", rest);
};

export const destructuringObjects = (): void => {
  const avenger: Avenger = {
    name: "Ironman",
    active: true,
    power: 2000,
  };

  printAvenger(avenger);

  console.log("--- END DESTRUCTURING FILE ---");
};
