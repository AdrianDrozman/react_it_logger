import { GET_TECHS, ADD_TECH, DELETE_TECH, TECH_ERROR,SET_LOADING } from '../actions/types';

const initialState = {
    techs:null,
    loading:false,
    error:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
        return{
            ...state,
            techs:action.payload,
            loading:false
        }
    case SET_LOADING:
        return{
            ...state,
            loading:false
        }
    case TECH_ERROR:
        return{
            ...state,
            error:action.payload
        }
    default:
      return state;
  }
};