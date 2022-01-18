export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";

export function toggleEditing() {
    console.log("2. Return the action object.");
    return { type: TOGGLE_EDITING };
}

export const updateTitle = newTitle => {
    return { type: UPDATE_TITLE, payload: newTitle };
};