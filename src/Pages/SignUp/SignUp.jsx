import { ArrowRight } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import signUpImg from "../../assets/signup.png";
import Swal from "sweetalert2";

export default function SignUp() {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        const password = form.password.value;
        console.log(name);
        const user = {
            email,
            name,
            photo_url,
            password,
        };
        console.log(email, password);
        // Reset Error
        setRegisterError("");
        const specialCharRegex = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/;
        if (password.length < 6) {
            setRegisterError(
                "Password should be at least 6 characters or longer"
            );
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError(
                "Password should have at least one capital letter"
            );
            return;
        }
        if (!specialCharRegex.test(password)) {
            setRegisterError(
                "Password should contain at least one special character"
            );
            return;
        }
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                console.log(name, photo_url);
                updateUserProfile(name, photo_url)
                    .then(() => {
                        fetch("https://bangla-jatra-server.vercel.app/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(user),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                if (data.insertedId) {
                                    console.log(data);
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User Created Successfully. ",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    // window.location.reload();
                                }
                            });
                    })
                    .catch((error) => {
                        // An error occurred
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.error(error);
                setRegisterError(error.message);
            });
    };
    return (
        <section>
            <Helmet>
                <title> Sign Up | Bangla Jatra</title>
            </Helmet>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
                <div>
                    <img className="w-[520px]" src={signUpImg} alt="" />
                </div>
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-[#F0FBFF] py-2 px-8 rounded-lg">
                    <div className="mb-2 flex justify-center">
                        <img
                            src="InnovateNex-rounded.png"
                            className="w-1/3"
                            alt=""
                        />
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-black">
                        Sign up to create account
                    </h2>
                    <p className="mt-2 text-center text-base text-gray-600">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            title=""
                            className="font-medium text-black transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </a>
                    </p>
                    <form onSubmit={handleSignUp} className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-base font-medium text-gray-900"
                                >
                                    {" "}
                                    Full Name{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="name"
                                        placeholder="Full Name"
                                        id="name"
                                        name="name"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-base font-medium text-gray-900"
                                >
                                    {" "}
                                    Profile Photo URL{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Full Name"
                                        id="name"
                                        name="photo_url"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-base font-medium text-gray-900"
                                >
                                    {" "}
                                    Email address{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        {" "}
                                        Password{" "}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                    ></input>
                                </div>
                            </div>
                            {registerError && (
                                <p className="mt-3 text-red-900 font-semibold">
                                    {registerError}
                                </p>
                            )}
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-[#6EE98E] px-3.5 py-2.5 font-semibold leading-7 text-slate-900 hover:bg-slate-900 hover:text-[#6EE98E]"
                                >
                                    Create Account{" "}
                                    <ArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
