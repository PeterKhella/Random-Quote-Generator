function generate() {

fetch('./data.json')
    .then(response => response.json())
    .then(jsonArray => {
      // Access elements of the jsonArray
      console.log(jsonArray[0].quote); // Output: John
      console.log(jsonArray[1].author); // Output: 25
  
    //   Perform operations on the jsonArray
    //   jsonArray.push({ "quote": "Alice", "author": 35 });
    //   console.log(jsonArray);
    const randomIndex = Math.floor(Math.random() * jsonArray.length);

    // Retrieve the random quote object
    const randomQuote = jsonArray[randomIndex];

    // Extract the quote and author from the random quote object
    const quote = randomQuote.quote;
    const author = randomQuote.author;

    const quoteContainer = document.getElementById("quote");
    quoteContainer.innerHTML = `"${quote}"`
    
    const authorContainer = document.getElementById("author");
    authorContainer.innerHTML=`<h3>- ${author}</h3>`;

    // Output the random quote
    console.log("Random Quote: " + quote);
    console.log("Author: " + author);
    })
    .catch(error => {
      console.error('Error fetching JSON file:', error);
    });

    }
    