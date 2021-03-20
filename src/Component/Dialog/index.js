import React,{memo,useEffect,useRef,useMemo} from 'react'
import ReactDOM from 'react-dom'
import './index.less'

const Dialog = memo((props)=>{
  const {visable,onClose,children,...otherProps} = props
  const modalRef = useRef(null)
  useEffect(()=>{
    console.log('dialog useEffect')
  },[])
  
  if(!modalRef.current){
    let container 
    console.log('dialog else')
    let modalContainer = document.querySelector('#modal')
    if(modalContainer){
      container =modalContainer
    }else{
      container = document.createElement('div');
      container.setAttribute('id','modal')
      document.body.appendChild(container)
    }
    modalRef.current = container
  }

  if(visable){
    return ReactDOM.createPortal(React.createElement(Misk,{
      onClose:onClose,
      ...otherProps
    },children)
    ,modalRef.current) 
  }else{
    return null
  }
})
const Misk = (props)=>{
  console.log(props,'props')
  const {onClose,children,onCancleMisk = true} = props
  return <div className="misk" onClick ={(e)=>{
    console.log(e)
  }}>
    <div className="content">
      {children}
    </div>
    <div className="closeIcon" onClick={
      ()=>{onClose && onClose()}
    }>
      X
    </div>
    </div>
}

export default Dialog


