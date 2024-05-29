const ingresos = [
  new Ingreso("Salario", 370000),
  new Ingreso("Venta auto", 3000000),
];

const egresos = [new Egreso("Alquiler", 1000000), new Egreso("Gastos", 550000)];

const cargarApp = () => {
  cargarHeader();
};

const totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }

  return totalIngreso;
};

const totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }

  return totalEgreso;
};

const cargarHeader = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentaje = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentaje);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-AR", {
    style: "percent",
    minimumFractionDigits: 2,
  });
}
