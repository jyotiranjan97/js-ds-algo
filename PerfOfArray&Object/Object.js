const { performance } = require("perf_hooks");

const address = {
  firstName: "Jyotiranjan",
  lastName: "Sahoo",
};

// 0 - Getting Entries
const t0 = performance.now();
console.log(Object.entries(address));
const t1 = performance.now();
console.log(`Time lapsed: ${(t1 - t0) / 1000} seconds.`);
// Time lapsed: 0.007321299999952316 seconds.

// 1 - Inserting a value
address.city = "Bhubaneswar";
// Time complexity - O(1) irrespective of object size
// Same for Update

// 2 - Getting Entries
address.country = "India";
address.state = "Odisha";
const t2 = performance.now();
console.log(Object.entries(address));
const t3 = performance.now();
console.log(`Time lapsed: ${(t2 - t3) / 1000} seconds.`);
// Time lapsed: 0.008038700014352798 seconds.
// Time complexity - O(n) i.e. if object size grows time also increases.
// Compare step 2 and 0 by running them individually.
// Same for Object.keys() and Object.values()

// 3 - Getting a single value
console.log(address.firstName);
// Time Complexity - O(1), as searching a value by property is not dependent on Object size

// 4 - Checking Property Exist
console.log(address.hasOwnProperty("lastName"));
// Time Complexity - O(1), Not dependent on Object

// 5 - Deleting a property and value
delete address.lastName;
// Time Complexity - O(1), Not dependent on Object

// If you want to check the time lapsed for each process,
// please add the performance.now() before and after the process
// and run them individually to compere
