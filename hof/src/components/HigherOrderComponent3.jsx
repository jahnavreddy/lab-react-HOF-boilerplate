import React, { Component } from 'react'

class HigherOrderComponent3 extends Component {
  render() {
    const { data } = this.props
    let filtereddata = data.filter(elem => elem.user_type==="Designer")

    return (
        <React.Fragment>
            <h1>Based on UserType </h1>
            <div  className='maindiv'>
            {filtereddata.map((elem) => {
                return (<div key={elem.id}>
                    <div className='flex'>
                        <p>id: {elem.id}</p>
                        <p>name : {elem.name}</p>
                        <p>User_type: {elem.user_type}</p>
                    </div>
                </div>
                )
            })}
            </div>
        </React.Fragment>
    )
  }
}

export default HigherOrderComponent3