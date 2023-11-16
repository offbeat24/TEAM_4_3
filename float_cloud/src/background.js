/*global chrome*/
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.token) {
      chrome.storage.local.set({ token: request.token }, function() {
        console.log('Token is saved in local storage.');
      });
    }
  }
);