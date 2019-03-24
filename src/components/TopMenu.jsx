import React, { Component } from 'react'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


import RightPanel from './RightPanel'
import FooterSummary from './FooterSummary'
import Charts from './Charts'




const IncomeType = ({ income }) => {
    
    return(
            <div>
                <h4>Choose income type:</h4>
                <select name="incomeType" id="">
                            <option value=""></option>
                            { income.map( type => {
                                return(
                                    <option key={ type } value={ type }>{ type }</option>
                                )
                            })}
                </select>
            </div>
    ) 
}

class DateRange extends Component {

state = {
    dateFrom: '',
    dateTo: ''
}

handleDateFrom = (event) => {
    this.setState({ dateFrom: event.target.value })
}

handleDateTo = (event) => {
    this.setState({ dateTo: event.target.value })
}

render(){
    
    const filtering = (elm) => {
        return elm.DataSesji >= this.state.dateFrom && elm.DataSesji <= this.state.dateTo
    }
    
    const filteredData = this.props.data.filter(filtering)
    console.log('fff', filteredData);
    


    return(
        <div>
            <h2>
                Start Date
            </h2>
                <input type='date' onChange={ this.handleDateFrom } />
            <h2>
                End Date
            </h2>
                <input type='date'  onChange={ this.handleDateTo } />

            <Charts data={ filteredData } />
            <RightPanel data={ filteredData } style={{ padding: '40px' }} />
            <FooterSummary data={ filteredData } />
        </div>
    )
}
}

export default class TopMenu extends Component {

    render() {
        return(
            <div>
                <IncomeType income={ ['Commission', 'Interests', 'All'] } />
                <DateRange data={ this.props.data } />
            </div>
        )
    }
}