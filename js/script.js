
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// Initially I had trouble with this because printQuote takes an object literal array
// as an argument, but once I converted it to an anonymous function we were good
document.getElementById("loadQuote").addEventListener("click", function() {printQuote(quotes);}, false);
document.getElementById("add-button").addEventListener("click", toggleAddForm, true);
var addFormOpen = false;

// This is a simple printing function
function print(message) {
  var outputDiv = document.getElementById("quote-box");
  outputDiv.innerHTML = message;
}

// getRandomQuote gets a random number based on the number of objects (n) in an object literal array.
// Typically when using Math.random you add +1 due to the inclusive zero and exclusive one,
// but here we actually want the selection to be from zero to n-1 so no addition is needed
function getRandomQuote(quoteList) {
  var rand = Math.floor(Math.random() * quoteList.length);
  return (quoteList[rand]);
}

// printQuote takes an object literal array and pulls a random object from it,
// then dices up the object and formats it for the page.  Finally it spits it out
// via the print function. I wanted to just have it take a single object as an argument
// and have it run based on a global variable "rand" that getRandomQuote would update,
// but the reqs were very specific here.
function printQuote(quoteList) {
  var quoteMeta = getRandomQuote(quoteList);
  var message = "";

  message = '<p class="quote">' + quoteMeta.quote + '</p>';
  message += '<p class="source">' + quoteMeta.source;

// in these two if statements we need to determine if the property exists,
// and if it does we need to format the contents for output. If it doesn't
// we can skip it.
  if (quoteMeta.hasOwnProperty('citation')){
    message += '<span class="citation">' + quoteMeta.citation + '</span>';
  }
  if (quoteMeta.hasOwnProperty('year')){
    message += '<span class="year">' + quoteMeta.year + '</span>';
  }

  message += '</p>';
  print(message);
}

function toggleAddForm() {
  event.stopPropagation();
  var quoteBox = document.getElementById("quote-box");
  var menuForm = document.getElementById("menu-form")
  if (addFormOpen === false){
    quoteBox.style.top = "40%";
    menuForm.style.display = "block";
    addFormOpen = true;
  } else {
    quoteBox.style.top = "20%";
    menuForm.style.display = "none";
    addFormOpen = false;
  }
}
