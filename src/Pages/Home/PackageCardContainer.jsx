import { useEffect, useState } from "react";
import PackageCard from "../../Components/PackageCard";
import { Link } from "react-router-dom";

const PackageCardContainer = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch(`https://bangla-jatra-server.vercel.app/packages`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPackages(data);
            });
    }, []);

    const popularPackages = packages.slice(0, 4);

    return (
        <div className="my-12">
            <h1 className="text-3xl text-center font-semibold">
                See the Most Popular Packages
            </h1>
            <div className="grid mt-8 gap-4 md:grid-cols-2 container mx-auto">
                {popularPackages.map((packages) => (
                    <PackageCard
                        key={packages._id}
                        packages={packages}
                    ></PackageCard>
                ))}
            </div>
            <div>
                <Link to="/packages">
                    <button className="container mt-8 mx-auto px-3 py-2 rounded-lg bg-[#6EE98E] font-semibold">
                        Show All Packages
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PackageCardContainer;
