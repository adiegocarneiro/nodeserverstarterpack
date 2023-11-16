//import './src/app/server.js'
const url = `http://server.ectarepay.com.br/ajax?tela=${'GetVersaoApp'}&app=${'ectare_app'}&teste=${true}&linkCompleto=${true}`;

const response = await fetch(url);
const responseJson = await response.json();
console.log(responseJson);


function Promessa(url,body,metodo){
  // retornará uma instância de promessa
  // resolve é o then
  // reject é o catch
  return new Promise((resolve, reject)=>{
    //fazer qualquer coisa e chamar resolve em caso de sucesso, reject em caso de falha
    // podemos fazer um try/catch e retornar o reject no catch, etc
    // nesse caso, vamo chamar o fetch
    fetch(url,{
      method: metodo,
      body: body ? JSON.stringify(body) : undefined,
      headers:{
        'Content-type':'application/json'
      }
    })
      .then((results)=>results.json())
      // results é o retorno http q tem o metodo .json() que transforma o payload (data) em json pra nós
        // o metodo json() retorna uma promise também, e então chamamos o then dele que nos trás um objeto
      .then((objeto)=>{
        // fazemos algo com o json
        // como foi sucesso a chamada, usamos o resolve
        resolve(objeto)
      })
      .catch((err)=>{
        // em caso de erro, chama o reject
        reject(err)
      })
  })
}


// exemplo da chamada
Promessa('www.hotmail.com',{login:'eu@email.com',senha:'1234'},'POST')
  .then((dadosEmJson)=>{
    console.log(dadosEmJson)
  })
  .catch((err)=>{
    console.log(err)
  })