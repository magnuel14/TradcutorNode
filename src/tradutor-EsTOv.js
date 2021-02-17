//librerias cargadas
const request = require('request');
const uuidv4 = require('uuid/v4');
//incio cargar llaves de acceso
//llave de cliente
let chave_translator = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';

// si las variebles de entorno no funcion, da un error
if (!process.env[chave_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + chave_translator);
}
//para agregar estasllaves se usa la consola
let subscriptionKey = process.env[chave_translator];

let endpoint_translator = 'TRANSLATOR_TEXT_ENDPOINT';

if (!process.env[endpoint_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + endpoint_translator);
}

let endpoint = process.env[endpoint_translator];
// fin llaves de acceso

//Json que av seer analizado
var obj = [
  {
    'text': 'Manuel camina por la calle' 
    
  },
  {
    'text': 'Alex estudia fisica' 
    
  },
  {
    'text': 'Mario esta haciendo ejercicio' 
    
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
//ciclo forpara recorrer cada linea del objeto json y traducirla
for (x of obj) {
  //se imprime la oraciones para tener una referencia de lo que va traducir
  console.log(x.text);
  //se guarda la oracion o liena del objeto json, esta se usa mas bajo
  var data =x.text;
  //funcioa que usa lavariable data para traducir
  function traduzirTexto() {
    // configuracion de la solicitud, esta solicitud la analizael traslate-text
    let options = {
      method: 'POST',
      baseUrl: endpoint,
      url: 'translate',
      qs: {
        'api-version': '3.0',
        
        'to': ['es','en','ru','zh-Hans']
      },
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
      },
      body: [{
      
       
        'text':data,
      }],
      json: true,
    }
    // imprimir la solicitud
    request(options, (err, res, body) => {
      console.log(JSON.stringify(body, null, 4));
    })
  };
 
  traduzirTexto();
}

