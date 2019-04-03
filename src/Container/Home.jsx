import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {addThunk,addPromise} from '../Action/HomeAction.jsx'

class Home extends Component{
    constructor(){
        super()
        this.buttonClick = this.buttonClick.bind(this)
    }
    buttonClick(name){
        if(name === 'thunk'){
            this.props.addOneThunk()
        }else if(name == 'promise'){
            this.props.addOnePromise()
        }
        // console.log(this.props)
       
    }
    render(){
        return(<div> 
            <header>
                这是一个头
            </header>
            <button onClick={()=>this.buttonClick('thunk')}>点击我</button>
            <button onClick={()=>this.buttonClick('promise')}>promise</button>
        </div>)
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        ...state
    }
}
function mapDispatchToProps(dispatch){
    return{
        addOneThunk(){
            // console.log(7878)
            dispatch(addThunk())
        },
        addOnePromise(){
            dispatch(addPromise())
        }
    }
}

const HomeConnect = connect(mapStateToProps,mapDispatchToProps)(Home)

export default HomeConnect;