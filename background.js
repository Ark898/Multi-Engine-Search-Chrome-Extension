chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'search') {
      const query = request.query;
      const engines = request.engines;
      const searchUrls = {
        google: `https://www.google.com/search?q=${query}`,
        bing: `https://www.bing.com/search?q=${query}`,
        duckduckgo: `https://duckduckgo.com/?q=${query}`,
        yahoo: `https://search.yahoo.com/search?p=${query}`      
      };
  
      for (const [engine, url] of Object.entries(searchUrls)) {
        if (engines[engine]) {
          chrome.tabs.create({ url: url });
        }
      }
    }
  });
  