//const newnumbers =parseInt(process.argv[2])+parseInt(+process.argv[3])+parseInt(process.argv[4])
//console.log(newnumbers)

var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)