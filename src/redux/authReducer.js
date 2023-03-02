import { AuthApi } from "../api/api";

const SETUSERDATA = () => 'SET_USER_DATA';
const TRUEISAUTH = () =>'APPDATE_IS_AUTH' ;
const FALSEISAUTH = () =>'DELETE_IS_AUTH' ;

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
        case TRUEISAUTH:
             {
            return {
                ...state,
             isAuth: true,
            }
        }
        case FALSEISAUTH:
            {
           return {
               ...state,
            isAuth: false,
           }
       }
        default:
            return state;
    }
}

export const SetAuthUserData =
  (userId, email, login, isAuth) => ({ type: SETUSERDATA, data:{userId,email, login, isAuth} });
export const TrueIsAuth =
  () => ({ type: TRUEISAUTH} );
export const FalseIsAuth =
  () => ({ type: FALSEISAUTH} );

  export const LoginThunk = (email, password, remember) =>{ return (dispatch) =>{
    AuthApi.Login(email, password, remember)
       .then(data => {
        dispatch(TrueIsAuth(data));
       });
  }}

  export const LogoutThunk = () =>{ return (dispatch) =>{
    AuthApi.Logout()
       .then(data => {
        if(data.resultCode === 0 ){
            dispatch(FalseIsAuth());
        }
        
       });
  }}


export default authReducer;