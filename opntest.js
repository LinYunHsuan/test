var opn = require('opn');

opn('http://www.google.com.tw').then(() => {
                 console.log('open success');
             }).catch(function(){
                console.log('open fail');
                 });