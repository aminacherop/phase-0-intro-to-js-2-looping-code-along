// Code your solutions in this file
/*for ( let age = 30;age < 40; age++){
    console.log(`am ${age} years old.Happy birthday to me`);
    debugger;
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);*/

/*function writeCards(names,event){
    let messages = [];
    for(let i = 0; i<names.length; i++){
        messages.push[`Thank you, ${names[i]},for the wonderfull ${event} gift!`]}
        return messages;
        
    }
    const nameArray = ["Guadalupe","Ollie","Aki"]
    const eventName = "surprise";
    console,log(writeCards(nameArray,eventName));*/

    function writeCards(names, event) {
        let messages = [];
    
        for (let i = 0; i < names.length; i++) {
            messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        }
    
        return messages;
    }
    
    const namesArray = ["Guadalupe", "Ollie", "Aki"];
    const eventName = "surprise";
    
    console.log(writeCards(namesArray, eventName));

    function countDown(number){
        while (number >= 0){
            console.log(number);
            number--;
        }

    }
    countDown(10);








