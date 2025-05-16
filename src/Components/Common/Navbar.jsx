import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log Out",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are Here",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    const NavItems = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/allrooms"}>All Rooms</NavLink></li>
        <li><NavLink to={`/mybooking`}>My Bookings</NavLink></li>
        <li><NavLink to={"/aboutus"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-gradient-to-r from-blue-400 to-blue-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItems}
                    </ul>
                </div>
                <a className="text-2xl font-bold text-blue-700 italic">Blue Beach Hotel</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-bold">
                    {NavItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={() => document.getElementById('my_modal_5').showModal()}>{user?.displayName}</a></li>
                                <li><Link to={'/updateprofile'}>Update Profile</Link></li>
                                <li><Link onClick={handelLogOut}> <a className="">Log Out</a> </Link></li>
                                <li><Link to={`/mybooking`}>My Bookings</Link></li>
                            </ul>
                        </div>

                        :
                        <Link to={'/login'}> <a className="btn btn-success font-bold text-xl animate__animated animate__swing ">Log in</a> </Link>
                }
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">My Profile</h3>
                        <p className="py-4"> <span className="font-bold">Name: </span>{user?.displayName}</p>
                        <p className="py-4"><span className="font-bold">Email: </span>{user?.email}</p>
                        <p className="py-4"><span className="font-bold">Registered: </span>{user?.metadata?.creationTime}</p>
                        <p className="py-4"><span className="font-bold">Login Time: </span>{user?.metadata?.lastSignInTime}</p>
                        <img src={user?.photoURL} className="w-20" alt="" />
                        <div className="modal-action">
                            <form method="dialog" className="mx-auto">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-outline btn-primary">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>


            </div>
        </div>
    );
};

export default Navbar;