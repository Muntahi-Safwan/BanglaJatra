import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const TouristProfile = () => {
    const { user } = useContext(AuthContext);

    console.log(user);
    return (
        <div>
            <h1 className="text-2xl text-center font-semibold">
                Tourist Profile
            </h1>
            <div className="flex justify-center items-center pr-12">
                <div className="w-64">
                    <img className="rounded-full" src={user.photoURL} alt="" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold">
                        Name: {user.displayName}
                    </h1>
                    <h1 className="text-xl font-semibold">
                        Email: {user.email}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default TouristProfile;
