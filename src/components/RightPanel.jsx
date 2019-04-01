import React, { Component } from 'react';
import { Table } from 'reactstrap';
import NumberFormat from 'react-number-format';


export default class RightPanel extends Component {

    render(){

        const displayedData = this.props.data.map( elm => {
            if (this.props.incomeType === 'Commission'){
                return(
                        <tr >
                            <td> { elm.DataSesji } </td>
                            <td className='rightPanelData'> <NumberFormat displayType='text' value={ Math.round(elm.ProwNettoKasPL) } thousandSeparator=' ' /> </td>
                        </tr>
                )
            }
            if (this.props.incomeType === 'Interests'){
                return(
                    <tr >
                            <td> { elm.DataSesji } </td>
                            <td className='rightPanelData'><NumberFormat displayType='text' value={ Math.round(elm.Odsetki_Netto) } thousandSeparator=' ' /> </td>
                        </tr>
                )
            }
            if (this.props.incomeType === 'All'){
                return(
                    <tr >
                            <td> { elm.DataSesji } </td>
                            <td className='rightPanelData'> <NumberFormat displayType='text' value={ Math.round(Number(elm.ProwNettoKasPL) + Number(elm.Odsetki_Netto)) } thousandSeparator=' ' /> </td>
                        </tr>
                )
            }
        })

        // if (this.props.data.length === 0 || this.props.incomeType === null){
        //     return null
        // } else {
        return(
            <div className='panel'>
                <Table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th className='rightPanelData'>{ this.props.incomeType === 'All' ? 'Commission & Interests' : this.props.incomeType } Value</th>
                    </tr>
                    </thead>
                        { displayedData }
                </Table>
            </div>
        )}
    }
// }