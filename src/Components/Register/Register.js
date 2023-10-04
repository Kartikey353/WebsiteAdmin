import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const Register = () => {
    const [Universityname, setUniversityName] = useState();
    const [UniversityLink, setUniversityLink] = useState();
    const [Qsranking, setQsranking] = useState();
    const [Guardianranking, setGuardianranking] = useState();

    const [inputFields, setInputFields] = useState([{
        CourseName: "",
        CourseTag: ""
    },]);

    const addInputField = () => {
        setInputFields([
            ...inputFields, {
                CourseName: "",
                CourseTag: "",
            },
        ]);
        console.log(inputFields);
    };

    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    };

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    };


    const handelsavedetails = async () => {
        console.log("Adding Details");
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        let bodyContent = JSON.stringify({
            "university_name": Universityname,
            "university_website": UniversityLink,
            "rankings": {
                "qs_ranking": Qsranking,
                "guardian_ranking": Guardianranking
            },
            "courses": inputFields
        });
        let response = await fetch(`${process.env.REACT_APP_API_URL}/university`, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        if (response.status === 200) {
            let data = await response.text();
            alert(data);
        } else {
            alert("something Went Wrong")
        }
    }
    useEffect(() => {

    }, [inputFields]);
    return (
        <>
            <Navbar />
            <div className="bg-white mb-14">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 md:max-w-[60vw] xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Add details of University
                            </h1>
                            <form className="space-y-2" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        University Name
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setUniversityName(e.target.value);
                                        }}
                                        type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Name" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        University Website Link
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setUniversityLink(e.target.value);
                                        }}
                                        type="url" name="" id="" placeholder="Link" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Qs_ranking
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setQsranking(e.target.value);
                                        }}
                                        type="number" placeholder="Enter rank" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Guardian_ranking
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setGuardianranking(e.target.value);
                                        }}
                                        type="number" placeholder="Enter rank" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>

                                <div style={
                                    {
                                        marginTop: "2rem",
                                        marginBottom: "2rem"
                                    }
                                }
                                    className="flex justify-between">
                                    <h1>Course Details :</h1>
                                    <div className="">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            addInputField()
                                        }} className="bg-blue-500 text-white font-bold px-4 py-1 rounded-xl">
                                            Add
                                        </button>
                                    </div>
                                </div>
                                {
                                    inputFields.map((data, index) => {
                                        const { CourseName, CourseTag } = data;
                                        return (
                                            <div key={index} className='flex md:flex-row flex-col md:space-x-6'>
                                                <div className="">
                                                    <label
                                                        className="block mb-2 text-sm font-medium text-gray-900"
                                                    >

                                                        CourseName
                                                    </label>
                                                    <input
                                                        onChange={(evnt) => handleChange(index, evnt)}
                                                        type="text"
                                                        value={CourseName}
                                                        name="CourseName"
                                                        placeholder="Enter Name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="">
                                                    <label
                                                        className="block mb-2 text-sm font-medium text-gray-900"
                                                    >

                                                        CourseTag
                                                    </label>
                                                    <select
                                                        onChange={(evnt) => handleChange(index, evnt)}
                                                        type="Text"
                                                        name="CourseTag"
                                                        value={CourseTag}
                                                        placeholder="Enter Tag"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        required=""
                                                    >
                                                        <option selected>Choose Option</option>
                                                        <option value="Management">Management</option>
                                                        <option value="Science">Science</option>
                                                    </select>
                                                </div>
                                                {(inputFields.length !== 1) ? <div onClick={() => {
                                                    console.log(index);
                                                    removeInputFields(index)
                                                }} className="border mt-4 md:mt-0 rounded-full bg-red-500 my-auto px-4 py-1 text-white text-center font-bold">X</div> : ''}
                                            </div>
                                        )
                                    })
                                }
                                <button
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        handelsavedetails();
                                    }}
                                    type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Save details
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
