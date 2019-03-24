import React, { Component } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts'

export default class Charts extends Component {

    render(){
        return(
            <div>
                <LineChart width={600} height={300} data={ this.props.data }
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
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