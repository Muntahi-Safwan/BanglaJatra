import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const BookingForm = ({ packageDetails }) => {
    const { name, photo_url, day1, day2, day3, price, serviceArea } =
        packageDetails;
    const { user } = useContext(AuthContext);
    const user_name = user.displayName;
    const user_email = user.email;
    console.log(user_email);
    const handleBookPackage = (e) => {
        e.preventDefault();
        const form = e.target;
        const tour_date = form.tour_date.value;
        const tourist_name = form.tourist_name.value;
        const tourist_email = form.tourist_email.value;
        const tourist_img = form.tourist_img.value;
        const tour_guide = form.tour_guide.value;
        const bookPackage = {
            name,
            day1,
            day2,
            day3,
            price,
            serviceArea,
            photo_url,
            tourist_name,
            user_name,
            user_email,
            tourist_email,
            tour_date,
            tourist_img,
            tour_guide,
        };
        console.log(bookPackage);

        fetch("https://bangla-jatra-server.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookPackage),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        "Congratulations!",
                        "You Booked it Successfully",
                        "success"
                    );
                }
            });
    };

    return (
        <div>
            <div className="container mx-auto p-4 bg-[#F0FBFF] my-4 rounded-lg">
                <h1 className="font-bold text-xl text-[#002D41] text-center">
                    Book this Package
                </h1>
                <form onSubmit={handleBookPackage}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="name"
                            name="tourist_name"
                            id="name"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-[#002D41] focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#002D41] peer-focus:dark:text-[#002D41] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Tourist Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="tourist_email"
                            id="photo-url"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-[#002D41] focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#002D41] peer-focus:dark:text-[#002D41] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Tourist Email
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="tourist_img"
                            id="photo-url"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-[#002D41] focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#002D41] peer-focus:dark:text-[#002D41] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Tourist Image
                        </label>
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="date"
                                name="tour_date"
                                id="type"
                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Tour Date
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
                                disabled
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Price: {price} TK
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="name"
                                name="tour_guide"
                                id="price"
                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Tour Guide
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-slate-900 hover:text-[#6EE98E] bg-[#00A2EF] hover:bg-[#002D41] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#6EE98E] dark:hover:bg-[#002D41] dark:focus:ring-blue-800"
                    >
                        Book this Package
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
