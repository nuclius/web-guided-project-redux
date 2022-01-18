const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
    ]
}

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case("ADD_MEMBER"):
        this.setState({
            ...this.state,
            members: [...this.members, {name: newMember, dragonStatus: true}]
          });
            return {
                ...state,
                members: 
            }
        default:
            return state;
    }
}

export default reducer;