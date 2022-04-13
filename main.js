function computerPlay() {
// math.random generates a number between 0 & 1, multiplied by 3 since there are three possible selections, math.ceil rounds up to nearest whole number     
    let random = Math.ceil(Math.random() * 3);
    if(random === 1) {
        console.log('rock');
    } else if(random === 2) {
        console.log('paper');
    } else {
        console.log('scissors');
    }
    
}

