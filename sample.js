// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// creator : Sajin M Aboobakkar
// email: sajinrules@gmail.com
// linkedIn : https://in.linkedin.com/in/sajinaboobakkar
// facebook: https://www.facebook.com/sajinrules
// phone:+91 8891 73 43 78

// The onClicked callback function.
function onClickHandler(info, tab) {
  console.log('info:',info.selectionText);
  console.log('tab:',tab);
  var newURL = "http://olam.in/Dictionary/en_ml/"+info.selectionText;
    chrome.tabs.create({ url: newURL },function(res){
      console.log('res:',res);
      chrome.tabs.getSelected(res.windowId, function(response){
        console.log('response:',response);
      })
    });
  
  // chrome.windows.create({'url': 'redirect.html','width':300,'height':300,'left':500,'top':200,'type': 'popup'}, function(window) {
  //   chrome.runtime.sendMessage({ details: "test messge" }, function(response) {
  //     console.log('response:',response);
  //   });
  // });
  
};

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   console.log('message:',message);
//   console.log('sender:',sender);
//   console.log('sendResponse:',sendResponse);
//     // Do something
// })

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["selection"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Translate selected to Malayalam";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
    console.log("'" + context + "' item:" + id);
  }

  
});