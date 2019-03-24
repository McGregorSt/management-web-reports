import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';


const IncomeType = ({ income, handleIncomeType }) => {
    
    return(
            <div>
                <h6>Choose income type:</h6>
                <select name="incomeType" id="incomeType" onChange={ handleIncomeType }>
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
        <div className='dates'>
            <h6>
                <span>Start Date</span> 
                <input type='date' onChange={ this.props.handleDateFrom } className='inputDate'/>
            </h6>
            <h6>
                <span>End Date</span> 
                <input type='date'  onChange={ this.props.handleDateTo } className='inputDate'/>
            </h6>
        </div>
    )
}
}

export default class TopMenu extends Component {

    render() {
        return(
            <div>
                <Container>
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
                    <Row>
                        <Col>
                            <IncomeType 
                            income={ ['All', 'Commission', 'Interests'] }
                            handleIncomeType={ this.props.handleIncomeType }
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}