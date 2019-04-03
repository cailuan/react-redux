const HomeReducer = (state,action)=>{
    console.log(89)
    switch (action.type) {
        case 'ADD_SUCCESS':
            const newState1 = Object.assign({},state,action)
            return newState1;
        case 'ADD_PROMISE':
        // console.log(999)
            const newState2 = Object.assign({},state,action)
            return newState2;
        default:
            return state;
    }
}
export default HomeReducer;