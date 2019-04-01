import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';




class FooterBox extends Component {
    
    render(){
        const colorInPlus = '#cdf7ca'
        const colorInMinus = '#ffe2e7'
        
            return(
                    <div className='footerBox' >
                        <Card  style={{ backgroundColor: this.props.cardText > 0 ? colorInPlus : colorInMinus}} 
                                cardTitle={ this.props.cardTitle } 
                                cardSubtitle={ this.props.cardSubtitle } 
                                cardText={ this.props.cardText } 
                                handleIncomeType={ this.props.handleIncomeType }>
                            <CardBody className='summaryCard' >
                                <CardTitle className='cardTitle'>{ this.props.cardTitle }</CardTitle>
                                <CardSubtitle className='cardSubtitle'>{ this.props.cardSubtitle }</CardSubtitle>
                                <CardText className='cardText' >Change: { this.props.cardText } </CardText>
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
          
            const accounts = this.props.data.map( elm => {
                return elm.KlienciObrotAll
                })
            const numOfAcc = accounts[accounts.length - 1]
            const numOfAccNumber = <NumberFormat displayType='text' value={ numOfAcc } thousandSeparator=' ' />
            const numOfAccChange = numOfAcc - accounts[0] 
            
            const assets = this.props.data.map( elm => {
                return elm.AktywaALL
            })
            const assetsValue = (assets[assets.length - 1])
            const assetsValueNumber = <NumberFormat displayType='text' value={ Math.round(assetsValue) } thousandSeparator=' ' />
            
            const assetsValueChange =  assetsValue / assets[0]
            
            const clients = this.props.data.map( elm => {
                return elm.KlienciObrotKasowyPL
            })
            const activeClients = clients.reduce( (acc, cur) => (Number(acc) + Number(cur)), 0) / clients.length
            const activeClientsNumber = <NumberFormat displayType='text' value={ Math.round(activeClients) } thousandSeparator=' ' />
            const activeClientsChange = (activeClients - clients[0]) / activeClients * 100 
            
           const incomeType = this.props.data.map(elm => {
               if (this.props.incomeType === 'Commission') {
                   return elm.ProwNettoKasPL
               }
               if (this.props.incomeType === 'Interests') {
                   return elm.Odsetki_Netto
               }
               if (this.props.incomeType === 'All') {
                   return Number(elm.ProwNettoKasPL) + Number(elm.Odsetki_Netto)
               }
           })
            
            const incomeTypeSum = incomeType.reduce((acc, cur) => (Number(acc) + Number(cur)), 0)
            
            const incomeTypeSumNumber = <NumberFormat displayType='text' value={ Math.round(incomeTypeSum) } thousandSeparator=' ' />
            
            
            console.log('activeClientsChange ', this.props.CardText < 0);
            console.log('activeClientsChange ', activeClientsChange.toFixed(2) < 0);
            
          

            // if (this.props.data.length === 0 || this.props.incomeType === null){
            //     return null
            // } else {

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
                                <Row className='summaryContent'>
                                    <Col sm="3">
                                        <FooterBox 
                                        data={ this.props.data } 
                                        className='footerBox' 
                                        cardTitle='Number of accounts:' 
                                        cardSubtitle={ numOfAccNumber } 
                                        cardText={ numOfAccChange } 
                                        />
                                    </Col>
                                    <Col sm="3">
                                        <FooterBox 
                                        data={ this.props.data } 
                                        className='footerBox' 
                                        cardTitle='Assets:' 
                                        cardSubtitle={ assetsValueNumber } 
                                        cardText={ assetsValueChange.toFixed(2) + '%'} 
                                        />
                                    </Col>
                                    <Col sm="3">
                                        <FooterBox 
                                        data={ this.props.data } 
                                        className='footerBox' 
                                        cardTitle='Average active clients:' 
                                        cardSubtitle={ activeClientsNumber } 
                                        cardText={  activeClientsChange.toFixed(2) + '%' }
                                        
                                        />
                                    </Col>
                                    <Col sm="3">
                                        <FooterBox 
                                        data={ this.props.data } 
                                        className='footerBox'
                                        cardTitle={ this.props.incomeType === 'All' ? 'Commission & Interests:' : this.props.incomeType + ':'} 
                                        cardSubtitle={ incomeTypeSumNumber } 
                                        />
                                    </Col>
                                </Row>
                            </TabPane>
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
      
// }