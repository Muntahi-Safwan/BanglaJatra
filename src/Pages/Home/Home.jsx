import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TouristStory from "./TouristStory";
import TourGuides from "./TourGuides";
import TourTypes from "./TourTypes";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bangla Jatra</title>
            </Helmet>
            <Banner></Banner>
            <TourGuides></TourGuides>
            <TourTypes></TourTypes>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;
