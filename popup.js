document.getElementById('fetchTitleBtn').addEventListener('click', () => {
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      
      if (activeTab.url.startsWith('chrome://')) {
        
        document.getElementById('title').textContent = "Cannot access chrome:// pages";
      } else {
        const tabTitle = activeTab.title;
        
        document.getElementById('title').textContent = tabTitle;
      }
    });
});
  