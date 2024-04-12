async function fetchQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quoteContainer.innerHTML = `<blockquote class="blockquote">
                                    <p class="mb-0">${data.content}</p>
                                    <footer class="blockquote-footer">${data.author}</footer>
                                </blockquote>`;
}

document.addEventListener('DOMContentLoaded', () => {

    fetchQuote();
    setInterval(fetchQuote, 5000);
});