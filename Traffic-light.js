/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

function updateLight(current) {
  let lightArray = ["green", "yellow", "red"];

  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else if (current === "red") {
    return "green";
  } else {
    return null;
  }
}

//other solutions

function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}

//this one blows my mind
const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
    default:
      throw "Error: wrong input";
      break;
  }
}

function updateLight(current) {
  const lights = ["green", "yellow", "red"];
  return lights[(lights.indexOf(current) + 1) % lights.length];
}
