import React, { Component } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts'

export default class Charts extends Component {

    render(){
        
        if (this.props.data.length === 0 || this.props.incomeType === null){
            return null
        } else {
        return(
            <div className='chart'>
                <LineChart width={800} height={375} data={ this.props.data }
                    margin={{top: 15, right: 30, left: 30, bottom: 5}}>
                    <XAxis dataKey="DataSesji"/>
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="ProwNettoKasPL" stroke="#8884d8" strokeWidth='3' activeDot={{r: 10}}/>
                    <Line type="monotone" dataKey="ProwBruttoKasPL" stroke="#82ca9d" strokeWidth='3' />
                </LineChart>
            </div>
        )}
    }
}