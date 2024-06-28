document.getElementById('save-options').addEventListener('click', function() {
    const options = {
      google: document.getElementById('default-google').checked,
      bing: document.getElementById('default-bing').checked,
      duckduckgo: document.getElementById('default-duckduckgo').checked,
      yahoo: document.getElementById('default-yahoo').checked
    };
  
    chrome.storage.sync.set({ options: options }, function() {
      console.log('Options saved');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('options', function(data) {
      if (data.options) {
        document.getElementById('default-google').checked = data.options.google;
        document.getElementById('default-bing').checked = data.options.bing;
        document.getElementById('default-duckduckgo').checked = data.options.duckduckgo;
        document.getElementById('default-yahoo').checked = data.options.yahoo;
      }
    });
  });
  