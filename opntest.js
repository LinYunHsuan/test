var opn = require('opn');
var express = require('express');

opn('http://www.google.com.tw').then(() => {
                 console.log('open success');
             }).catch(function(){
                console.log('open fail');
                 });