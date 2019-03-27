import React, { Component } from 'react';
import { Table } from 'reactstrap';


export default class RightPanel extends Component {

    render(){

        const displayedData = this.props.data.map( elm => {
            return(
                    <tr >
                        <td> { elm.DataSesji } </td>
                        <td> { elm.ProwNettoKasPL } </td>
                    </tr>
            )
        })

        if (this.props.data.length === 0 || this.props.incomeType === null){
            return null
        } else {
        return(
            <div className='panel'>
                <Table>
                    <thead>
                    <tr>
                        <th>Data Sesji</th>
                        <th>{ this.props.incomeType === 'All' ? 'Commission & Interests' : this.props.incomeType } Value</th>
                    </tr>
                    </thead>
                        { displayedData }
                </Table>
            </div>
        )}
    }
}