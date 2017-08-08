/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import Header from './pcHeader';
import Footer from './pcFooter'
import Content from './pcMainContent'

export default class pc_Index extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}/**
 * Created by admin on 2017/7/11.
 */
