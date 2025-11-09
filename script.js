const apiKey = 'YOUR_API_KEY'; // Replace with your News API key
const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const loader = document.getElementById('loader');

if (apiKey === 'YOUR_API_KEY' || apiKey === '') {
    alert('Please add your News API key to script.js');
    newsContainer.innerHTML = '<p>Please add your News API key to script.js to fetch news articles.</p>';
}

// Fetch latest tech news on page load
window.addEventListener('load', () => {
    if (apiKey !== 'YOUR_API_KEY' && apiKey !== '') {
        fetchNews('technology');
    }
});

// Fetch news when search button is clicked
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm && apiKey !== 'YOUR_API_KEY' && apiKey !== '') {
        fetchNews(searchTerm);
    }
});

async function fetchNews(query) {
    loader.style.display = 'block';
    newsContainer.innerHTML = '';
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
        if (response.status === 401) {
            throw new Error('Invalid API key. Please check your API key in script.js.');
        }
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = `<p>${error.message}</p>`;
    } finally {
        loader.style.display = 'none';
    }
}

function displayNews(articles) {
    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No news articles found.</p>';
        return;
    }
    articles.forEach(article => {
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');
        newsArticle.innerHTML = `
            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            <p>${article.description}</p>
        `;
        newsContainer.appendChild(newsArticle);
    });
}
