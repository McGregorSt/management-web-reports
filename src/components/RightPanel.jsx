import React, { Component } from 'react'


export default class RightPanel extends Component {

    render(){

        const displayedData = this.props.data.map( elm => {
            return(
                <div>
                    <div style={{ padding: '20px', float: 'left' }} >
                        <span> { elm.DataSesji } </span>
                        <p> { elm.ProwNettoKasPL } </p>
                        {/* <h5>____________________</h5> */}
                    </div>
                </div>
            )
        })
        return(
            <div>

                { displayedData }

            </div>
        )
    }
}