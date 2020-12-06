import React, { Component } from 'react'
import Title from './Title';
import {faCocktail,FaHiking,FaShuttleVan,FaBeer, FaCocktail} from 'react-icons/fa';




export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'Free Cocktails',
                Info: "gjahgj ghghtjghkksrhg ssreghgfngh hjkjrhrdfhd"
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                Info: "gjahgjhgjhdgh dhgkhdfgklshd fklghfklghfklhglkf hgklfhgkfghf"
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free Shuttle Van',
                Info: "gjahgjhgjhdghdh gkhdfgklshdfklgh fklghfklhglkfhgkl fhgkfghf"
            },
            {
                icon:<FaBeer/>,
                title:'Strong Beer',
                Info: "gjahgjhgjhdg hdhgkhdfgklshdfklghfklghf klhglkfhgklfhgk fghf"
            }
        ]
    }
    render() {
        return (
            <section className='services'>

                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return (
                        <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.Info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
