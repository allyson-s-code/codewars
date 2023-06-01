// add the value "codewars" to the websites array 1,000 times
var websites = [];

for (x = 0; x < 1000; x++) {
  websites.push("codewars");
}
return websites;

//others
var websites = [];
while (websites.length < 1000) websites.push("codewars");

var websites = new Array(1000).map(function (e) {
  return "codewars";
});

// add the value "codewars" to the websites array 1,000 times
var websites = Array(1000)
  .join()
  .split(",")
  .map(function () {
    return "codewars";
  });
