console.log("****opg1****");

const simpleOS = require ('./simple-os-file');
console.log(simpleOS);


console.log("");
console.log("****opg2****");

const DOS_Detector = require('./dosDetector');
const dos_dect= new DOS_Detector(1000);

dos_dect.on('DOS_Detected', (eventArg) => console.log('Event found an object with URL and time', eventArg));
dos_dect.addUrl('url test 1');
dos_dect.addUrl('url test 2');
dos_dect.addUrl('url test 3');

setTimeout( ()=>dos_dect.addUrl('url test 1'), 500);
setTimeout( ()=>dos_dect.addUrl('url test 3'), 500);