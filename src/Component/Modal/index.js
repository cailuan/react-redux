import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {addThunk,addPromise,addOneSaga} from '../../Action/HomeAction.jsx'
import ModalComponent from './component'

// const Modal = (props)=>{
//   console.log('modal',props)
//   let contair = document.createElement('div')
//   document.body.appendChild(contair)
//   return ReactDOM.render(<div>
//     <button onClick={()=>{
//        props.dispatch(addThunk(props.count + 1))
//      }}>{props.count}</button>
//      <ModalComponent/>
//   </div>,contair) 
// }

// function mapStateToProps(state){
//   console.log(state)
//   return {
//       ...state
//   }
// }
// export default connect(mapStateToProps)(Modal)

const Dialog = (props)=>{
  console.log('dialog',props)
  let contair = document.createElement('div')
  document.body.appendChild(contair)
  return ReactDOM.createPortal(<div>
     <button onClick={()=>{
       props.dispatch(addThunk(props.count + 1))
     }}>{props.count}</button>
     <ModalComponent/>
  </div>,contair) 
}
function mapStateToProps(state){
  console.log(state)
  return {
      ...state
  }
}

export default connect(mapStateToProps)(Dialog) 