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

// Usage
on("foo", () => {
  console.log("Do foo");
});
on("foo", () => {
  console.log("Do some other foo");
});
trigger("foo");
// log: Do some other foo

/**
 * Result:
 *
 * when the trigger method is called, our two event handlers are registered and
 * invoke 
 * that's why we will have:
 *
 * "Do foo" and
 * "Do some other foo" values in our console.
 */
