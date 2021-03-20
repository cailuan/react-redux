import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {addThunk,addPromise,addOneSaga} from '../../Action/HomeAction.jsx'

const ModalComponent = (props)=>{
  return <div>
    <button onClick={()=>{
       props.dispatch(addThunk(props.count + 1))
    }}>ModalComponent {props.count }</button>
  </div>
}

function mapStateToProps(state){
  console.log(state)
  return {
      ...state
  }
}
export default connect(mapStateToProps)(ModalComponent)