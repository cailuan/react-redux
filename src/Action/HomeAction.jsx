// import { type } from "os";

export const addThunk = (count)=>{
    // console.log(909)
    return (dispatch)=>{
        console.log(4)
        // const time = {name}
        dispatch({
            type :'ADD_SUCCESS',
            time :1,
            count: ++count
        })
    }
}

export const addPromise=(count)=>{
    return{
        type : 'ADD_PROMISE',
        payload : new Promise(resolve=>{
            console.log(1234)
            resolve(++count)
            // return ++count
        }),
        
    }
}


// export const addPromise=(count)=>{
//     return{
//         type : 'ADD_PROMISE',
//         payload : fetch('/action/api/url?timestamp=1553437725424').then(response=>{
//             console.log(12,'fetch',response)
//             return  ++count
//             if(response.status === '200'){
//                 return response.json().then(res => {
//                     console.log(res,'data')
//                     return res
//                 })
//             }
//         })
        
//     }
// }

