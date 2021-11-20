

const initialState ={
    Email:'',
    Password:''
}

const loginReducer = (state=initialState,action)=>{

    switch(action.type){
        case "adduser":return{ ...state,
            Email:action.payload.email,
            Password:action.payload.Password
        }
        default:return state
    }
}

export default loginReducer