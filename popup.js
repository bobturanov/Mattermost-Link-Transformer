document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");

  // Load the current state
  chrome.storage.local.get("extensionEnabled", (data) => {
    toggleSwitch.checked = data.extensionEnabled !== false; // Default to enabled
  });

  // Update the state when the switch is toggled
  toggleSwitch.addEventListener("change", () => {
    const newState = toggleSwitch.checked;
    chrome.storage.local.set({ extensionEnabled: newState }, () => {
      console.log(`Extension is now ${newState ? "enabled" : "disabled"}`);
    });
  });
});