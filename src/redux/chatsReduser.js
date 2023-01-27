const GETDATA =() => 'GET-DATA';

let initialState = {
chatsinfo: [
{ id: 0, name: "Alina" },
{ id: 1, name: "Natalia" },
{ id: 2, name: "Sashko" },
{ id: 3, name: "Denis" },
{ id: 4, name: "Denis" },
{ id: 5, name: "Denis" },
{ id: 6, name: "Denis" },
{ id: 7, name: "Denis" },
{ id: 8, name: "Denis" },
],};
const chatsReducer =(state= initialState, action)=>{
  
    return state;
}



export const GetDataActionCreating =
 () => ({ type: GETDATA});

export default chatsReducer;