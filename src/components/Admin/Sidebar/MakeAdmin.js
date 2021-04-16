import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [info,setInfo]=useState({});
    const [file,setFile] = useState(null);

    const handleBlur = e =>{
        const newInfo = {...info , [e.target.name] : e.target.value};
        setInfo(newInfo);
        console.log(info);
    }
    const handleFileChange = (e)=>{
        console.log(e.target.files);
        console.log(e.target.files[0]);
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit =() => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name);
        formData.append('email', info.email)

        fetch('https://rocky-forest-80852.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <section className="container-fluid row">
            <Sidebar/>
            <div className="col-md-10 p-4 pe-5" style={{position:'absolute',right:'0',backgroundColor:'#F4FDFB'}}>
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3 form-group">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Email"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Your Name"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Upload an Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" name="file" placeholder="Picture"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};


export default MakeAdmin;