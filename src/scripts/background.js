try {
// Add event listener on installation
    chrome.runtime.onInstalled.addListener((r) => {
        console.log('Chrome extension successfully installed!');
        chrome.tabs.create({
            url: './src/html/onboarding.html'
        })
    });

// Add event listener on tab update
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        console.log(changeInfo.url && tab.active)
        if (changeInfo.status === 'complete') {
            chrome.scripting.executeScript({
                files: ['./src/scripts/Content.js'],
                target: {tabId: tab.id}
            })
        }
    })
}
catch(err) {
    // pass
}