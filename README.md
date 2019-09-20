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
