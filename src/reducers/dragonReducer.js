const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
    ]
}

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case("ADD_MEMBER"):
            return state;
        default:
            return state;
    }
}

export default reducer;