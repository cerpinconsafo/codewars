// FIZZBUZZ

// TAKE IN A NUMBER, COUNT FROM 1 TO THAT NUMBER,
// IF THE NUMBER IS DIVISIBLE BY 3, REPLACE THAT NUMBER WITH 'FIZZ'
// IF THE NUMBER IS DIVISIBLE BY 5, REPLACE THAT NUMBER WITH 'BUZZ'
// IF THE NUMBER IS DIVISIBLE BY 3 && 5, REPLACE THAT NUMBER WITH 'FIZZBUZZ'

//PREP parameters, returns, examples, pseudocode
//1 to num 3 fizz 5 buzz 3&5 fizzbuzz
//p num, whole, +
//r console
//e


    //loop to print each number starting with 1 to num    
   function fizzBuzz(num){
        for (let i = 1; i <= num; i++) {

        // conditional for divis by 3 && 5 OR easier by 15 fizzbuzz
        if (i % 15 === 0) console.log('fizzBuzz');
        //conditiontal for divis by 5 'buzz'
        else if (i % 5 === 0) console.log('buzz');
        //conditional for divis by 3 'fizz'
        else if (i % 3 === 0) console.log('fizz');
        //else just return num   
        else console.log(num)
    }}