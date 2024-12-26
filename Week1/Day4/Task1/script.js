// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Simulated search function
function performSearch(query) {
    const resultsDiv = document.getElementById('results');
    const fakeData = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Elderberry',
        'Fig',
        'Grapes',
        'Honeydew',
        'Kiwi',
        'Lemon',
        'Mango',
        'Orange',
        'Peach',
        'Strawberry',
        'Watermelon'
    ];

    // Filter results based on the query
    const filteredResults = fakeData.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredResults.length > 0) {
        resultsDiv.innerHTML = filteredResults
            .map(item => `<div class="result-item">${item}</div>`)
            .join('');
        resultsDiv.style.display = 'block';
    } else {
        resultsDiv.innerHTML = '<div>No results found</div>';
        resultsDiv.style.display = 'block';
    }
}
const searchInput = document.getElementById('search');
const debouncedSearch = debounce(function () {
    const query = searchInput.value.trim();
    if (query) {
        performSearch(query);
    } else {
        document.getElementById('results').style.display = 'none';
    }
}, 500);

// Add event listener to the search input
searchInput.addEventListener('input', debouncedSearch);


