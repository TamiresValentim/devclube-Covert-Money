const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")




/*const dolar = 5.0
const euro = 5.50
const bitcoin = 0.0000069*/

const convertValues = async () => {

  const inputreis = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const currencyValueText = document.getElementById('currency-value-text')

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  //console.log(data)
  const dolar = data.USDBRL.high

  const euro = data.EURBRL.high

  const bitcoin = data.BTCBRL.high


  //realValueText.innerHTML = inputreis
  realValueText.innerHTML = new Intl.NumberFormat('pt-br',
    { style: 'currency', currency: 'BRL' } //SEMPRE FOR DINHEIRO BRASILEIRO SEMPR VAI SE BRL
  ).format(inputreis);


  if (select.value === 'S$ Dólar americano') {
    // currencyValueText.innerHTML = inputreis/ dolar //est VERSÃO NÃO COLOR VALOR DA MOEDA SAI MUITO MOEDA
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(inputreis / dolar);
  }


  if (select.value === '€ Euro') {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }
    ).format(inputreis / euro);
  }


  if (select.value === 'Bitcoin') {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'BTC' }
    ).format(inputreis / bitcoin);
  }
}


const changeCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')

  if (select.value === 'S$ Dólar americano') {
    currencyName.innerHTML = 'Dólar americano'
    currencyImg.src = './img/estados-unidos (1) 1.png'
  }
  if (select.value === '€ Euro') {
    currencyName.innerHTML = 'euro'
    currencyImg.src = './img/euo.png'

  }
  if (select.value === 'Bitcoin') {
    currencyName.innerHTML = 'Bitcoin'
    currencyImg.src = './img/biticon.png'
  }
  convertValues()
}





button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)