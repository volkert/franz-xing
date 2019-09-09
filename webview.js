module.exports = (Franz) => {
  function getUnreadConversations() {
    let unreadConversations = 0;
    let unreadConvElement = document.querySelector('#unread-conversations');
    
    // on logged-out, we do not have such an element, check first!
    if (unreadConvElement !== null && unreadConvElement.innerHTM) {
      unreadConversations = parseInt(unreadConvElement.innerHTML, 10);
    }

    Franz.setBadge(unreadConversations);
  }

  Franz.loop(getUnreadConversations);
}
