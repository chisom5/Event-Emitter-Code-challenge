const handlers = {};

/**
 * As an arbitrary arguments we don't know how many argument to expect,
 * hence i am using rest operator to pack it into an array and use apply with it.
*/
const trigger = (type, ...arguments) => {
    
  handlers[type].forEach((handler) => handler.apply(null, arguments));
};

/**
 * To add multiple handler of the same type
 * is to make use of an array.
 *
 * 1. check if the object doesn't have the property
 * 2. create it and assign it to an empty array
 * 3. push the listener into the list
 */
const on = (type, handler) => {
  if (!handlers[type]) {
    handlers[type] = [];
  }

  // add our handler into the array
  handlers[type].push(handler);
};


// Usage
on('foo', (arg1, arg2) => {
    console.log('here are my args', arg1, arg2);
    })
    
trigger('foo', "hello", 'chisom');



/**
 * Result Explanation:
 *
 * when trigger with our arguments, we then invoke our handler using apply method 
 * which allows us to call a function with a given this value and arguments provided as an array.
 * 
 * hence our console will log "here are my args hello chisom". 
 */
