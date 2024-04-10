import React, { Component } from 'react'

class HigherOrderComponent6 extends Component {
    render() {
        const { data } = this.props
        let filtereddata = data.filter(elem => elem.user_type=="Designer").reduce((a,b)=>a.years+b.years)
    
        return (
            <React.Fragment>
                <h1>Experience of Designers </h1>
                <div  className='maindiv'>
                <input type="text" value={filtereddata} readOnly/>
                </div>
            </React.Fragment>
        )
      }
}

export default HigherOrderComponent6