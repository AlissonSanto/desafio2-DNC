

async function pegarCep() {
    const cep = document.getElementById("cep").value

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data)
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('uf').value = data.localidade;

    } catch (error) {
        console.log(error.message)
    }

    const lat = document.getElementById("lat").value
    const log = document.getElementById("log").value

    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&current=temperature_2m&hourly=temperature_2m&timezone=America%2FSao_Paulo&forecast_days=1`);
        const data = await response.json();
        console.log(data)
        document.getElementById('temperatura').value = data.hourly.temperature_2m;
        

    } catch (error) {
        console.log(error.message)
    }
}

