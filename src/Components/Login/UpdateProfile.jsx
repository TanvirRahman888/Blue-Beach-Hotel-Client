import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const { user, updateUserProfile, setLoading } = useContext(AuthContext)

    const handelUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        // console.log(name, photo);

        updateUserProfile(name, photo)
            .then(() => {
                setLoading(false);
                // alert("Profile updated!")
                Swal.fire({
                    title: "Do you want to update user info?",
                    showDenyButton: true,
                    confirmButtonText: "Yes",
                    denyButtonText: `No`
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        Swal.fire("Saved!", "", "success");
                    } else if (result.isDenied) {
                        Swal.fire("Changes are not saved", "", "info");
                    }
                });
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Helmet><title>Travel with Tanvir | Update Profile</title></Helmet>
            <div className="max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 w-1/2 bg-slate-100 mx-auto my-32">
                <h2 className="text-2xl text-center m-5">Update Profile</h2>
                <form onSubmit={handelUpdateProfile} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Name</label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" defaultValue={user?.photoURL} name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <button className="bg-blue-200 hover:bg-blue-300 font-bold text-lg py-3 block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Update Profile</button>
                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;