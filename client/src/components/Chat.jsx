import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { PostApi } from './ApiClient/PostApi';
import useFetch from './ApiClient/GetApi';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { error_toaster } from './Utils/Toaster';
import { ToastContainer } from 'react-toastify';
import { BASE_URL, IMAGE_URL } from './Utils/urls';
const socket = io("http://localhost:3001");


export default function Chat() {
    const navigate = useNavigate();
    const { data, reFetch } = useFetch(`get_messages/${localStorage.getItem('userId')}/${localStorage.getItem('receiverId')}`)
    const users = useFetch(`all_users`);


    // console.log(localStorage.getItem('receiverId'));
    // console.log(localStorage.getItem('receiverName'));
    const [message, setMessage] = useState('');
    const onChange = (e) => {
        setMessage(e.target.value);
    }


    useEffect(() => {


        socket.on('userjoined', (data) => {
            reFetch(`get_messages/${localStorage.getItem('userId')}/${localStorage.getItem('receiverId')}`);

        })

    }, []);
    const chat = (user) => {

        localStorage.setItem('receiverId', user.id)
        localStorage.setItem('receiverName', user.name)
        window.location.reload(false);
        navigate('/chat');
    }
    const sendMessage = async (event) => {
        event.preventDefault();
        socket.emit('sendMessage', { userId: localStorage.getItem('userId'), receiverId: localStorage.getItem('receiverId'), message: message });
        const res = await PostApi("send_message", {
            message: message,
            SenderId: localStorage.getItem("userId"),
            Sender: localStorage.getItem("receiverName"),
            ReceiverId: localStorage.getItem("receiverId")
        })
        if (res.data.status === "1") {
            setMessage('');
            reFetch(`get_messages/${localStorage.getItem('userId')}/${localStorage.getItem('receiverId')}`);
        }
        else {
            error_toaster(res.data.message)
        }
        console.log(res);

    }
    return (
        <>
            <ToastContainer />
            <div className="w-full" >
                <div className='grid grid-cols-12 mx-auto divide-x-2'>
                    <div className='col-span-2 bg-white py-12 h w-full-screen px-12'>
                        <div className='flex justify-center items-center gap-x-4 mb-6'>

                            <h3 className='text-3xl text-black font-bold '>{localStorage.getItem('userName')}</h3>
                        </div>

                        <div className='space-y-4'>
                            {
                                users?.data?.data?.map((user) => (
                                    <div className='my-4 hover:text-xl'>
                                        <a key={user.id} onClick={() => chat(user)}>
                                            <div key={user.id} className='flex items-center gap-x-2 cursor-pointer'>
                                                {
                                                    user.image === null ? <img src='images/user.png' alt='user' className='w-[48px]' /> : <img className='w-[48px] h-[48px] object-cover rounded-full' src={IMAGE_URL + user.image} alt={user.image} />
                                                }
                                                {/* <img src='images/user.png' alt='user' className='w-[40px]' /> */}


                                                {user.name}
                                            </div>
                                        </a>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className="col-span-9 h-screen w-full">
                        <div className='flex items-center justify-between mx-10'>
                            <div className=' flex items-center gap-x-4 py-6'>
                                <img src='images/user.png' alt='user' style={{ width: "60px" }} />
                                <h1 className='text-black text-xl font-semibold'>{localStorage.getItem('receiverName')}</h1>
                            </div>
                            <div className='flex gap-x-8'>
                                <div className='space-x-8 text-xl text-blue-600'>
                                    <i className='fa fa-phone'></i>
                                    <i className='fa fa-envelope'></i>
                                </div>


                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-4xl text-blue-600 "><i className='fa fa-ellipsis-h'></i></button>

                                <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete Coversation</a>
                                        </li>

                                    </ul>
                                </div>

                            </div>


                        </div>

                        <form className='relative text-white  h-5/6 px-8 ' style={{ overflowY: "auto" }}>

                            <div className='space-y-5'>
                                {

                                    data?.data?.map((message) => (

                                        message.sender === localStorage.getItem('userName') ? <>
                                            <div key={message.id}>
                                                <div className='p-2  rounded'>

                                                    <span className='bg-gray-500 p-3 rounded-3xl'>{message.name}</span>

                                                    {/* {

                                                    message.sender === localStorage.getItem('userName') ? <p>{localStorage.getItem("receiverName")}</p> : <p>Me</p>
                                                }

                                                <Moment format="D MMM YYYY HH:mm a" withTitle>
                                                    {message.createdAt}
                                                </Moment> */}
                                                </div>
                                            </div>

                                        </>
                                            :
                                            <>
                                                <div key={message.id}>
                                                    <div className=' p-2  rounded' >
                                                        <span className='bg-blue-600 p-3 rounded-3xl float-right'>{message.name}</span>

                                                        {/* {
                                                        message.sender === localStorage.getItem('userName') ? <p>{localStorage.getItem("receiverName")}</p> : <p>Me</p>
                                                    }
                                                    <Moment format="D MMM YYYY HH:mm a" withTitle>
                                                        {message.createdAt}
                                                    </Moment> */}

                                                    </div>
                                                </div>

                                            </>

                                    ))


                                }
                            </div>


                        </form>
                        <div className=' grid grid-cols-12'>
                            <div className='col-span-11 flex items-center gap-x-4'>
                                <i className='fa fa-plus border border-blue-600 rounded-3xl p-2 bg-blue-600 text-white'></i>
                                <input value={message} onChange={onChange} placeholder='Enter Message' className='w-full py-2 border focus:outline-blue-600 rounded-3xl' />
                            </div>

                            <div className='col-span-1'>
                                <button onClick={sendMessage} className='py-2 px-10 rounded-3xl bg-blue-600 text-white font-semibold'>Send</button>
                            </div>

                        </div>

                        {/* <div className='flex absolute justify-between bottom-1 w-[75%] items-center gap-x-4 '>
                            <div>
                                <input value={message} onChange={onChange} type="search" id="search" class="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg" placeholder="Search" required></input>
                                {/* <input
                                    type="text"
                                    name='name'
                                    value={message} onChange={onChange}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Enter Message"

                                /> */}

                        {/* </div>
                            <div>
                               
                                <button onClick={sendMessage} className='bg-blue-800 text-white text-semibold py-3 px-6 rounded-xl'>Send</button>
                            </div>  
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    )
}
