import React, { Component } from 'react'
import { Container, Row, Col, Button, Input} from 'reactstrap';


const IncomeType = ({ income, handleIncomeType, topMenuHeader }) => {
    
    return(
            <div>
                <h5 
                    className='topMenuHeader' 
                    style={{ display:  topMenuHeader ===  true ? 'block' : 'none'}}
                >
                Choose income type:
                </h5>
                <Input type="select" name="select" id="exampleSelect" className="incomeType" onChange={ handleIncomeType }>
                    <option value='null'></option>
                        { income.map( type => {
                            return(
                                <option key={ type } value={ type }>{ type }</option>
                            )
                        })}
                </Input>
                {/* <select name="incomeType" className="incomeType" onChange={ handleIncomeType }>
                </select> */}
            </div>
    ) 
}

class DateRange extends Component {
render(){
    return(
        <div >
            <h5 
                className='topMenuHeader' 
                style={{ display:  this.props.topMenuHeader ? 'block' : 'none'}}
                >
            Choose date range for report:
            </h5>
            <div style={{ color: 'red', fontSize: '12px' }}>
                <span>Available dates for the report: 27-12-2018 to 27-03-2019</span>
            </div>
            <div className='dates'>
                <h6>
                    <span>Start Date</span> 
                    <Input type='date' onChange={ this.props.handleDateFrom } className='inputDate' />
                </h6>
                <h6>
                    <span>End Date</span> 
                    <Input type='date'  onChange={ this.props.handleDateTo } className='inputDate'/>
                </h6>
                <h6>
                    <Button color="info" onClick={ this.props.handleClickRun }>Run</Button>
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
                            topMenuHeader={ this.props.topMenuHeader }
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
                            topMenuHeader={ this.props.topMenuHeader }
                            handleClickRun={ this.props.handleClickRun }
                            />
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        )
    }
}