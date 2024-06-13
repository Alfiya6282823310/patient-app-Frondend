import React, { useState } from 'react'

const Add = () => {
  const [data,changeData]=useState(
    {
      "name":"",
      "age":"",
      "Adress":"",
      "doctor":""
    }
  )
  const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(data)
    
  }
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Patient Name</label>
                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Age</label>
                <input type="number" className="form-control" name='age' value={data.age} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Adress</label>
                <input type="text" className="form-control" name='Adress' value={data.Adress} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Doctor Name</label>
                <input type="text" className="form-control" name='doctor' value={data.doctor} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success" onClick={readValue}>Submit</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>    
  )
}

export default Add