function converterParaFahrenheit(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("valorFahrenheit").innerHTML=(valNum*1.8)+32;
}

function converterParaCelsius(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("valorCelsius").innerHTML = (valNum-32) / 1.8;
}

