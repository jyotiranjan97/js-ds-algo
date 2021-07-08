// Write a function called collectStrings which accepts an object
// and returns an array of all the values in object that have a typeof string.

const collectStrings = (obj) => {
  let newArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      newArr = newArr.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      newArr.push(obj[key]);
    }
  }
  return newArr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
