const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16  dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="container mx-auto justify-center items-center text-center flex">
                        <h2 className="mb-3 font-extrabold text-9xl dark:text-[#0A2A3B]">
                            <img className="w-96" src="error.png" alt="" />
                        </h2>
                        <div>
                            <p className="text-2xl font-semibold md:text-3xl text-[#0A2A3B]">
                                Sorry, we could not find this page.
                            </p>
                            <p className="mt-4 mb-8 dark:text-[#0A2A3B]">
                                But dont worry, you can find plenty of other
                                things on our homepage.
                            </p>
                            <a
                                rel="noopener noreferrer"
                                href="/"
                                className="px-8 py-3 font-semibold rounded text-[#6EE98E] bg-slate-900"
                            >
                                Back to homepage
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;
