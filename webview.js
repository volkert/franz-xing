module.exports = (Franz) => {
  function getUnreadConversations() {
    let unreadConversations = 0;
    unreadConversations = document.querySelector('#unread-conversations').innerHTML;

    Franz.setBadge(unreadConversations);
  }

  Franz.loop(getUnreadConversations);
}