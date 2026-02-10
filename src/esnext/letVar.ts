export const letVarTS = (): void => {
  console.log("Esto no se permite en ES6 con <<let>> y <<const>>:" + a);
  var a;

  let b: string = "René";
  console.log(
    `Cuando declaras una variable con <<let>> y <<const>> mantienen su scope y orden de ejecución: ${b}`,
  );
  console.log("También esperas que le hagas una asignación antes de usarla.");

  const voidFunction = (): void => {};
  console.log(
    "Se recomienda usar <<const>> a menos que sepas que vas a reasignar la variable, así se evita accidentalmente la reasignación de datos por error.",
  );

  console.log(voidFunction);

  console.log("--- END LET/CONST/VAR FILE ---");
};
