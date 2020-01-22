import foods from './foods';
import {choice, remove} from './helpers';

//randomly draw a fruit from the array
let fruit = choice(foods);

//log the message "I'd like one RANDOMFRUIT, please."
console.log(`I'd like one ${fruit}, please.`);

//log the message "Here you go: RANDOMFRUIT"
console.log(`Here you go ${fruit}`);

//Log the message 
console.log(`Delicious, may i have another?`);

//Remove the fruit the array of fruits
let remaining = remove(foods,fruit);

//Log the message
console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);


