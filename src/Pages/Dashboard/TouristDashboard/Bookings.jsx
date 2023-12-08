import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import PackageCard from "../../../Components/PackageCard";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [packages, setPackages] = useState([]);
    const url = `https://bangla-jatra-server.vercel.app/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);
    return (
        <div>
            <h2 className="container mt-12 mx-auto text-center text-3xl font-bold text-slate-900">
                My Bookings
            </h2>
            <div className="grid md:grid-cols-2 my-12 container mx-auto gap-4">
                {packages?.map((packages) => (
                    <PackageCard
                        key={packages._id}
                        packages={packages}
                    ></PackageCard>
                ))}
            </div>
        </div>
    );
};

export default Bookings;
