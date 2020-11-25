import React, { Component } from 'react';

class State2 extends Component {
    state = { 
        qustion:"Why is React great",
        answer:"Fast Lerning Curvue",
        textanswer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque assumenda quidem deserunt ea modi fugit nesciunt minima magni molestias culpa earum, similique officia ullam voluptatem? Nesciunt aliquam dolorem mollitia cum? ",


        isVisible1 : false,
        isVisible2 : false,
        isVisible3 : false,
        isVisible4 : false,
        isVisible5 : false,
        isVisible6 : false

     }
     handleText1 =() =>{
         this.setState({isVisible1: !this.state.isVisible1})
     }
     handleText2 =() =>{
        this.setState({isVisible2: !this.state.isVisible2})
    }
    handleText3 =() =>{
        this.setState({isVisible3: !this.state.isVisibl3e})
    }
    handleText4 =() =>{
        this.setState({isVisible4: !this.state.isVisible4})
    }
    handleText5 =() =>{
        this.setState({isVisible5: !this.state.isVisible5})
    }
    handleText6 =() =>{
        this.setState({isVisible6: !this.state.isVisible6})
    }

    render() { 
        return ( 
           <div className="why">
               <div className="con">
                        <h1>{this.state.qustion}</h1>
                        <button id="plus" onClick={this.handleText}>+</button>
                    <div style={{display :this.state.isVisible1 ? "block" : "none"}}>
                        <p>{this.state.answer}</p>
                        <button onClick={this.handleText2}>+</button>
                    </div>

                     <div style={{display: this.state.isVisible2 ? "block" : "none"}}>
                        <p> {this.state.textanswer}</p>
                    </div>
        

               </div>
           </div>
         );
    }
}
 
export default State2;

