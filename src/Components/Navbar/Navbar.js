import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [mobilestyle, setmobilestyle] = useState("mobile-menu hidden text-center md:hidden bg-black text-white rounded-2xl p-6")
    const [toogle, settoogle] = useState(false);

    useEffect(() => {

        if (window.innerWidth <= 768 && toogle === true) {
            setmobilestyle("mobile-menu text-center md:hidden bg-black text-white rounded-2xl p-6");
        } else {
            setmobilestyle("mobile-menu text-center hidden md:hidden bg-black text-white rounded-2xl p-6");
        }

    }, [window.innerWidth, toogle]);

    // const primaryNavItems = [
    //     {label: 'Courses', link: '/Courses'},
    //     {label: 'About Us', link: '/about'},
    //     {label: 'Resume', link: '/Resume'},
    //     {label: 'Blog', link: '/Blog'},
    //     {label: 'Scholarship', link: '/Scholarship'},
    //     {label: 'Page4', link: '/Page4'},
    //     {label: 'Page5', link: '/Page5'},
    // ];

    // const renderPrimaryNavItems = () => {
    //     const sublistItems = primaryNavItems.reduce((result,item,index) => {
    //         if(index%2==0) {
    //             const sublist=primaryNavItems.slice(index,index+2);
    //             result.push(sublist);
    //         }
    //         return result;
    //     }, []);

    //     return sublistItems.map((sublist,index) => (
    //         <div key={index} className="flex space-x-1">
    //             {sublist.map((item,subIndex) => (
    //                 <Link 
    //                 key={subIndex}
    //                 to={item.link}
    //                 className="py-5 px-3 text-black hover:text-gray-900">
    //                 {item.label}
    //                 </Link>
    //             ))}
    //         </div>
    //     ));
    // };

    return (
        <>
            <nav className="p-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-[8rem]">
                            <div>
                                <Link
                                    to={"/"}
                                    className="flex items-center py-5 px-2 text-black"
                                >
                                    <svg
                                        className="h-6 w-6 mr-1 text-blue-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </svg>
                                    <span className="font-bold text-2xl">Alldetails</span>
                                </Link>
                            </div>
                            {/* primary nav */}
                            <div className="hidden md:flex items-center space-x-1 text-sm font-semibold my-auto">
                                <Link to={"/AddCourses"} className="py-5 px-3 text-black hover:text-gray-900">
                                AddCourses
                                </Link>
                                <Link to={"/AddScholarship"} className="py-5 px-3 text-black hover:text-gray-900">
                                AddScholarship
                                </Link>
                                <Link to={"/EditCourses"} className="py-5 px-3 text-black hover:text-gray-900">
                                EditCourses
                                </Link>
                                <Link to={"/EditUnivdetails"} className="py-5 px-3 text-black hover:text-gray-900">
                                EditUnivdetails
                                </Link>
                                <Link to={"/Register"} className="py-5 px-3 text-black hover:text-gray-900">
                                Register
                                </Link>
                                <Link to={"/Editscholarship"} className="py-5 px-3 text-black hover:text-gray-900">
                                Editscholarship
                                </Link>
                            </div>
                        </div>
                        {/* secondary nav */}
                        {/* <div className="hidden md:flex items-center space-x-1">
                            <Link
                                to={"/contact"}
                                className="py-2 px-3 text-lg font-bold bg-black hover:bg-white text-white hover:text-black rounded-full  border-2 border-black transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </div> */}
                        {/* mobile button goes here */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => {
                                    settoogle(!toogle);
                                }}
                                className="mobile-menu-button">
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={mobilestyle}>
                    <Link to={"/AddCourses"} className="block py-2 px-4 text-lg hover:bg-blue-600">
                    AddCourses
                    </Link>
                    <Link to={"/AddScholarship"} className="block py-2 px-4 text-lg hover:bg-blue-600">
                    AddScholarship
                    </Link>
                    <Link to={"/EditCourses"} className="block py-2 px-4 text-lg hover:bg-blue-600">
                    EditCourses
                    </Link>
                    <Link to={"/EditUnivdetails"} className="block py-2 px-4 text-lg hover:bg-blue-600">
                    EditUnivdetails
                    </Link>
                    <Link to={"/Register"} className="block py-2 px-4 text-lg hover:bg-blue-600">
                    Register
                    </Link>
                    <Link to={"/Editscholarship"} className="block py-2 px-4 text-lg hover:bg-blue-600">
                    Editscholarship
                    </Link>
                </div>
                <hr className='border-1 border-black' />
            </nav>
        </>
    )
}

export default Navbar