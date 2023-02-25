const form = document.querySelector("#simulador_hipotecas");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const precio_inmueble = Number(document.querySelector("#Precio_inmueble").value);
    const ahorro_aportado = Number(document.querySelector("#Ahorro_aportado").value);
    const years = Number(document.querySelector("#Years").textContent);
    const tasa_interes = Number(document.querySelector("#Tasa_interes").value);

    const tasa_interes_mensual = (tasa_interes / 100) / 12;
    const pagos_totales = years * 12;
    const hipoteca = (precio_inmueble - ahorro_aportado) * (tasa_interes_mensual * Math.pow(1 + tasa_interes_mensual, pagos_totales)) / (Math.pow(1 + tasa_interes_mensual, pagos_totales) - 1);

    result.innerHTML = `Tu pago mensual es de ${hipoteca.toFixed(2)} EUR`;
});

const rangeInput = document.querySelector("#Plazo_años");
const years = document.querySelector("#Years");
years.textContent = rangeInput.value;

rangeInput.addEventListener("input", function(event) {
    years.textContent = rangeInput.value;
});
