module.exports = (Franz) => {
  function getUnreadConversations() {
    let unreadConversations = 0;
    unreadConversations = parseInt(document.querySelector('#unread-conversations').innerHTML, 10);

    Franz.setBadge(unreadConversations);
  }

  Franz.loop(getUnreadConversations);
}
