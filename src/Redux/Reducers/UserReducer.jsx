import {
  ADD_USER,
  DELETE_USER,
  LOG_OUT,
  SAVE_UPDATE,
  UPDATE,
  USER_DATA,
} from "../Actions/ActionTypes";


const initialSatate = {
  userData: [],
  allData: [],
  updateData: [],
  isLogined: false,
  accessToken: "",
};
export const userReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        userData: [action.data],
        isLogined: true,
        accessToken: action.data.accessToken,
      };
    case ADD_USER:
      return { ...state, allData: [...state.allData, action.data] };
    case DELETE_USER:
      state.allData.splice(action.index, 1);
      return { ...state, allData: [...state.allData] };

    case UPDATE:
      let a = state.allData.filter((post, id) => post.id === action.data.id);
      return { ...state, updateData: a };

    case SAVE_UPDATE:
      return {
        ...state,
        allData: state.allData.map((content, i) =>
          content.id === action.data.id
            ? {
                id: action.data.id,
                name: action.data.name,
                email: action.data.email,
                technology: action.data.technology,
                salary: action.data.salary,
                exprience: action.data.exprience,
              }
            : content
        ),
      };
    case LOG_OUT:
      return {
        ...state,
        userData: [],
        isLogined: false,
        accessToken: '',
      };

    default:
      return { ...state };
  }
};
