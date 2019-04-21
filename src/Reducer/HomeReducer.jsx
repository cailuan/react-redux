const HomeReducer = (state,action)=>{
    console.log(state,action)
    switch (action.type) {
        case 'ADD_SUCCESS':
            const newState1 = Object.assign({},state,action)
            return newState1;
        case 'ADD_PROMISE':
        // console.log(999)
            const newState2 = Object.assign({},state,action)
            newState2.count = action.payload
            return newState2;
        case 'USER_FETCH_SUCCEEDED':
            const newState3 = Object.assign({},state,action)
            return newState3;
        case 'TAKE_FEATCH':
            const newState4 = Object.assign({},state,action)
            return newState4;
        default:
            return state;
    }
}
export default HomeReducer;