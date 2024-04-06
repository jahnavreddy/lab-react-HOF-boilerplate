import React, { Component } from 'react'

export default class HigherOrderComponent5 extends Component {
    render() {
        const { data } = this.props
        let filtereddata = data.filter(elem => elem.age>=28 && elem.age<50)

        return (
            <React.Fragment>
                <h1>Data Based on Age </h1>
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