export const ADD_MEMBER = "ADD_MEMBER";

export const addMember = (newMember) => {
    return({type: ADD_MEMBER, payload:newMember});
}