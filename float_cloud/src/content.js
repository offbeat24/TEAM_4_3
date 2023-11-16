/*global chrome*/
const token = localStorage.getItem('yourTokenKey');


chrome.runtime.sendMessage({ token: token });
