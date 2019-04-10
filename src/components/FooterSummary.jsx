import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';




class FooterBox extends Component {
    
    render(){
        const colorInPlus = '#9FAF90'
        const colorInMinus = '#E2B1B1'
        
        if( this.props.className === 'footerBox 14'){
            
            return(
                    // <div className='footerBox' >
                        <Card  style={{ backgroundColor: '#4A92C9', color: '#EAEAEA'}} 
                                cardTitle={ this.props.cardTitle } 
                                cardSubtitle={ this.props.cardSubtitle } 
                                cardText={ this.props.cardText } 
                                handleIncomeType={ this.props.handleIncomeType }>
                            <CardBody className='summaryCard' >
                                <CardTitle className='cardTitle'>{ this.props.cardTitle }</CardTitle>
                                <CardSubtitle className='cardSubtitle'>{ this.props.cardSubtitle }</CardSubtitle>
                                <CardText style={{fontStyle: 'italic', marginBottom: '20px' }} > Cumulated in period </CardText>
                            </CardBody>
                        </Card>
                    /* </div> */
            )
        }
        else {
            
            return(
                    // <div className='footerBox' >
                        <Card  style={{ backgroundColor: this.props.cardText > 0 ? colorInPlus : colorInMinus}} 
                                cardTitle={ this.props.cardTitle } 
                                cardSubtitle={ this.props.cardSubtitle } 
                                cardText={ this.props.cardText } 
                                handleIncomeType={ this.props.handleIncomeType }>
                            <CardBody className='summaryCard' >
                                <CardTitle className='cardTitle'>{ this.props.cardTitle }</CardTitle>
                                <CardSubtitle className='cardSubtitle'>{ this.props.cardSubtitle }</CardSubtitle>
                                <CardText className='cardText' >
                                
                                    <span>Change in period:</span>
                                        <CardSubtitle 
                                        className='cardText-cardSubtitle'>{ this.props.cardText > 0 ? '+' + this.props.cardText + '%': this.props.cardText + '%' }
                                        </CardSubtitle>
                                    
                                
                                
                                </CardText>
                                <CardText className='cardText' >  </CardText>
                            </CardBody>
                        </Card>
                    /* </div> */
            )
        }
         

        }
    }

class FooterBoxYTD extends Component {
    
