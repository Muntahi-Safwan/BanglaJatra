import { Link } from "react-router-dom";

const PackageCard = ({ packages }) => {
    const { name, photo_url, price, serviceArea, _id } = packages;
    return (
        <div>
            <div className="max-w-s container mx-auto rounded-md shadow-xl border border-slate-900 bg-[#6EE98E] text-slate-900">
                <img
                    src={photo_url}
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <p className="text-slate-900 italic font-medium">
                            Area: {serviceArea}
                        </p>
                        <h2 className="text-3xl font-semibold tracki">
                            {name}
                        </h2>
                        <p className="text-slate-900 font-medium">
                            Price: {price} Tk
                        </p>
                    </div>
                    <Link to={`/details/${_id}`}>
                        <button
                            type="button"
                            className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-slate-900 text-[#6EE98E]"
                        >
                            View Package
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
