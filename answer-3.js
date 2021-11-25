const handlers = {};

const trigger = (type) => {
  // iterate through the list to invoke each event
  handlers[type].forEach((handler) => handler());
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

// To remove an handler
const off = (type, handler) => {
  // check if the event is not a property of the handlers throw an error.
  if (!handlers[type]) {
    throw new Error(`Can't remove a listener. Event "${type}" doesn't exits.`);
  }

  handlers[type] = handlers[type].filter((listener) => listener !== handler);
};

// Usage
const onFoo = () => {
  console.log("Do foo");
};

on("foo", onFoo);
off("foo", onFoo);

trigger("foo");
// No output

/**
 * Result:
 *
 * when trigger we will have no output in our console because our event handler 
 * has been removed
 */
