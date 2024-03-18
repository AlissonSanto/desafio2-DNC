

async function getAddressByCep() {
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
}