chrome.runtime.onMessage.addListener(function(message, sender, callback) {
  console.log("[onMessage]", message, sender)

  switch(message.type) {
    case 'getTabs':
      chrome.tabs.query({ currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(sender.tab.id, { type: 'receivedTabs', tabs })
      })
    case 'selectTab':
      chrome.tabs.update(message.id, {active: true})
    case 'closeTab':
      chrome.tabs.remove(message.id)
  }
})
