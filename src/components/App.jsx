import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';


import TopMenu from './TopMenu'
import Charts from './Charts';
import RightPanel from './RightPanel';
import FooterSummary from './FooterSummary';




export default class AppJSX extends Component {
    state = {
        dateFrom: '',
        dateTo: '',
        filteredData: [],
        incomeType: null,
        topMenuHeader: true
    }

    handleDateFrom = (event) => {
        this.setState({ dateFrom: event.target.value })
        // this.setState({ filteredData: this.props.data.filter(this.filtering)})
    }
    
    handleDateTo = (event) => {
        event.preventDefault()
        this.setState({ dateTo: event.target.value })
        
        // this.setState({ filteredData: this.props.data.filter(
            //     (elm) => { return elm.DataSesji >= this.state.dateFrom && elm.DataSesji <= this.state.dateTo })
            //     })
            
            if(this.state.incomeType === null) {
                alert('Choose income type')
            }
        }
        
        handleIncomeType = (event) => {
            this.setState({ incomeType: event.target.value })
        }
        
    handleClickRun = (event) => {
        console.log('click ', event);
        
        const dateFromCheck = this.props.data.map( elm => {
            if(elm.DataSesji === this.state.dateFrom){ return true }
        })
        const dateToCheck = this.props.data.map( elm => {
            if(elm.DataSesji === this.state.dateTo){ return true }
        })
        console.log('start ', this.state.dateFrom);
        console.log('end ', this.state.dateTo);
        

        if (this.state.topMenuHeader === true){
            this.setState( prev => ({ topMenuHeader: !prev.topMenuHeader }))
        } 
        
        // validate
        if (this.state.dateFrom >= this.state.dateTo) {
            return alert('Choose correct dates')
        }
        if(!dateFromCheck.includes(true)){
            return alert('Incorrect Start Date... Choose weekdays')
        }
        if(!dateToCheck.includes(true)){
            return alert('Incorrect End Date... Choose weekdays')
        }
    
        
        this.setState({ filteredData: this.props.data.filter(
            (elm) => { 
                return elm.DataSesji >= this.state.dateFrom && elm.DataSesji <= this.state.dateTo 
            }
            )
        })
    }
    
    
    render() {
        // console.log('from ', this.state.dateFrom);
        // console.log('to  ', this.state.dateTo);
        // console.log('filtered  ', this.state.filteredData);
        
        // console.log(this.state.dateFrom.includes(this.props.data.DataSesji) ? 'includez' : 'not includezzz');
        // this.props.data.forEach( (elm) => { return console.log(elm.DataSesji)})
        
        
        return(
            <div >
                <Container className='main' >
                    <Row>
                        <Col>
                            <TopMenu data={ this.props.data } 
                            dateFrom={ this.state.dateFrom } 
                            dateTo={ this.state.dateTo } 
                            handleDateFrom={ this.handleDateFrom } 
                            handleDateTo={ this.handleDateTo } 
                            handleIncomeType={ this.handleIncomeType }
                            topMenuHeader={ this.state.topMenuHeader }
                            handleClickRun={ this.handleClickRun }
                            />
                        </Col>
                    </Row>
                    <Row className='content'>
                        <Col>
                            <Charts 
                            data={this.state.filteredData} 
                            incomeType={ this.state.incomeType }
                            />
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
                            <FooterSummary 
                            data={this.state.filteredData} 
                            incomeType={ this.state.incomeType }
                            />
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

