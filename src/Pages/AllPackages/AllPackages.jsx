import { Helmet } from "react-helmet-async";
import PackageCard from "../../Components/PackageCard";
import { useLoaderData } from "react-router-dom";

const AllPackages = () => {
    const packages = useLoaderData();

    return (
        <div>
            <Helmet>
                <title> Services | FixNest</title>
            </Helmet>
            <div className="my-12">
                <h1 className="text-center font-bold text-3xl my-12">
                    Let's Explore all the Packages
                </h1>
                <div className="container mx-auto grid md:grid-cols-3 gap-4">
                    {packages?.map((packages) => (
                        <PackageCard
                            key={packages._id}
                            packages={packages}
                        ></PackageCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllPackages;
