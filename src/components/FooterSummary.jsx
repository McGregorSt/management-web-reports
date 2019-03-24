import React, { Component } from 'react'


class FooterBox extends Component {

    render(){
        return(
            <div>
                { this.props.children }
            </div>
        )
    }

    
}

export default class FooterSummary extends Component {
    render(){
            const accounts = this.props.data.map( elm => {
                return elm.LiczbaOtwartychRachunkow
            })
            const numOfAcc = accounts[accounts.length - 1]
            const numOfAccChange = numOfAcc - accounts[0] 

            const assets = this.props.data.map( elm => {
                return elm.AktywaALL
            })
            const assetsValue = assets[assets.length - 1]
            const assetsValueChange = Number(assetsValue) / Number(assets[0])

            const clients = this.props.data.map( elm => {
                return elm.KlienciObrotAll
            })
            const activeClients = clients[clients.length - 1]
            const activeClientsChange = (activeClients - clients[0]) / activeClients * 100 + ' %'
        

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