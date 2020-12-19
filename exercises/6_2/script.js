const states = [
  { key: "AC", value: "Acre" },
  { key: "AL", value: "Alagoas" },
  { key: "AP", value: "Amapá" },
  { key: "AM", value: "Amazonas" },
  { key: "BA", value: "Bahia" },
  { key: "CE", value: "Ceará" },
  { key: "DF", value: "Distrito Federal" },
  { key: "ES", value: "Espírito Santo" },
  { key: "GO", value: "Goiás" },
  { key: "MA", value: "Maranhão" },
  { key: "MT", value: "Mato Grosso" },
  { key: "MS", value: "Mato Grosso do Sul" },
  { key: "MG", value: "Minas Gerais" },
  { key: "PA", value: "Pará" },
  { key: "PB", value: "Paraíba" },
  { key: "PR", value: "Paraná" },
  { key: "PE", value: "Pernambuco" },
  { key: "PI", value: "Piauí" },
  { key: "RJ", value: "Rio de Janeiro" },
  { key: "RN", value: "Rio Grande do Norte" },
  { key: "RS", value: "Rio Grande do Sul" },
  { key: "RO", value: "Rondônia" },
  { key: "RR", value: "Roraima" },
  { key: "SC", value: "Santa Catarina" },
  { key: "SP", value: "São Paulo" },
  { key: "SE", value: "Sergipe" },
  { key: "TO", value: "Tocantins" }
];

window.onload = function () {
  var startDate = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'YYYY-MM-DD',
    onSelect: function (date) {
      console.log(date)
    }
  });
  const selectState = document.querySelector('#state');
  for (index = 0; index < states.length; index += 1) {
    const optionState = document.createElement('option');
    optionState.innerHTML = states[index].value;
    optionState.value = states[index].key;
    selectState.appendChild(optionState);
  }
}

function stopDefAction(event) {
  event.preventDefault();

  const fullname = document.querySelector('#full-name');
  const email = document.querySelector('#email');
  const result = document.querySelector('#result');
  result.innerHTML = 'Nome: ' + fullname.value;
  result.innerHTML += 'Email: ' + email.value;
}

const send = document.getElementById('send').addEventListener(
  'click', stopDefAction, false
);