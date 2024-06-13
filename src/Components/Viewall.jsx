import React, { useEffect, useState } from 'react'
import Navar from './Navar'
import axios from 'axios'

const Viewall = () => {
    const [data,changeData]=useState(
        [] )
        const fetchData=()=>{
            axios.post("http://localhost:8080/view",data).then(
                (response)=>{
                    changeData(response.data)
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
        }
        useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                
                                    <th>Patient Name</th>
                                    <th>age</th>
                                    <th>Address</th>
                                    <th>Doctor name</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                                <td>{value.name}</td>
                                                <td>{value.age}</td>
                                                <td>{value.Adress}</td>
                                                <td>{value.doctor}</td>
                                            </tr>
                                        }
                                    )
                                }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall