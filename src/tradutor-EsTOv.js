
const request = require('request');
const uuidv4 = require('uuid/v4');

let chave_translator = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';

// si las variebles de entorno no funcion, da un error
if (!process.env[chave_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + chave_translator);
}

let subscriptionKey = process.env[chave_translator];

let endpoint_translator = 'TRANSLATOR_TEXT_ENDPOINT';

if (!process.env[endpoint_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + endpoint_translator);
}

let endpoint = process.env[endpoint_translator];

function traduzirTexto() {
  // configuracion de la solicitud
  let options = {
    method: 'POST',
    baseUrl: endpoint,
    url: 'translate',
    qs: {
      'api-version': '3.0',
      'to': ['es','pt','en']
    },
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
      'text': 'Fernando va jugar futbol en el parque'
    }],
    json: true,
  }

  // imprimir la solicitud
  request(options, (err, res, body) => {
    console.log(JSON.stringify(body, null, 4));
  })
};
// se invoca a la funcion que hace la traduccion
traduzirTexto();