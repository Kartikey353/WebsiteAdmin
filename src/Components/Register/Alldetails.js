import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Link } from 'react-router-dom';

const Alldetails = () => {

    const [scholarshipdata, setscholarshipdata] = useState([]);
    const [universitydata, setuniversitydata] = useState([]);
    const [coursedata, setcoursedata] = useState([]);

    const retrivescholarshipdata = async () => {
        let headersList = {
            "Accept": "*/*"
        }

        let response = await fetch(`${process.env.REACT_APP_API_URL}/scholarship`, {
            method: "GET",
            headers: headersList
        });

        if (response.ok) {
            let data = await response.text();
            data = JSON.parse(data);
            setscholarshipdata(data);
        } else {
            alert("some error while retriving data");
        }
    }


    const retriveuniversitydata = async () => {
        let headersList = {
            "Accept": "*/*",
        }

        let response = await fetch(`${process.env.REACT_APP_API_URL}/university`, {
            method: "GET",
            headers: headersList
        });
        if (response.ok) {
            let data = await response.text();
            data = JSON.parse(data);
            setuniversitydata(data);
        } else {
            alert("some error while retriving data");
        }
    }

    const retrivecoursedata = async () => {
        let headersList = {
            "Accept": "*/*",
        }

        let response = await fetch(`${process.env.REACT_APP_API_URL}/courses`, {
            method: "GET",
            headers: headersList
        });
        if (response.ok) {
            let data = await response.text();
            data = JSON.parse(data);
            setcoursedata(data); 
            console.log(data);
        } else {
            alert("some error while retriving data");
        }
    }


    useEffect(() => {
        retrivescholarshipdata();
        retriveuniversitydata(); 
        retrivecoursedata();
    }, [])
    return (
        <>
            <Navbar />
            <h1 class="flex items-center text-5xl font-extrabold my-10 w-[20%] mx-auto">Scholarships</h1>
            <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
                <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
                <div className="overflow-x-auto mx-auto">
                    <table className="min-w-full text-sm mx-auto text-center">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="">
                            <tr className="">
                                <th className="p-3">Scholarship Name</th>
                                <th className="p-3">Price</th>
                                <th className='p-3'>Start time*</th>
                                <th className='p-3'>End time*</th>
                                <th className="p-3">Link</th>
                                <th className="p-3">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                scholarshipdata.map((item, idx) => {
                                    return (
                                        <tr className="border-b border-opacity-20">
                                            <td className="p-3">
                                                <p>{item.scholarship_name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.price_money}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.start_time}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.end_time}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.link}</p>
                                            </td>
                                            <td className="p-3">
                                                <span className="px-3 hover:cursor-pointer py-1 font-semibold rounded-md">
                                                    <Link to={`/Editscholarship/${item.scholarship_name}`}>Edit</Link>
                                                </span>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button className="text-white mt-5 rounded-2xl bg-blue-500 hover:bg-blue-800 px-4 py-1">
                        <Link to={"/AddScholarship"}>Add Scholarship</Link>
                    </button>
                </div>
            </div>



            <h1 class="flex items-center text-5xl font-extrabold my-10 w-[20%] mx-auto">University</h1>
            <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
                <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
                <div className="overflow-x-auto mx-auto">
                    <table className="min-w-full text-sm mx-auto text-right">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="">
                            <tr className="">
                                <th className="p-3">Qs Ranking</th>
                                <th className="p-3">Guardian Rank</th>
                                <th className="p-3">University Name</th>
                                <th className="p-3">Link</th>
                                <th className="p-3">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (universitydata).map((item, idx) => {
                                    return (
                                        <tr key={idx} className="border-b border-opacity-20">
                                            <td className="p-3">
                                                <p>{item.rankings.qs_ranking}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.rankings.guardian_ranking}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.university_name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.university_website}</p>
                                            </td>
                                            <td className="p-3">
                                                <Link to={`/EditUnivdetails/${item.university_name}`}>Edit</Link>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
                    <button className="text-white mt-5 rounded-2xl bg-blue-500 hover:bg-blue-800 px-4 py-1">
                        <Link to={"/Register"}>Add University</Link>
                    </button>
                </div>
            </div>
            <h1 class="flex items-center text-5xl font-extrabold my-10 w-[20%] mx-auto">Courses</h1>
            <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
                <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
                <div className="overflow-x-auto mx-auto">
                    <table className="min-w-full text-sm mx-auto text-center">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="">
                            <tr className="">
                                <th className="p-3">Course Name</th>
                                <th className="p-3">Course Tag</th>
                                <th className='p-3'>Course Link</th>
                                <th className="p-3">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coursedata.map((item, idx) => {
                                    return (
                                        <tr className="border-b border-opacity-20">
                                            <td className="p-3">
                                                <p>{item.course_name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.course_tag}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.course_link}</p>
                                            </td>
                                            <td className="p-3">
                                                <span className="px-3 hover:cursor-pointer py-1 font-semibold rounded-md">
                                                    <Link to={`/EditCourses/${item.course_name}`}>Edit</Link>
                                                </span>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button className="text-white mt-5 rounded-2xl bg-blue-500 hover:bg-blue-800 px-4 py-1">
                        <Link to={"/AddCourses"}>Add Courses</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Alldetails
