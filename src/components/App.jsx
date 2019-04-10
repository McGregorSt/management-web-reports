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
        topMenuHeader: true,
        YTD: [],
    }
    
    
    handleDateFrom = (event) => {
        this.setState({ dateFrom: event.target.value })
        // this.setState({ filteredData: this.props.data.filter(this.filtering)})
    }
    
    handleDateTo = (event) => {
        event.preventDefault()
        this.setState({ dateTo: event.target.value })
    
            
            
        }
        
        handleIncomeType = (event) => {
            this.setState({ incomeType: event.target.value })
        }
        
    handleClickRun = (event) => {        
        const dateFromCheck = this.props.data.map( elm => {
            if(elm.DataSesji === this.state.dateFrom){ return true }
        })
        const dateToCheck = this.props.data.map( elm => {
            if(elm.DataSesji === this.state.dateTo){ return true }
        })
        
        
        
        // validate
        if(this.state.incomeType === null) {
            return alert('Choose income type')
        }
        else if (this.state.dateFrom >= this.state.dateTo) {
            return alert('Choose correct dates \nStart Date must be < End Date')
            // return alert('Choose correct dates')
        }
        else if(!dateFromCheck.includes(true)){
            return alert('Incorrect Start Date \nChoose weekdays')
        }
        else if(!dateToCheck.includes(true)){
            return alert('Incorrect End Date \nChoose weekdays')
        }
        else if (this.state.topMenuHeader === true){
            this.setState( prev => ({ topMenuHeader: !prev.topMenuHeader }))
        } 
    
        
        this.setState({ filteredData: this.props.data.filter(
            (elm) => {
                console.log(elm.DataSesji)
                return elm.DataSesji >= this.state.dateFrom && elm.DataSesji <= this.state.dateTo 
            }
            ).sort((a, b) => (a.IDCzas - b.IDCzas))
        })
        this.setState({ YTD: this.props.data.filter(
            (elm) => { 
                return elm.DataSesji === '2018-12-28' 
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
                        <Col className='col-topMenu'>
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
                        <Col className='col-chart'>
                            <Charts 
                            data={this.state.filteredData} 
                            incomeType={ this.state.incomeType }
                            />
                        </Col>
                        <Col className='col-rightPanel'>
                            <RightPanel 
                            data={this.state.filteredData} 
                            incomeType={ this.state.incomeType }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-footer'>
                            <FooterSummary 
                            data={this.state.filteredData} 
                            incomeType={ this.state.incomeType }
                            ytd={ this.state.YTD }
                            dataYTD={ this.props.data }
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

