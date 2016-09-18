
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// Initially I had trouble with this because printQuote takes an object literal array
// as an argument, but once I converted it to an anonymous function we were good
document.getElementById("loadQuote").addEventListener("click", function() {printQuote(quotes);}, false);

// Show a new quote every 30 seconds.  This doesn't base it on clicks of the button, which we fix
// the first time the button is clicked.
var interval = window.setInterval(function(){printQuote(quotes);}, 30000);

var usedQuotes = [];

// This is a simple printing function
function print(message) {
  var outputDiv = document.getElementById("quote-box");
  outputDiv.innerHTML = message;
}

// getRandomQuote gets a random number based on the number of objects (n) in an object literal array.
// Typically when using Math.random you add +1 due to the inclusive zero and exclusive one,
// but here we actually want the selection to be from zero to n-1 so no addition is needed
// As an addition, it also keeps track of the used quotes and ensures no quote is used twice before
// every quote is used once.
function getRandomQuote(quoteList) {
  // Get a random quote and make sure it hasn't been used yet
  do {
    var rand = Math.floor(Math.random() * quoteList.length);
  } while(usedQuotes.indexOf(rand) >= 0)

  // at this point we know the quote hasn't been used yet, so we add it to the "used" list as we're about to use it
  usedQuotes.push(rand);

  // Leaving this in for easy verification that we're going through every quote
  console.log(usedQuotes);

  // if we've used all of the quotes in the list we need to wipe the slate clean
  if (usedQuotes.length === quoteList.length) {
    usedQuotes = [];
  }

  return (quoteList[rand]);
}

// getRandomColor returns a string in the format of a hex color.  This gave me a bit of trouble
// because initially I wanted to just use the (255,255,255) format, but that doesn't work with
// the backgroundColor property (or at least not how I expected), which was an annoying thing to figure out.
function getRandomColor() {
  function getColor(){
    // pick a number between 0 and 255, inclusive. Because math.random is exclusive of 1, we include 256 which can't be reached.
    var color = Math.floor(Math.random() * 256);
    //convert the 0-255 number to hex
    return color.toString(16);
  }
  return ("#"+getColor()+getColor()+getColor());
}

// printQuote takes an object literal array and pulls a random object from it,
// then dices up the object and formats it for the page.  Finally it spits it out
// via the print function. I wanted to just have it take a single object as an argument
// and have it run based on a global variable "rand" that getRandomQuote would update,
// but the reqs were very specific here.
function printQuote(quoteList) {
  // First, clear the timer so it doesn't refresh the quote based on page load rather than button click
  window.clearInterval(interval)
  var quoteMeta = getRandomQuote(quoteList);
  var message = "";

  // Randomly change the background color when the quote changes
  document.body.style.backgroundColor = getRandomColor();

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
  // And we display the total message
  print(message);

  // Set the timeout so that after this function runs each time, it re-runs in 30 secons if it hasn't yet
  interval = window.setTimeout(function(){printQuote(quotes);}, 30000);
}
