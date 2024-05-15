import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { useState } from "react";


const Root = () => {
    const [modalShown, setModalShown] = useState(true);
    const closeModal = () => {
        setModalShown(false);
    };

    return (
        <div className="px-[10%] mx-auto bg-gradient-to-r from-cyan-200  to-blue-100" onWheel={() => document.getElementById('my_modal_1').showModal()}>
            {
                modalShown && <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Welcome to Blue Beach Hotel!</h3>
                        <p className="py-4">Subscribe to our newsletter for updates, deals, and exclusive offers</p>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <form onSubmit={closeModal}>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" required className="grow" placeholder="Enter your email address" />
                                    <button className="btn btn-sm btn-outline btn-primary"> Subscribe</button>
                                </label>
                            </form>
                        </fieldset>
                    </div>
                </dialog>
            }
            <Navbar></Navbar>
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;