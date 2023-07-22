// Function makes HTTP GET request and returns random quote
async function getQuote() {
    try {
        const url = `https://api.quotable.io/random?maxLength=80`;

        // Get response
        const response = await fetch(url);
        const data = await response.json();
        const result = [data['content'], data['author']];

        return result;
    } catch (error) {
        console.error(error);
        return ['Error', 'Error'];
    }
}

// Get elements of the page
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('button');

// Change quote when the button is pressed
button.addEventListener('click', async () => {
    try {
        const newQuote = await getQuote();

        quoteElement.innerHTML = '"' + newQuote[0] + '"';
        authorElement.innerHTML = newQuote[1];
    } catch (error) {
        console.error(error);
}});
