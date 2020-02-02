import React, { Component } from 'react';
import data from '../data/users.json'
import './../App.css';

class Third extends Component {
    render() {
        return (
            <div>
                {data.map((dataDetail)=>{
                    return (

                        <table className="table-bordered" key={dataDetail.id}>
                        <tbody>
                            <tr>
                            <td>{dataDetail.id}</td>
                            <td>{dataDetail.first_name}</td>
                            <td>{dataDetail.last_name}</td>
                            <td>{dataDetail.email}</td>
                            </tr>
                        </tbody>
                        </table>

                    )
                })}
            </div>
            
        );
    }
}

export default Third;