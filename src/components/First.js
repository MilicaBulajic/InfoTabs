import React, { Component } from 'react';
import data from '../data/car_purchases.json'
import './../App.css';

class First extends Component {
    render() {
        return (
            <div>
                {data.map((dataDetail)=>{
                    return (

                        <table className="table-bordered" key={dataDetail.id}>
                        <tbody>
                            <tr>
                            <td>{dataDetail.id}</td>
                            <td>{dataDetail.car}</td>
                            <td>{dataDetail.payment_method}</td>
                            <td>{dataDetail.currency}</td>
                            <td>{dataDetail.city}</td>
                            </tr>
                        </tbody>
                        </table>

                    )
                })}
            </div>
            
        );
    }
}

export default First;