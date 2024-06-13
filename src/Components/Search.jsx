import React, { useState } from 'react'
import Navar from './Navar'
import axios from 'axios'

const Search = () => {
const [data,changeData]=useState(
    {
        "name":""
    }
)
const [result,setResult]=useState([])
const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/search",data).then(
        (response)=>{
            setResult(response.data)
        }
    ).catch()
}
const deletePatient=(id)=>{
    let input={"_id":id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("success")
            } else {
                alert("error")
            }
        }
    ).catch().finally()
}
  return (
    <div>
        <Navar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-d-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValue}>Search</button>
                        </div>
                    </div>
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
                                    result.map(
                                        (value,index)=>{
                                            return <tr>
                                                <td>{value.name}</td>
                                                <td>{value.age}</td>
                                                <td>{value.Adress}</td>
                                                <td>{value.doctor}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{deletePatient(value._id)}}>Delete</button></td>
                                                
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

export default Search