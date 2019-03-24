import React, { Component } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts'

export default class Charts extends Component {

    render(){
        return(
            <div className='chart'>
                <LineChart width={700} height={350} data={ this.props.data }
                    margin={{top: 15, right: 30, left: 0, bottom: 5}}>
                    <XAxis dataKey="DataSesji"/>
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="ProwNettoKasPL" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="ProwBruttoKasPL" stroke="#82ca9d" />
                </LineChart>
            </div>
        )
    }
}