import { GetAuthUserDataThunk } from "./authReducer";
const INITSUCCESS =() =>'INIT_SUCCESS';

let initialState = {
  isInit: false,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITSUCCESS:
             {
            return {
              ...state,
             isInit: true,
            }
        }
        default:
            return state;
    }
}

export const InitSuccess =
  () => ({ type: INITSUCCESS });

  export const InitApp = () => (dispatch) =>{
   let promise = dispatch(GetAuthUserDataThunk())
   
   promise.then(()=>{dispatch(InitSuccess())})
    
  }



export default appReducer;