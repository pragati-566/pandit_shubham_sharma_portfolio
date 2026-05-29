const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add CSS link
if (!html.includes('search.css')) {
  html = html.replace('<link rel="stylesheet" href="css/service-details.css">', '<link rel="stylesheet" href="css/service-details.css">\n  <link rel="stylesheet" href="css/search.css">');
}

// 2. Add Search Bar HTML
const searchHtml = `
      <!-- Premium Search Bar -->
      <div class="pooja-search-wrapper reveal">
        <div class="pooja-search-container">
          <span class="search-icon">🔍</span>
          <input type="text" id="poojaSearchInput" class="pooja-search-input" placeholder="पूजा खोजें | Search Poojas..." autocomplete="off">
          <button id="searchClearBtn" class="search-clear-btn" aria-label="Clear search">×</button>
        </div>
      </div>
      
      <!-- No Results Message -->
      <div id="noSearchResults" class="no-results-message" style="display: none;">
        <span class="no-results-icon">🪔</span>
        <p class="no-results-text">क्षमा करें, कोई सेवा नहीं मिली।</p>
        <p class="no-results-english">Sorry, no services found.</p>
      </div>

      <div class="services-grid">`;

html = html.replace('<div class="services-grid">', searchHtml);

fs.writeFileSync('index.html', html);
console.log("HTML modified successfully.");
