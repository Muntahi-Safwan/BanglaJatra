export default function Overview() {
    return (
        <div className="mx-auto my-12 max-w-7xl px-2 lg:px-8">
            <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                        <svg
                            className="h-9 w-9 text-orange-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black">
                        Faster Reply
                    </h3>
                    <p className="mt-4 text-sm text-gray-600">
                        If you reach out to us, we contact you as soon as
                        possible and give the best tourist guides
                    </p>
                </div>
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                        <svg
                            className="h-9 w-9 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black">
                        Day & Night Packages
                    </h3>
                    <p className="mt-4 text-sm text-gray-600">
                        We provide tour guides for both day and night stay
                        according to your availablity
                    </p>
                </div>
                <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                        <svg
                            className="h-9 w-9 text-red-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            />
                        </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black">
                        Filter Price
                    </h3>
                    <p className="mt-4 text-sm text-gray-600">
                        We tailor and suggest tours based on your budget and
                        plans.
                    </p>
                </div>
            </div>
        </div>
    );
}
