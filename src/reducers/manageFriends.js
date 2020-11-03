export function manageFriends(state={friends: []}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return state={...state, friends: [...state.friends, action.friend]};
        case "REMOVE_FRIEND":
            let foundFriend = state.friends.find(friend => friend.id === action.id);
            let newArray = [...state.friends]
            newArray.splice(state.friends.indexOf(foundFriend), 1)
            return state={...state, friends: newArray};
        default:
            return state;
    }
}