/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

function removeUrlAnchor(url) {
  // TODO: complete
  return url.replace(/#.*/gi, "");
}

const removeUrlAnchor = (url) => url.split("#")[0];

function removeUrlAnchor(url) {
  let string = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      break;
    }
    string += url[i];
  }
  return string;
}

function removeUrlAnchor(url) {
  var index = url.indexOf("#");
  return index == -1 ? url : url.substring(0, url.indexOf("#"));
}
