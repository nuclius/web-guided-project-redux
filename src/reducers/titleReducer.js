import { UPDATE_TITLE, TOGGLE_EDITING} from './../actions/titleActions';

export const initialState = {
    appName: "Redux Text",
    title: "Dragon Member List 🐲",
    editing: false
  };
  
const titleReducer = (state = initialState, action) => {
  console.log("3. Passes action into reducer.", action);
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    case TOGGLE_EDITING:
      console.log("4. Execute toggle editing action.");
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};

export default titleReducer;