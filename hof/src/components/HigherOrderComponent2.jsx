import React, { Component } from 'react'

class HigherOrderComponent2 extends Component {
    render() {
        const { data } = this.props
        console.log(data)
        return (
            <React.Fragment>
                <h1>All Items of userData </h1>
                <div  className='maindiv'>
                {data.map((elem) => {
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

export default HigherOrderComponent2