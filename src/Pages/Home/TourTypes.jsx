const TourTypes = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8">Tour Types</h1>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex space-x-5">
                        <div className="grid text-center justify-center items-center gap-2">
                            <img
                                alt=""
                                className="w-20 h-20 rounded-full ri ri dark:bg-gray-500 ri ri"
                                src="https://hips.hearstapps.com/hmg-prod/images/athletic-women-walking-together-on-remote-trail-royalty-free-image-1626378592.jpg?crop=0.592xw:0.789xh;0.0884xw,0.161xh&resize=640:*"
                            />
                            <h1 className="font-semibold">Walking</h1>
                        </div>
                        <div className="grid text-center justify-center items-center gap-2">
                            <img
                                alt=""
                                className="w-20 h-20 rounded-full ri ri dark:bg-gray-500 ri ri"
                                src="https://www.nps.gov/grte/planyourvisit/images/Hiking-NPS-Photo-J-Tobiason_3.jpg?maxwidth=1300&maxheight=1300&autorotate=false"
                            />
                            <h1 className="font-semibold">Hiking</h1>
                        </div>
                        <div className="grid text-center justify-center items-center gap-2">
                            <img
                                alt=""
                                className="w-20 h-20 rounded-full ri ri dark:bg-gray-500 ri ri"
                                src="https://mediapool.bmwgroup.com/cache/P9/202311/P90531327/P90531327-from-march-2024-highly-automated-driving-at-level-3-in-the-new-bmw-7-series-enables-secondary-activi-600px.jpg"
                            />
                            <h1 className="font-semibold">Driving</h1>
                        </div>
                        <div className="grid text-center justify-center items-center gap-2">
                            <img
                                alt=""
                                className="w-20 h-20 rounded-full ri ri dark:bg-gray-500 ri ri"
                                src="https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2016/10/wildlife.jpg"
                            />
                            <h1 className="font-semibold">Wildlife</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourTypes;
