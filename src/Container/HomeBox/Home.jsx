import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {addThunk,addPromise,addOneSaga} from '../../Action/HomeAction.jsx'
import {ThemeContext} from '../Provider'

class Home extends Component{
    constructor(){
        super()
        this.state={
            count : 0
        }
        this.buttonClick = this.buttonClick.bind(this)
    }
    buttonClick(name){
        const {count} = this.props
        if(name === 'thunk'){
            this.props.addOneThunk(count)
        }else if(name == 'promise'){
            this.props.addOnePromise(count)
        }else if(name == 'saga'){
            this.props.addOneSaga(count)
        }else if(name == 'sagaDele'){
            this.props.addDeleSaga(count)
        }
        // console.log(this.props)
       
    }
    static contextType = ThemeContext;
    render(){
        console.log(this.context)
        const {count} = this.props
        return(<div> 
            <header style={this.context}>
                这是一个头
            </header>
            <button onClick={()=>this.buttonClick('thunk')}>thunk</button>
            <button onClick={()=>this.buttonClick('promise')}>promise</button>
            <button onClick={()=>this.buttonClick('saga')}>saga</button>
            <button onClick={()=>this.buttonClick('sagaDele')}>saga-</button>
            <div>计数{count}</div>
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
        addOneThunk(count){
            // console.log(7878)
            dispatch(addThunk(count))
        },
        addOnePromise(count){
            dispatch(addPromise(count))
        },
        addOneSaga(count){
            dispatch({
                type:'USER_FETCH_REQUESTED',
                count:count
            })
        },
        addDeleSaga(count){
            dispatch({
                type:'TAKE_FEATCH_ADMIN',
                count : count
            })
        }
    }
}

const HomeConnect = connect(mapStateToProps,mapDispatchToProps)(Home)

export default HomeConnect;