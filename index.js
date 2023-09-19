//import './src/app/server.js'
const url = `http://server.ectarepay.com.br/ajax?tela=${'GetVersaoApp'}&app=${'ectare_app'}&teste=${true}&linkCompleto=${true}`;

const response = await fetch(url);
const responseJson = await response.json();
console.log(responseJson);