function writeCards(names, event){
    const thankyouArray = [];
    for (let i = 0; i < names.length; i++){
        thankyouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return(thankyouArray);
}


function countDown(number){
    let countDown = number;
    while (countDown >= 0){
        console.log(countDown--);
    }
}


