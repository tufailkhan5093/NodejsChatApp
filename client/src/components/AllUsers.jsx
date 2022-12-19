import React from 'react'
import useFetch from './ApiClient/GetApi';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
// const socket = io("http://localhost:3001");
export default function AllUsers() {
    const navigate = useNavigate();

    const chat = (user) =>{
        console.log(user)
        localStorage.setItem('receiverId',user.id)
        localStorage.setItem('receiverName',user.name)
        // window.location.reload(false);
        navigate('/chat');
    }

    const { data } = useFetch("all_users");

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>

         

           
            <div className="" style={{ width: "100%" }}>
            <h3>{localStorage.getItem('userName')}</h3>
                <table className='table table-bordered'>
               
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td><button onClick={()=>chat(user)} className='btn btn-info'>Send Message</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
