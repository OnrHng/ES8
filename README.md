# ES8
what we got from ES8 new technology

hey guys... when i wrote below iki codes i got two different result in ES8

 #1) Check if this array includes the name "John".

    const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
    console.log ('includes' , dragons.includes('John')); // false
it was return false... but below return true, and console log was "Johnathan"

    const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
    const john = dragons.filter ( check => check.includes('John'));
    console.log('filter', john);
what is the different?

and on the other hand when i used with filter () method i got true result and so result was again "Johnathan"

      const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
      if (dragons.includes('John')) {
        const x = dragons.includes('John');
        console.log (x); 
      }
      else if ( dragons.filter(check => check.includes('John')))
        {
          let john = dragons.filter( check => check.includes('John'));
          console.log(john);
      }
      else {
        console.log('dragons has not John')
      }


maybe help it someone...

#1) Line up the Turtle and the Rabbit at the start line:

     const startLine = '     ||<- Start line';
     let turtle = '🐢';
     let rabbit = '🐇';
     console.log(startLine.padStart(10));
     console.log(turtle.padStart(10));
     console.log(rabbit.padStart(10));
#2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable

       turtle = turtle.trim().padEnd(9, '=');   
          // 🐢=======   
i guess turtle get 2 characters and total with 7 equals are 9 ...
// #3) Get the below object to go from:

        let obj = {
          my: 'name',
          is: 'Rudolf',
          the: 'raindeer'
        }
        const x = Object.entries(obj).map ( value => {
            return value[0] + " " + value[1];
        });
         x.join(' ');
        result this:

        'my name is Rudolf the raindeer'





