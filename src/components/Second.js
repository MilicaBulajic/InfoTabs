import React, { Component } from 'react';
import data from '../data/uploads.json'
import './../App.css';

class Second extends Component {
    render() {
        return (
            <div>
                {data.map((dataUpload)=>{
                    return (

                        <table className="table-bordered" key={dataUpload.id}>
                        <tbody>
                            <tr>
                            <td>{dataUpload.id}</td>
                            <td>{dataUpload.username}</td>
                            <td>{dataUpload.filename}</td>
                            <td>{`${dataUpload.datetime.date}, ${dataUpload.datetime.time}`}</td>

                            </tr>
                        </tbody>
                        </table>

                    )
                })}
            </div>
            
        );
    }
}

export default Second;