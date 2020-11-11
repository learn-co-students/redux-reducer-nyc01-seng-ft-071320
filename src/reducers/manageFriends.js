export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let index = state.friends.findIndex(f => f.id === action.id)
            return {friends: state.friends.slice(0, index).concat(state.friends.slice(index+1))}
        default: return state
    }
}
