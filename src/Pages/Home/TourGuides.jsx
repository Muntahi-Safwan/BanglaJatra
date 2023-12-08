import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview";
import TourGuide from "./TourGuide";
import PackageCardContainer from "./PackageCardContainer";

const TourGuides = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl text-center font-bold mb-6">Tour Guide</h1>
            <div className="container mx-auto bg-[#EEFDF0] py-4 px-12 rounded-lg">
                <Tabs
                    defaultIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList
                        className={[
                            "flex font-semibold  justify-center container mx-auto",
                        ]}
                    >
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet our Tour Guides</Tab>
                    </TabList>
                    <TabPanel>
                        <Overview></Overview>
                    </TabPanel>
                    <TabPanel>
                        <PackageCardContainer></PackageCardContainer>
                    </TabPanel>
                    <TabPanel>
                        <TourGuide></TourGuide>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourGuides;
