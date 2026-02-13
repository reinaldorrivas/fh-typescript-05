export const javascriptClass = () => {
  class Avenger {
    static #instancias: number = 0;
    static cantidadInstancias() {
      console.log("Cantidad instancias:", Avenger.#instancias);
    }

    name: string;
    power: number;

    constructor(name: string, power: number) {
      this.name = name;
      this.power = power;

      Avenger.#instancias++;
    }
  }

  class FlyingAvenger extends Avenger {
    #gay: boolean = false;
    flying: boolean;

    constructor(name: string, power: number) {
      super(name, power);
      this.flying = true;

      this.#isGay();
    }

    #isGay() {
      if (this.flying) {
        this.#gay = true;
      }
    }

    get isGayOrNot() {
      return this.#gay;
    }
  }

  const hulk = new Avenger("Hulk", 10000);
  const falcon = new FlyingAvenger("Falcon", 1000);

  console.log(hulk);
  console.log(falcon);
  console.log("Is gay?:", falcon.isGayOrNot);

  Avenger.cantidadInstancias();
};
