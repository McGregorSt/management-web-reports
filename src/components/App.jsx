import React, { Component } from 'react'



class RightPanel extends Component {

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
        
        console.log('range ', this.props.data);
        
        const filteredData = this.props.data.filter(filtering)
        console.log('fff', filteredData);
        


        return(
            <div>
                <h2>
                    Start Date
                </h2>
                <input type="date" name="" id="" onChange={ this.handleDateFrom } />
                <h2>
                    End Date
                </h2>
                <input type="date" name="" id="" onChange={ this.handleDateTo } />
                <RightPanel data={ filteredData } style={{ padding: '40px' }} />
                <FooterSummary data={ filteredData } />
            </div>
        )
    }
}

class TopMenu extends Component {

    render() {
        return(
            <div>
                 <IncomeType income={ ['Commission', 'Interests', 'All'] } />
                 <DateRange data={ this.props.data } />
            </div>
        )
    }
}

class FooterBox extends Component {

    render(){
        return(
            <div>
                { this.props.children }
            </div>
        )
    }

    
}

class FooterSummary extends Component {
    render(){
            const accounts = this.props.data.map( elm => {
                return elm.LiczbaOtwartychRachunkow
            })
            console.log('acc ', accounts);
            
            const numOfAcc = accounts[accounts.length - 1]
            console.log('numOoAcc ', numOfAcc);
            const numOfAccChange = numOfAcc - accounts[0] 


            const assets = this.props.data.map( elm => {
                return elm.AktywaALL
            })
            console.log(assets);
            
            const assetsValue = assets[assets.length - 1]
            console.log(assetsValue, '  ', assets[0]);
            
            const assetsValueChange = Number(assetsValue) / Number(assets[0])

            console.log(assetsValueChange);

            const clients = this.props.data.map( elm => {
                return elm.KlienciObrotAll
            })
            console.log(clients);
            
            const activeClients = clients[clients.length - 1]
            
            const activeClientsChange = (activeClients - clients[0]) / activeClients * 100 + ' %'

            console.log(activeClientsChange);
            

        

        return(
            <div>
                <FooterBox data={ this.props.data } >
                    <div>
                        <span>Number of accounts:</span>
                        <h4> { numOfAcc } </h4>
                        <span>Change in this period:</span>
                        <h5> { numOfAccChange } </h5>
                    </div>
                </FooterBox>
                <FooterBox data={ this.props.data } >
                    <div>
                        <span>Assets Value:</span>
                        <h4> { assetsValue } </h4>
                        <span>Change in this period:</span>
                        <h5> { assetsValueChange } </h5>
                    </div>
                </FooterBox>
                <FooterBox data={ this.props.data } >
                    <div>
                        <span>Active Clients:</span>
                        <h4> { activeClients } </h4>
                        <span>Change in this period:</span>
                        <h5> { activeClientsChange } </h5>
                    </div>
                </FooterBox>
                <FooterBox data={ this.props.data } >
                    <div>
                        <span>Income Type:</span>
                        <h4> { activeClients } </h4>
                        <span>Avg in this period:</span>
                        <h5> { activeClientsChange } </h5>
                        <span>Cumulated income</span>
                        <h5> { activeClientsChange } </h5>
                    </div>
                </FooterBox>
            </div>
        )
    }
}


class AppJSX extends Component {

    render() {
        return(
            <div>
                <TopMenu data={ this.props.data } />
                {/* <FooterSummary data={ this.props.data } /> */}
            </div>
        )
    }
}

export default AppJSX

//  pytania

// 1. podział na komponenty
// 2. export zmiennych??
// 3. charty
// 4. jak wysłać na Gita

