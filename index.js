// index.js

// Function for writing thank you cards
function writeCards(names, eventName) {
  let thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

// Function for counting down
function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

// Example usage:
// Uncomment the following line if you have not added it to your index.js
// const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
// countDown(10);
