/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

function bump(x) {
  let bumps = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "n") {
      bumps += 1;
    }
  }
  return bumps <= 15 ? "Woohoo!" : "Car Dead";
}

//others
const bump = (x) => (x.split("n").length > 16 ? "Car Dead" : "Woohoo!");

function bump(x) {
  return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
}
