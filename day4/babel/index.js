const fetch = require("node-fetch");


function messageDelay(msg, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const upperCased = msg.toUpperCase();
            resolve(upperCased)
        },delay)
    })
}

const promises = [
    messageDelay("Hi", 1300),
    messageDelay("Hi class", 700),
    messageDelay("Hello fucktards", 500),
    messageDelay("Promises are shit", 1700)

]

Promise.any(promises).then((upperCased)=> console.log(upperCased));
