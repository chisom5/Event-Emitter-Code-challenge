const handlers = {};

const trigger = (type) => {
  handlers[type]();
};

const on = (type, handler) => {
  handlers[type] = handler;
};

// Usage
on("foo", () => {
  console.log("Do foo");
});
trigger("foo");
// log: Do foo

/**
 * Result:
 * 
 * The current implementation has no issue.
 * An event handler is successfully registered to an event that's what the "on"
 * method does, then when an event is triggered the handler is being called.
 * Hence it log out "Do foo"
 */

