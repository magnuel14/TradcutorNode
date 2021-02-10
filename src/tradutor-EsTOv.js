
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


function traduzirTexto0() {
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
function traduzirTexto1() {
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
     
      'text':'Hello, what is your name?'

    }],
    json: true,
  }
  // imprimir la solicitud
  request(options, (err, res, body) => {
    console.log(JSON.stringify(body, null, 4));
  })
};

function traduzirTexto2( ) {
  // configuracion de la solicitud
  e='hola';
  let options = {
    method: 'POST',
    baseUrl: endpoint,
    url: 'translate',
    qs: {
      'api-version': '3.0',
      'profanityAction':'Marked',
      'to': ['es','pt','en']
    },
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
    
     
      'text':'es  una  idea '
    }],
    json: true,
  }
  // imprimir la solicitud
  request(options, (err, res, body) => {
    console.log(JSON.stringify(body, null, 4));
  })
};
//traduzirTexto0();
//traduzirTexto1();
//traduzirTexto2();
//const fs = require('fs');
//const json_books = fs.readFileSync('src/a.json', 'utf-8');
//let books = JSON.parse(json_books);
//console.log(books);


var obj = [
  {
    'text': 'Fernando juega futbol' 
    
  },
  {
    'text':'Katia debe trabajar'
    
  },
  {
    'text':'Brayan toma agua'
    
  },
  {
    'text':'Ramon conduce su auto'
    
  }, {
    'text':'Alberto esta sentado'
    
  },     
]
for (x of obj) {
  console.log(x.text);
  
  var eo =x.text;
  function traduzirTexto2( ) {
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
      
       
        'text':eo,
      }],
      json: true,
    }
    // imprimir la solicitud
    request(options, (err, res, body) => {
      console.log(JSON.stringify(body, null, 4));
    })
  };
 
  traduzirTexto2();
}

