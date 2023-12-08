import { Helmet } from "react-helmet-async";
import { Accordion } from "flowbite-react";
import TourGuide from "../Home/TourGuide";
import BookingForm from "./BookingForm";
import { useLoaderData } from "react-router-dom";

const PackageDetails = () => {
    const packageDetails = useLoaderData();
    const { name, photo_url, day1, day2, day3, price, serviceArea } =
        packageDetails;
    return (
        <div className="my-12 container mx-auto">
            <Helmet>
                <title>Bangla Jatra</title>
            </Helmet>
            <div className="container px-4">
                <h1 className="text-4xl font-bold">Package Name: {name}</h1>
            </div>
            <div>
                <section className="py-6  dark:text-gray-50">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        <img
                            src={photo_url}
                            alt=""
                            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                        />
                        <img
                            alt=""
                            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                            src="https://images.unsplash.com/photo-1583794018021-c841442da0e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <img
                            alt=""
                            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                            src="https://images.unsplash.com/photo-1619713277018-c5499173232c?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <img
                            alt=""
                            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                            src="https://images.unsplash.com/photo-1622760219088-90c1576336a1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />

                        <img
                            alt=""
                            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                            src="https://images.unsplash.com/photo-1574691967466-c6473ad5d643?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1597092030241-e634b9cf3f48?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-2 dark:bg-gray-500 aspect-square"
                        />
                    </div>
                </section>
            </div>
            <div className="container px-4">
                <h1 className="text-lg font-bold">Package Details: </h1>
                <p>
                    Spend quaity time with your family and friends through this
                    package and explore {serviceArea} with your loved ones.
                </p>
                <p>Price: {price}</p>
            </div>
            <div className="container px-4 my-8">
                <h1 className="text-2xl mb-5 font-bold">Tour Plan</h1>
                <div>
                    <Accordion
                        collapseAll
                        className="bg-[#EEFDF0] text-slate-900"
                    >
                        <Accordion.Panel>
                            <Accordion.Title className="dark:text-slate-900">
                                <h1 className="text-slate-900 font-semibold">
                                    Day 01:{" "}
                                </h1>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-slate-900 ">{day1}</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="dark:text-slate-900">
                                <h1 className="text-slate-900 font-semibold">
                                    Day 02:{" "}
                                </h1>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-slate-900 ">{day2}</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="dark:text-slate-900">
                                <h1 className="text-slate-900 font-semibold">
                                    Day 03:{" "}
                                </h1>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-slate-900 ">{day3}</p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
            <div className="my-12">
                <h1 className="text-3xl font-bold text-center">
                    Meet the Tour Guides
                </h1>
                <TourGuide></TourGuide>
            </div>
            <div className="my-12">
                <BookingForm packageDetails={packageDetails}></BookingForm>
            </div>
        </div>
    );
};

export default PackageDetails;
