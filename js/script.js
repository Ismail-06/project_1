'use strict';

const options = {
    name : 'test',
    width : 1024,
    height : 1024,
    colors : {
        border : 'red',
        bg     : 'black'
    }
};

for(let key in options){
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет свойство ${options[key][i]}`);
        }
    } else {
            console.log(`Свойство ${key} имеет свойство ${options[key]}`);
    }

}