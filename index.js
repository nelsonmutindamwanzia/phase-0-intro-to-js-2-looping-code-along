// Code your solutions in this file

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

    console.log(writeCards(['James and John', 'Mwanzia','Nelson','Mutinda','BonsaiCF'], 'graduation'));


// Countdown Assignment

function countDown(i){
    let countdown = 10;  
    while( countdown >= 0){
        console.log(countdown--);
        
    }
}
console.log (countDown(10));