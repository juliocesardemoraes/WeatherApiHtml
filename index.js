/**
 * Busca temperatura de cidade
 * @param {string} nomeDaCidade Nome da cidade
 * @returns informações sobre a cidade buscada
 */
const buscarTemperaturaCidade = async (nomeDaCidade) => {
  const dadosCidade = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${nomeDaCidade}&appid=aaa4b55b9a2bbd6e73ef18b8bbff7416&units=metric&lang=pt_br`,
    { mode: "cors" }
  );
  const cidadeInformacao = await dadosCidade.json();
  return cidadeInformacao;
};

/**
 * Inserir dados no DOM
 * @param {Object} dados Objeto da API openweatherapi que busca dados de cidades
 */
const informacoesCard = (dados) => {
  document.getElementById("nome__cidade").innerHTML = dados.name;
  document.getElementById("temperatura__cidade").innerHTML = dados.main.temp;
  document.getElementById("descricao__cidade").innerHTML =
    dados.weather[0]?.description;
  document.getElementById("umidade__cidade").innerHTML = dados.main.humidity;
  document.getElementById("temperatura__max__cidade").innerHTML =
    dados.main.temp_max;
  document.getElementById("temperatura__min__cidade").innerHTML =
    dados.main.temp_min;
};

/**
 * Função para buscar informações sobre tempo de cidades
 */
const buscar = async () => {
  const input = document.getElementById("input__buscar__cidade");
  const dados = await buscarTemperaturaCidade(input.value);
  informacoesCard(dados);
};
