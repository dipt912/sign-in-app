import { Actions, ActionTypes } from './action';
import { RegistrationState, initilaRegState  } from './state';



export const registrationReducer = (state: RegistrationState = initilaRegState , action: Actions) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN_REQUEST:
        case ActionTypes.REGISTER_REQUEST:
            return { ...state, isLoading: true };
        case ActionTypes.SIGN_IN_ERROR:
        case ActionTypes.REGISTER_ERROR:
            return { ...state, isLoading: false , isError: true , error: action.payload.error };
        case ActionTypes.SIGN_IN_SUCCESS:
        case ActionTypes.REGISTER_SUCCESS:
            return { ...state, isLoading: false , isRegister: true,  user: action.payload.user};
        default:
            return state;

    }
};