    render(){
        const colorInPlus = '#9FAF90'
        const colorInMinus = '#E2B1B1'
        
        if(this.props.className === 'footerBox 14'){
            
            return(
                    // <div className='footerBox' >
                        <Card  style={{ backgroundColor: '#4A92C9', color: '#EAEAEA'}} 
                                cardTitle={ this.props.cardTitle } 
                                cardSubtitle={ this.props.cardSubtitle } 
                                cardText={ this.props.cardText } 
                                handleIncomeType={ this.props.handleIncomeType }>
                            <CardBody className='summaryCard' >
                                <CardTitle className='cardTitle'>{ this.props.cardTitle }</CardTitle>
                                <CardSubtitle className='cardSubtitle'>{ this.props.cardSubtitle }</CardSubtitle>
                                <CardText style={{fontStyle: 'italic', marginBottom: '20px' }} > Cumulated in YTD </CardText>
                            </CardBody>
                        </Card>
                    // </div>
            )
        }
        else {
            
            return(
                    // <div className='footerBox' >
                        <Card  style={{ backgroundColor: this.props.cardText > 0 ? colorInPlus : colorInMinus}} 
                                cardTitle={ this.props.cardTitle } 
                                cardSubtitle={ this.props.cardSubtitle } 
                                cardText={ this.props.cardText } 
                                handleIncomeType={ this.props.handleIncomeType }>
                            <CardBody className='summaryCard' >
                                <CardTitle className='cardTitle'>{ this.props.cardTitle }</CardTitle>
                                <CardSubtitle className='cardSubtitle'>{ this.props.cardSubtitle }</CardSubtitle>
                                <CardText className='cardText' >
                                    <span>Change in period:</span>
                                        <CardSubtitle 
                                            className='cardText-cardSubtitle'>{ this.props.cardText > 0 ? '+' + this.props.cardText + '%': this.props.cardText + '%' }
                                        </CardSubtitle>
                                </CardText>
                                <CardText className='cardText' >  </CardText>
                            </CardBody>
                        </Card>
                    // </div>
            )
        }
         

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

        // accounts
            const accounts = this.props.data.map( elm => {
                return elm.KlienciObrotKasowyPL * 13 + 212
                })

            const accountsYTD = this.props.ytd.map( elm => {
                return elm.KlienciObrotKasowyPL * 13 + 212
            })
            
                
            const numOfAcc = accounts[0]
            const numOfAccNumber = <NumberFormat displayType='text' value={ numOfAcc } thousandSeparator=' ' />
            const numOfAccChange = (numOfAcc - accounts[accounts.length - 1]) / accounts[accounts.length - 1]
            
            const numOfAccNumberYTD = <NumberFormat displayType='text' value={ numOfAcc - accountsYTD[0] } thousandSeparator=' ' />
            const numOfAccChangeYTD = (numOfAcc - accountsYTD[0]) / accountsYTD[0] *100

            console.log('props  ', accountsYTD);
            console.log('props2  ', numOfAcc);
            

            

        // assets
            const assets = this.props.data.map( elm => {
                return elm.AktywaALL
            })
            const assetsYTD = this.props.ytd.map( elm => {
                return elm.AktywaALL
            })
            
            const assetsValue = assets[0]
            const assetsValueNumber = <NumberFormat displayType='text' value={ assetsValue } thousandSeparator=' ' />
            const assetsValueChange =  assetsValue / assets[assets.length - 1]
            
            const assetsValueNumberYTD = <NumberFormat displayType='text' value={ assetsValue - assetsYTD[0]} thousandSeparator=' ' />
            const assetsValueChangeYTD =  (assetsValue - assetsYTD[0]) / assetsYTD[0] * 100
        

        // active clients
            const clients = this.props.data.map( elm => {
                return elm.KlienciObrotAll
            })

            const activeClients = clients[0]
            // const activeClients = clients.reduce( (acc, cur) => (Number(acc) + Number(cur)), 0) / clients.length
            const activeClientsNumber = <NumberFormat displayType='text' value={ activeClients } thousandSeparator=' ' />
            const activeClientsChange = (activeClients - clients[clients.length - 1]) / activeClients * 100 
        
        // total income
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
           const incomeTypeYTD = this.props.dataYTD.map(elm => {
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
            const incomeTypeSumYTD = incomeTypeYTD.reduce((acc, cur) => (Number(acc) + Number(cur)), 0)
            
            const incomeTypeSumNumber = <NumberFormat displayType='text' value={ incomeTypeSum } thousandSeparator=' ' />
            const incomeTypeSumNumberYTD = <NumberFormat displayType='text' value={ incomeTypeSumYTD } thousandSeparator=' ' />
            
            
            


            
          

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
                                <Row >
                                    <div className='summaryContent'>
                                        <Col sm="3" className='footerBox 11'>
                                            <FooterBox 
                                            data={ this.props.data } 
                                            className='footerBox 11' 
                                            cardTitle='Number of accounts:' 
                                            cardSubtitle={ numOfAccNumber } 
                                            cardText={ numOfAccChange.toFixed(2) } 
                                            />
                                        </Col>
                                        <Col sm="3" className='footerBox 12'>
                                            <FooterBox 
                                            data={ this.props.data } 
                                            className='footerBox 12' 
                                            cardTitle='Assets:' 
                                            cardSubtitle={ assetsValueNumber } 
                                            cardText={ assetsValueChange.toFixed(2) } 
                                            />
                                        </Col>
                                        <Col sm="3" className='footerBox 13'>
                                            <FooterBox 
                                            data={ this.props.data } 
                                            className='footerBox 13'
                                            cardTitle='Active clients:' 
                                            cardSubtitle={ activeClientsNumber } 
                                            cardText={  activeClientsChange.toFixed(2) }
                                            />
                                        </Col>
                                        <Col sm="3" className='footerBox 14'>
                                            <FooterBox 
                                            data={ this.props.data } 
                                            className='footerBox 14'
                                            cardTitle={ this.props.incomeType === 'All' ? 'Commission & Interests:' : this.props.incomeType + ':'} 
                                            cardSubtitle={ incomeTypeSumNumber } 
                                            />
                                        </Col>
                                    </div>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <div className="summaryContent">
                                        <Col sm="3" className='footerBox 11'>
                                            <FooterBox
                                            data={ this.props.data } 
                                            className='footerBox 11' 
                                            cardTitle='Vol change of accounts:' 
                                            cardSubtitle={ numOfAccNumberYTD } 
                                            cardText={ numOfAccChangeYTD.toFixed(2) } 
                                            />
                                        </Col>
                                        <Col sm="3" className='footerBox 12'>
                                            <FooterBox
                                            data={ this.props.data } 
                                            className='footerBox 12' 
                                            cardTitle='Vol change of assets:' 
                                            cardSubtitle={ assetsValueNumberYTD } 
                                            cardText={ assetsValueChangeYTD.toFixed(2) } 
                                            />
                                        </Col>
                                        <Col sm="3" className='footerBox 13'>
                                            <FooterBox
                                            data={ this.props.data } 
                                            className='footerBox 13' 
                                            cardTitle='Active clients YTD:' 
                                            cardSubtitle={ numOfAccNumber } 
                                            cardText={ numOfAccChange.toFixed(2) } 
                                            />
                                        </Col>
                                        <Col sm="3" className='footerBox 14'>
                                            <FooterBox
                                            data={ this.props.data } 
                                            className='footerBox 14' 
                                            cardTitle={ this.props.incomeType === 'All' ? 'Commission & Interests:' : this.props.incomeType + ':' } 
                                            cardSubtitle={ incomeTypeSumNumberYTD } 
                                            />
                                        </Col>
                                    </div>
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