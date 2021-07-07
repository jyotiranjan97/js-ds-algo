const takeBath = () => {
  return "Taking bath";
};

const eatBreakFast = () => {
  let food = pickFood();
  return `Eating ${food}`;
};

const pickFood = () => {
  let foods = ["Oats", "Fruits", "Protien Shake", "Egg"];
  return foods[Math.floor(Math.random() * foods.length)];
};

const wakeUp = () => {
  takeBath();
  eatBreakFast();
  console.log("Ready to got to Work!!");
};

wakeUp();

// Add a Breakpoint at line 21 and debug, Check callstacks
