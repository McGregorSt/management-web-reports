import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';




class FooterBox extends Component {
    
    render(){
       
            return(
                    <div >
                        <Card className='summaryCard' cardTitle={ this.props.cardTitle } cardSubtitle={ this.props.cardSubtitle } cardText={ this.props.cardText } handleIncomeType={ this.props.handleIncomeType }>
                            <CardBody>
                                <CardTitle className='cardTitle'>{ this.props.cardTitle }</CardTitle>
                                <CardSubtitle className='cardSubtitle'>{ this.props.cardSubtitle }</CardSubtitle>
                                <CardText className='cardText'>Change : { this.props.cardText } </CardText>
                            </CardBody>
                        </Card>
                    </div>
            )

        }
    }

export default class FooterSummary extends Component {
    
    state = {
        activeTab: '1'
      };

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    
      render(){
          console.log('dataaa   ', this.props.data);
          
          const accounts = this.props.data.map( elm => {
              return elm.KlienciObrotAll
            })
            const numOfAcc = accounts[accounts.length - 1]
            const numOfAccChange = numOfAcc - accounts[0] 

            const assets = this.props.data.map( elm => {
                return elm.ObrotKasPL
            })
            const assetsValue = <NumberFormat value={ assets[assets.length - 1] } displayType={'text'} thousandSeparator=' ' />
            const assetsValueChange = assetsValue / assets[0]

            const clients = this.props.data.map( elm => {
                return elm.KlienciObrotAll
            })
            const activeClients = clients.reduce( (acc, cur) => (acc + cur), 0) / clients.length
            const activeClientsChange = (activeClients - clients[0]) / activeClients * 100
            
            console.log('cl ', clients );
            console.log(clients.length);
            
            console.log('avg ', activeClients);
            
            
            
            if (this.props.data.length === 0 || this.props.incomeType === null){
                return null
            } else {

            return(
            <div className='tabMenu'>
                    <div >
                        <Nav tabs >
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                                >
                                Daily Summary
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                                >
                                Year To Date Summary
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div >
                        <TabContent activeTab={this.state.activeTab} >
                            <TabPane tabId="1">
                                <Row className='summaryConten'>
                                    <Col sm="3">
                                        <FooterBox 
                                        data={ this.props.data } 
                                        className='footerBox' 
                                        cardTitle='Number of accounts:' 
                                        cardSubtitle={ numOfAcc } 
                                        cardText={ numOfAccChange } />
                                    </Col>
                                    <Col sm="3">
                                        <FooterBox 
                                        data={ this.props.data } 
                                        className='footerBox' 
                                        cardTitle='Assets:' 
                                        cardSubtitle={ assetsValue } 
                                        cardText={ assetsValueChange.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 }) + ' %'} />
                                    </Col>
                                    <Col sm="3">
                                        <FooterBox 
                                        data={ this.props.data } 
                                        className='footerBox' 
                                        cardTitle='Average active clients:' 
                                        cardSubtitle={ activeClients.toLocaleString(undefined, { maximumFractionDigits: 0 }) } 
                                        cardText={ activeClientsChange.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 }) + ' %'} />
                                    </Col>
                                    <Col sm="3">
                                        <FooterBox 
                                        data={ this.props.data } 
                                        className='footerBox'
                                        cardTitle={ this.props.incomeType === 'All' ? 'Commission & Interests' : this.props.incomeType } 
                                        cardSubtitle={ numOfAcc } 
                                        cardText={ numOfAccChange.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 }) + ' %'} />
                                    </Col>
                                </Row>
                            </TabPane>
                            { console.log('hIncome ', this.props.handleIncomeType) }
                            <TabPane tabId="2">
                                <Row>
                                <Col sm="4">
                                    <FooterBox data={ this.props.data } className='footerBox'/>
                                </Col>
                                <Col sm="4">
                                    <FooterBox data={ this.props.data } className='footerBox'/>
                                </Col>
                                <Col sm="4">
                                    <FooterBox data={ this.props.data } className='footerBox'/>
                                </Col>
                                </Row>
                                
                            </TabPane>
                        </TabContent>
                    </div>


                    {/* <FooterBox data={ this.props.data } />
                    <FooterBox data={ this.props.data } />
                    <FooterBox data={ this.props.data } />
                    <FooterBox data={ this.props.data } /> */}
            
            </div>
        )
                }
    }
      
}