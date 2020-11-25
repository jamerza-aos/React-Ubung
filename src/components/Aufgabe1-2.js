import React, { Component } from 'react';

class Counter  extends Component {
    state = { 
        coonter: 0
     }
     handlecoonter1= () =>{
         this.setState({coonter : this.state.coonter + 1})
     }

     handlecoonter2= () =>{
        this.setState({coonter : this.state.coonter - 1})
    }

    handlecoonter3= () =>{
        this.setState({coonter :0})
    }



    render() { 
        return ( 
               <section className="one"> 
                    <h1 className="cc">Counter</h1>
            <div className="dd">
                <p>{this.state.coonter}</p>
                <button onClick={this.handlecoonter1}>+</button>
                <button onClick={this.handlecoonter2}>-</button>
                <button onClick={this.handlecoonter3}>Rest</button>
            </div>
            </section>
         );
    }
}
export default Counter;
 
