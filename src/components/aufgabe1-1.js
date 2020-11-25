
import React, { Component } from 'react';

class Sectionstate extends Component {
    state = { 
        qustion :"Why is react great",
        answer:"fast lerning curve",
        isVisible: false
     }
     handleIncrement= () =>{
         this.setState({ isVisible: !this.state.isVisible  });
     }
    render() { 
        return ( 
            <div className='div_border'>
               <h1> {this.state.qustion}</h1>
               <button onClick={this.handleIncrement}>+</button>
                  <div id='answer' style={{ display: this.state.isVisible ? "block" : "none" }}>
                        <p >{this.state.answer}</p>
                  </div>
            </div>
         );
    }
}
 
export default Sectionstate;