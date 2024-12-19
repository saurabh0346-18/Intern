// Create a counter module that has increment, decrement, and reset methods.

const CounterModule = (() => {
    // Private variable
    let counter = 0;
  
    // Public methods
    return {
      increment: () => {
        counter++;
        return counter; 
      },
      decrement: () => {
        counter--;
        return counter;
      },
      reset: () => {
        counter = 0;
        return counter; 
      },
      getValue: () => {
        return counter; 
      }
    };
  })();
  console.log(CounterModule.increment()); 
  console.log(CounterModule.increment()); 
  console.log(CounterModule.decrement()); 
  console.log(CounterModule.reset());     
  console.log(CounterModule.getValue());  
  