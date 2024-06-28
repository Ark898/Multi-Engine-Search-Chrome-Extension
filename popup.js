document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-query').value;
    const engines = {
      google: document.getElementById('google').checked,
      bing: document.getElementById('bing').checked,
      duckduckgo: document.getElementById('duckduckgo').checked,
      yahoo: document.getElementById('yahoo').checked
    };
  
    chrome.runtime.sendMessage({ action: 'search', query: query, engines: engines });
  });
  