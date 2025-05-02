chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    const originalUrl = details.url;
    if (originalUrl.startsWith("https://mattermost.") && !originalUrl.startsWith("https://mattermost.com")) {
      const transformedUrl = originalUrl.replace("https://", "mattermost://");
      chrome.tabs.update(details.tabId, { url: transformedUrl });
    }
  }, { url: [{ hostContains: "mattermost" }] });