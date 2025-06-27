// setup a dark mode 
// On button click, pick a random quote and update the DOM.
// generate a quote randomly 

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteBtn = document.getElementById('new-quote');
const bodyBackground = document.getElementById('bodyBackground');
const quoteCon = document.getElementById('quoteCon');
const result = document.getElementById('result');

const darkBtn = document.getElementById('dark-mode-toggle');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis"
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  }
];


quoteBtn.addEventListener('click', ()=>{
    const getRandomQuotes = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[getRandomQuotes];

      result.textContent = randomQuote.text
      quoteAuthor.textContent = `- ${randomQuote.author}`;

      quoteAuthor.style.color = 'green'
      quoteCon.style.display = 'block';
      result.style.color = 'blue'

});