import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';


import TopMenu from './TopMenu'
import Charts from './Charts';
import RightPanel from './RightPanel';
import FooterSummary from './FooterSummary';




export default class AppJSX extends Component {
    state = {
        dateFrom: new Date(),
        dateTo: '2019-03-08',
        filteredData: [],
        incomeType: null,
    }

    handleDateFrom = (event) => {
        this.setState({ dateFrom: event.target.value })
        this.setState({ filteredData: this.props.data.filter(this.filtering)})

    }
    
    handleDateTo = (event) => {
        this.setState({ dateTo: event.target.value })
        this.setState({ filteredData: this.props.data.filter(this.filtering)})
    }

    handleIncomeType = (event) => {
        this.setState({ incomeType: event.target.value })
    }
        
    filtering = (elm) => {
        return elm.DataSesji >= this.state.dateFrom && elm.DataSesji <= this.state.dateTo
    }

    render() {
        console.log(this.state.filteredData)
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <TopMenu data={ this.props.data } 
                            dateFrom={ this.state.dateFrom } 
                            dateTo={ this.state.dateTo } 
                            handleDateFrom={ this.handleDateFrom } 
                            handleDateTo={ this.handleDateTo } 
                            handleIncomeType={ this.handleIncomeType }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Charts data={this.state.filteredData} />
                        </Col>
                        <Col>
                            <RightPanel 
                            data={this.state.filteredData} 
                            incomeType={ this.state.incomeType }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                        SUMMARY
                            <FooterSummary data={this.state.filteredData} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


//  pytania

// 1. podział na komponenty
// 2. export zmiennych?? 
// 3. charty
// 4. jak wysłać na Gita

