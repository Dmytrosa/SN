const SETUSERDATA = () => 'SET_USER_DATA';

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETUSERDATA:
             {
            return {
              ...state,
             ...action.data,
             isAuth: true,
            }
        }
        default:
            return state;
    }
}

export const SetAuthUserData =
  (userId, email, login) => ({ type: SETUSERDATA, data:{userId,email, login} });

export default authReducer;