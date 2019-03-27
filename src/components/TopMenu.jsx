import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';


const IncomeType = ({ income, handleIncomeType }) => {
    
    return(
            <div>
                <h5>Choose income type:</h5>
                <select name="incomeType" className="incomeType" onChange={ handleIncomeType }>
                            <option value='null'></option>
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
render(){
    return(
        <div >
            <h5>Choose date range for report:</h5>
            <div className='dates'>
                <h6>
                    <span>Start Date</span> 
                    <input type='date' onChange={ this.props.handleDateFrom } className='inputDate' />
                </h6>
                <h6>
                    <span>End Date</span> 
                    <input type='date'  onChange={ this.props.handleDateTo } className='inputDate'/>
                </h6>
            </div>
        </div>
    )
}
}

export default class TopMenu extends Component {

    render() {
        return(
            <div className='topMenu'>
                <Container>
                    <Row>
                        <Col>
                            <IncomeType 
                            income={ ['All', 'Commission', 'Interests'] }
                            handleIncomeType={ this.props.handleIncomeType }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DateRange 
                            data={ this.props.data} 
                            dateFrom={ this.props.dateFrom } 
                            dateTo={ this.props.dateTo } 
                            handleDateFrom={ this.props.handleDateFrom } 
                            handleDateTo={ this.props.handleDateTo }  
                            
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}