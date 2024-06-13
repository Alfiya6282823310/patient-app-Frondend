import React, { useState } from 'react'

const Viewall = () => {
    const [data,changeData]=useState(
        [
            {"name":"anu","age":23,"Adress":"aluva","doctor":"aaa"}
        ]
    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>age</th>
                                    <th>Address</th>
                                    <th>Doctor name</th>
                                </tr>
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