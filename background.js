chrome.webNavigation.onBeforeNavigate.addListener(
  function (details) {
    chrome.storage.local.get("extensionEnabled", (data) => {
      if (data.extensionEnabled !== false) { // Default to enabled
        const originalUrl = details.url;
        if (originalUrl.startsWith("https://mattermost.") && !originalUrl.startsWith("https://mattermost.com")) {
          const transformedUrl = originalUrl.replace("https://", "mattermost://");
          chrome.tabs.update(details.tabId, { url: transformedUrl });
        }
      }
    });
  },
  { url: [{ hostContains: "mattermost" }] }
);