// import { useContext } from "react";
import Swal from "sweetalert2";
// import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddPackage = () => {
    // const { user } = useContext(AuthContext);
    // const user_name = user.displayName;
    // const user_img = user.photoURL;

    const handleAddPackage = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        const day1 = form.day1.value;
        const day2 = form.day2.value;
        const day3 = form.day3.value;
        const serviceArea = form.serviceArea.value;
        const price = form.price.value;
        const newPackage = {
            name,
            photo_url,
            day1,
            day2,
            day3,
            serviceArea,
            price,
        };
        console.log(newPackage);

        fetch("https://bangla-jatra-server.vercel.app/packages", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newPackage),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        "Congratulations!",
                        "Package Created Successfully",
                        "success"
                    );
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title> Create Package | Bangla Jatra</title>
            </Helmet>
            <div className="container mx-auto p-4 bg-[#F0FBFF] my-4 rounded-lg">
                <h1 className="font-bold text-xl text-[#002D41] text-center">
                    Create a Package
                </h1>
                <form onSubmit={handleAddPackage}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="name"
                            name="name"
                            id="name"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-[#002D41] focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#002D41] peer-focus:dark:text-[#002D41] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Package Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="photo_url"
                            id="photo-url"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-[#002D41] focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#002D41] peer-focus:dark:text-[#002D41] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Package Image Link
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="day1"
                            id="day1"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Day 1 Details
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="day2"
                            id="day2"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Day 2 Details
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="day3"
                            id="day3"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Day 3 Details
                        </label>
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="serviceArea"
                                id="type"
                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Package Area
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="number"
                                name="price"
                                id="price"
                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Price
                            </label>
                        </div>
                        {/* <div className="relative z-0 w-full mb-6 group">
                            <h1 className="text-xl">Service Provider: </h1>
                            <p>{user_name}</p>
                            <img src={user_img} alt="" />
                        </div> */}
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-[#00A2EF] hover:bg-[#002D41] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#00A2EF] dark:hover:bg-[#002D41] dark:focus:ring-blue-800"
                    >
                        Add Package
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;
