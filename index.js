let thankyoumessage= []
function writeCards(names){
  for ( let i = 0; i <names.length; i++) {
    console.log(`thank you ${names[i]}`);
thankyoumessage.push(`Thank you, ${names[i]}, for the wonderful surprise gift!` )
}
console.log(thankyoumessage)
return thankyoumessage
}
function countDown(number){
    while( number > -1 )
console.log(number--)
}