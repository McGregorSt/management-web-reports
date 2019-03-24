import React, { Component } from 'react'



import TopMenu from './TopMenu'




export default class AppJSX extends Component {

    render() {
        return(
            <div>
                <TopMenu data={ this.props.data } />
            </div>
        )
    }
}


//  pytania

// 1. podział na komponenty
// 2. export zmiennych?? 
// 3. charty
// 4. jak wysłać na Gita

