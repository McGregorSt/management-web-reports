import React, { Component } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts'
// import NumberFormat from 'react-number-format';


// class CustomizedTooltip extends Component {
//     render(){
//         const dataToChart = this.props.data

//         if(this.props.incomeType === 'Commission'){
//             return(
//                 <ul>
//                     { dataToChart.map( elm => {
//                        return (
//                            <li> <NumberFormat value={ elm.ProwNettoKasPL } thousandSeparator=' ' /></li>
//                        ) 
//                     })
//                     }
//                 </ul>
//             )

//         }
//     }
// }


export default class Charts extends Component {

    render(){
        console.log(this.props.data)
        // const dataToChart = this.props.data.map(elm => {
        //     return elm
        // })
        
        
        if (this.props.data.length === 0 || this.props.incomeType === null){return null} 
            if(this.props.incomeType === null){
                return(
                    <div className='chart'>
                        <LineChart width={650} height={385} data={ this.props.data }
                            margin={{top: 15, right: 10, left: 10, bottom: 5}}>
                            <XAxis dataKey="DataSesji"/>
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="" stroke="#8884d8" strokeWidth='3' activeDot={{r: 10}}/>
                            <Line type="monotone" dataKey="" stroke="#82ca9d" strokeWidth='3' />
                        </LineChart>
                    </div>
                )
            }
            if(this.props.incomeType === 'Commission'){
                return(
                    <div className='chart'>
                        <LineChart width={650} height={385} data={ this.props.data }
                            margin={{top: 15, right: 10, left: 10, bottom: 5}}>
                            <XAxis dataKey="DataSesji" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip dataKey='IDCzas' className='chartsTooltip' contentStyle={{ backgroundColor: 'black', color: 'white' }} 
                            
                            />
                            {/* <Legend display='none'/> */}
                            <Line 
                            type="monotone" 
                            dataKey="ProwNettoKasPL"
                            stroke="#758E4F" 
                            strokeWidth='3' 
                            activeDot={{r: 10}}
                            />
                            <Line 
                            dataKey="ProwNettoTermPL" 
                            stroke="#F6AE2D" 
                            strokeWidth='3' 
                            />
                            <Line 
                            dataKey="ProwNettoKasZagr" 
                            stroke="#F26419" 
                            strokeWidth='3' 
                            />
                            {/* <Line type="monotone" dataKey="ProwBruttoKasPL" stroke="#82ca9d" strokeWidth='3' /> */}
                        </LineChart>
                    </div>
                )
            }
            if(this.props.incomeType === 'Interests'){
                return(
                    <div className='chart'>
                        <LineChart width={650} height={385} data={ this.props.data }
                            margin={{top: 15, right: 10, left: 10, bottom: 5}}>
                            <XAxis dataKey="DataSesji"/>
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }}/>
                            <Legend />
                            <Line type="monotone" dataKey="Odsetki_Netto" stroke="#F26419" strokeWidth='3' activeDot={{r: 10}}/>
                            {/* <Line type="monotone" dataKey="ProwBruttoKasPL" stroke="#82ca9d" strokeWidth='3' /> */}
                        </LineChart>
                    </div>
                )
            }
            if(this.props.incomeType === 'All'){
                return(
                    <div className='chart'>
                        <LineChart width={650} height={385} data={ this.props.data }
                            margin={{top: 15, right: 10, left: 10, bottom: 5}}>
                            <XAxis dataKey="DataSesji"/>
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }}/>
                            <Legend />
                            <Line type="monotone" dataKey="Odsetki_Netto" stroke="#F26419" strokeWidth='3' activeDot={{r: 10}}/>
                            <Line type="monotone" dataKey="ProwNettoKasPL" stroke="#758E4F" strokeWidth='3' />
                        </LineChart>
                    </div>
                )
            }
        }
    }