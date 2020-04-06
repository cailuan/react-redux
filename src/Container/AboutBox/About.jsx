import React,{Component} from 'react'
import { Button } from 'antd';
import {themes,ThemeContext,ThemeConsumer} from '../Provider'
import './style.less'

function ThemeTogglerButton() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
      <ThemeConsumer.Consumer>
        {({theme, toggleTheme}) => {
            console.log(theme,toggleTheme)
          return <button
            onClick={toggleTheme}
            // style={{backgroundColor: theme.background}}
            >
            Toggle Theme
          </button>
        }}
      </ThemeConsumer.Consumer>
    );
  }
  

class About extends React.Component {
    render() {
      // Use a Provider to pass the current theme to the tree below.
      // Any component can read it, no matter how deep it is.
      // In this example, we're passing "dark" as the current value.
      return (
        <div>
        <ThemeContext.Provider value={{age:'9'}}>
          <Toolbar />
         
        </ThemeContext.Provider>
        {/* <ThemeConsumer.Provider > */}
            <ThemeTogglerButton />
        {/* </ThemeConsumer.Provider> */}
        </div>
      );
    }
  }

  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  class ThemedButton extends React.Component {
      constructor(){
          super()
          this.state={
              countAbled : [1,9]
          }
          this.clickButton = this.clickButton.bind(this)
          console.log(themes)
      }
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    clickButton(){
        
        const countAgen = this.state.countAbled
        console.log(countAgen)
        countAgen.push(0)
        // this.setState({
        //     countAgen: countAgen.push(0)
        // })
    }
    render() {
      console.log(this.context,this.props)
      return <div>
            <Button theme={this.context} >value</Button>
            <button onClick={this.clickButton}>button</button>>
            {
                this.state.countAbled.map((item)=>{
                    return item
                })
            }
          </div>;
    }
  }


export default About