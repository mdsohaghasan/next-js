import React from 'react'

const Contact  = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Contact Page</h1>  
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="text" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Massege</span>
                  </label>
                  <input type="text" placeholder="Massege" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
     </div>
  )
}

export default Contact 