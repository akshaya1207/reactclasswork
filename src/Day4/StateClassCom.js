import React,{Component} from 'react'

class StateClassCom extends Component
{
    state={
        color:"blue",
        price:121
    }
    handleChange=()=>{this.setState({color:"yellow"})}
    render()
    {
        return(
            <div>
                <h1>the color i have is {this.state.color},the price is{this.state.price}</h1>
                <button onClick={this.handleChange}>click me</button>
            </div>
        )
    }
}
export default StateClassCom;