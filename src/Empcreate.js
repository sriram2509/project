
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    
    const[id_input_fm_1_firstname,firstnamechange]=useState("");
    const[id_input_fm_1_lastname,lastnamechange]=useState("");
    const[id_input_fm_1_title,titlechange]=useState("");
    const[id_input_fm_1_gender,genderchange]=useState("");
    const[id_input_fm_1_nic,nicchange]=useState("");
    const[id_input_fm_1_dateofbirth,dateofbirthchange]=useState("");
    const[id_input_fm_1_contactnumber,contactnumberchange]=useState("");
    const[id_input_fm_1_email,emailchange]=useState("");
    const[id_input_fm_1_department,departmentchange]=useState("");
    const[id_input_fm_1_designation,designationchange]=useState("");
    const[id_input_fm_1_nationality,nationalitychange]=useState("");
    const[id_input_fm_1_address,addresschange]=useState("");
    const[id_input_fm_1_country,countrychange]=useState("");
    const[id_input_fm_1_city,citychange]=useState("");
    const[id_input_fm_1_profilepicture,profilepicturechange]=useState("");
    const[id_input_fm_1_description,descriptionchange]=useState("");
    const[id_input_fm_1_remarks,remarkschange]=useState("");

    const[active,activechange]=useState(true);
   


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id_input_fm_1_firstname ,id_input_fm_1_lastname,id_input_fm_1_title,id_input_fm_1_gender,id_input_fm_1_nic,id_input_fm_1_dateofbirth,id_input_fm_1_contactnumber,id_input_fm_1_email,id_input_fm_1_department,id_input_fm_1_designation,id_input_fm_1_nationality,id_input_fm_1_address,id_input_fm_1_country,id_input_fm_1_city,id_input_fm_1_profilepicture,id_input_fm_1_description,id_input_fm_1_remarks,active};
      

      fetch("",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h1></h1>
                                <h4>Employee Create</h4>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                   

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input id="id_input_fm_1_firstname" placeholder="Enter FirstName" type="text" required value={id_input_fm_1_firstname}   onChange={e=>firstnamechange(e.target.value)} className="form-control"></input>
                                        {id_input_fm_1_firstname.length===0 && <span className="text-danger">Enter the firstname</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input id="id_input_fm_1_lastname" placeholder="Enter LastName" type="text" required value={id_input_fm_1_lastname}  onChange={e=>lastnamechange(e.target.value)} className="form-control"></input>
                                        {id_input_fm_1_lastname.length===0  && <span className="text-danger">Enter the lastname</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <select id='id_input_fm_1_title' required onChange={e=>titlechange(e.target.value)} className="form-control" >
                                                <option>-select-</option>
                                                <option value={"1"}> Mr</option>
                                                <option value={"2"}> Miss</option>
                                            </select>
                                        {id_input_fm_1_title.length===0  && <span className="text-danger">Enter the title</span>} 
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <select id='id_input_fm_1_gender' required onChange={e=>genderchange(e.target.value)} className="form-control" >
                                                <option>-select-</option>
                                                <option value={"1"}> Male</option>
                                                <option value={"2"}> Female</option>
                                            </select>
                                        {id_input_fm_1_gender.length===0 && <span className="text-danger">Enter the Gender</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label>NIC</label>
                                            <input id="id_input_fm_1_nic" placeholder="Enter NIC number" required value={id_input_fm_1_nic}  onChange={e=>nicchange(e.target.value)} className="form-control"></input>
                                        {id_input_fm_1_nic.length===0  && <span className="text-danger">Enter the NIC Number</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label>Date of Birth</label>
                                            <input  id="id_input_fm_1_dateofbirth" required value={id_input_fm_1_dateofbirth} type="date" onChange={e=>dateofbirthchange(e.target.value)} className="form-control"></input>
                                        {id_input_fm_1_dateofbirth.length===0  && <span className="text-danger">Enter the Birth of date</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>ContactNumber</label>
                                            <input id="id_input_fm_1_contactnumber" placeholder="Enter contact number" value={id_input_fm_1_contactnumber} type="tel"  onChange={e=>contactnumberchange(e.target.value)} className="form-control"></input>
                                            {id_input_fm_1_contactnumber.length===0  && <span className="text-danger">Enter the ContactNumber</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input id="id_input_fm_1_email" placeholder="Enter Email" type ="email"  onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                            {id_input_fm_1_email.length===0  && <span className="text-danger">Enter the email</span>}

                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Department</label>
                                            <select id='id_input_fm_1_department' required onChange={e=>departmentchange(e.target.value)} className="form-control" >
                                                <option>-select-</option>
                                                <option value={"1"}> Human resources</option>
                                                <option value={"2"}> Marketing and sales</option>
                                                <option value={"4"}> Research and development</option>
                                            </select>
                                        {id_input_fm_1_department.length===0  && <span className="text-danger">Please select the Department</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Designation</label>
                                            <select id='id_input_fm_1_designation' required onChange={e=>designationchange(e.target.value)} className="form-control" >
                                                <option>-select-</option>
                                                <option value={"1"}> Engineer</option>
                                                <option value={"2"}> Director of  marketing </option>
                                                <option value={"3"}> Marketing manager</option>
                                                <option value={"4"}> Manager</option>
                                            </select>
                                        {id_input_fm_1_designation.length===0  && <span className="text-danger">Please select the Designation</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Nationality</label>
                                            <select id='id_input_fm_1_nationality' required onChange={e=>nationalitychange(e.target.value)} className="form-control" >
                                                <option>-select-</option>
                                                <option value={"1"}> Sri Lankan</option>
                                                <option value={"2"}> Indian </option>
                                                <option value={"3"}> Australian</option>
                                            </select>
                                        {id_input_fm_1_nationality.length===0 && <span className="text-danger">Please select the Nationality</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input required  id='id_input_fm_1_address' placeholder="Enter Address" type="text"  onChange={e=>addresschange(e.target.value)} className="form-control"></input>
                                        {id_input_fm_1_address.length===0  && <span className="text-danger">Please enter the address</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <select id='id_input_fm_1_country' required onChange={e=>countrychange(e.target.value)} className="form-control" >
                                                <option>-select-</option>
                                                <option value={"3"}>Sri Lanka</option>
                                                <option value={"4"}>India</option>
                                                <option value={"6"}>United Kingdom</option>
                                                <option value={"8"}>Australia</option>
                                            </select>
                                        {id_input_fm_1_country.length===0  && <span className="text-danger">Please select the country</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>City</label>
                                            <select id='id_input_fm_1_city' required onChange={e=>citychange(e.target.value)} className="form-control "  >
                                                <option >-select-</option>
                                                <option value={"1"}>Galgamuwa</option>
                                                <option value={"2"}>Narammala</option>
                                            </select>
                                        {id_input_fm_1_city.length===0  && <span className="text-danger">Please select the city</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>ProfilePicture</label>
                                            <input id="id_input_fm_1_profilepicture" type ="file" required value={id_input_fm_1_profilepicture}  onChange={e=>profilepicturechange(e.target.value)} className="form-control"></input>
                                        {id_input_fm_1_profilepicture.length===0  && <span className="text-danger"></span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input id="id_input_fm_1_description" type="textarea" placeholder="Enter Description" required value={id_input_fm_1_description}  onChange={e=>descriptionchange(e.target.value)} className="form-control"></input>
                                        {id_input_fm_1_description.length===0  && <span className="text-danger">Enter the Description</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Remarks</label>
                                            <input id="id_input_fm_1_remarks" type="textarea" placeholder="Enter Remarks" required value={id_input_fm_1_remarks}  onChange={e=>remarkschange(e.target.value)} className="form-control"></input>
                                        {id_input_fm_1_remarks.length===0  && <span className="text-danger">Enter the Remarks</span>}
                                        </div>
                                    </div>



                                    <div>
                                        <textarea>
                                            
                                        </textarea>
                                    </div>

                                    

                                    <div className="col-lg-2">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">submit</button>
                                           <button className="btn btn-danger" type="reset">Reset</button>
                                           <Link to="/" className="btn btn-dark">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;