export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const newFriendsList = [...state.friends];
      const removedFriend = state.friends.findIndex(
        (friend) => friend.id === action.id
      );
      newFriendsList.splice(removedFriend, 1);
      return { friends: newFriendsList };
    default:
      return state;
  }
}
