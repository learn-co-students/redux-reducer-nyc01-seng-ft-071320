export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return ({...state, 
                friends: [...state.friends, action.friend]
            })
        case 'REMOVE_FRIEND':
            const byeFriend = [...state.friends].filter(el => el.id != action.id)
            return ({...state, 
                friends: [...byeFriend]
            })
        default: 
            return state
    }
}
