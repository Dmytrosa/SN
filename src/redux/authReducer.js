import { AuthApi } from "../api/api";

const SETUSERDATA = () => 'SET_USER_DATA';
const TRUEISAUTH = () =>'APPDATE_IS_AUTH' ;
const FALSEISAUTH = () =>'DELETE_IS_AUTH' ;
const SETFAIL =() =>'SET_FAIL';

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth: false,
    fail: null
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
       case SETFAIL:
            {
              debugger
           return {
               ...state,
            fail: action.messege,
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
  export const SetFail =
  (messege) => ({ type: SETFAIL, messege} );

  export const LoginThunk = (email, password, remember) =>{ return (dispatch) =>{
    AuthApi.Login(email, password, remember)
       .then(data => {
        if(data.resultCode === 0 ){
        dispatch(TrueIsAuth(data));
        }
        if(data.resultCode === 1 ){
          dispatch(SetFail(data.messages));
          }
        if(data.resultCode === 10 ){
          dispatch(SetFail(data.messages));
            }  
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