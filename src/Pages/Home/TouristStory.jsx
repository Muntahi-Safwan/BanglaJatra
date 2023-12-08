import {
    FacebookIcon,
    FacebookShareButton,
    TwitterShareButton,
    XIcon,
} from "react-share";

const TouristStory = () => {
    const shareUrl = "https://github.com/Muntahi-Safwan/";
    const title = "Get the Best Tour Details from Bangla Jatra";
    return (
        <div>
            <section className="dark:bg-[#6EE98E] dark:text-[#EEFDF0]">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-5xl font-bold">
                                Hear{" "}
                                <span className="text-slate-900"> Stories</span>{" "}
                                <br /> from <br /> our{" "}
                                <span className="text-slate-900"> Users</span>
                            </h2>
                            <p className="text-slate-900 font-light">
                                Pri ex magna scaevola moderatius. Nullam
                                accommodare no vix, est ei diceret alienum, et
                                sit cetero malorum. Et sea iudico consequat, est
                                sanctus adipisci ex.
                            </p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded-lg shadow-md text-[#719A78] bg-[#EEFDF0]">
                                        <p>
                                            An audire commodo habemus cum. Ne
                                            sed corrumpit repudiandae. Tota
                                            aliquip democritum pro in, nec
                                            democritum intellegam ne. Propriae
                                            volutpat dissentiet ea sit, nec at
                                            lorem inani tritani, an ius populo
                                            perfecto vituperatoribus. Eu cum
                                            case modus salutandi, ut eum vocent
                                            sensibus reprehendunt.
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img
                                                src="https://source.unsplash.com/50x50/?portrait?1"
                                                alt=""
                                                className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                                            />
                                            <div>
                                                <p className="text-lg font-bold text-[#0A2A3B]">
                                                    Leroy Jenkins
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm mb-1">
                                                    Share Story
                                                </p>
                                                <div className="flex gap-2">
                                                    <FacebookShareButton
                                                        url={shareUrl}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <FacebookIcon
                                                            size={32}
                                                            round
                                                        />
                                                    </FacebookShareButton>
                                                    <TwitterShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <XIcon
                                                            size={32}
                                                            round
                                                        />
                                                    </TwitterShareButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-lg shadow-md text-[#719A78] bg-[#EEFDF0]">
                                        <p>
                                            Sit wisi sapientem ut, pri civibus
                                            temporibus voluptatibus et, ius cu
                                            hinc fabulas. Nam meliore minimum
                                            et, regione convenire cum id. Ex pro
                                            eros mucius consectetuer, pro magna
                                            nulla nonumy ne, eam putent
                                            iudicabit consulatu cu.
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img
                                                src="https://source.unsplash.com/50x50/?portrait?2"
                                                alt=""
                                                className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                                            />
                                            <div>
                                                <p className="text-lg font-bold text-[#0A2A3B]">
                                                    Leroy Jenkins
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm mb-1">
                                                    Share Story
                                                </p>
                                                <div className="flex gap-2">
                                                    <FacebookShareButton
                                                        url={shareUrl}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <FacebookIcon
                                                            size={32}
                                                            round
                                                        />
                                                    </FacebookShareButton>
                                                    <TwitterShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <XIcon
                                                            size={32}
                                                            round
                                                        />
                                                    </TwitterShareButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-5 rounded-lg shadow-md text-[#719A78] bg-[#EEFDF0]">
                                        <p>
                                            Putant omnium elaboraret per ut. Id
                                            dicta tritani nominavi quo, mea id
                                            justo errem elaboraret. Agam mollis
                                            scripserit ea his, ut nec postea
                                            verear persecuti. Ea noster senserit
                                            eam, ferri omittantur ei nec. Id mel
                                            solet libris efficiantur, commune
                                            explicari et eos. Case movet ad est,
                                            sed tota vocent appetere ea.
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img
                                                src="https://source.unsplash.com/50x50/?portrait?3"
                                                alt=""
                                                className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                                            />
                                            <div>
                                                <p className="text-lg inline-block font-bold text-[#0A2A3B]">
                                                    Leroy Jenkins
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm mb-1">
                                                    Share Story
                                                </p>
                                                <div className="flex gap-2">
                                                    <FacebookShareButton
                                                        url={shareUrl}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <FacebookIcon
                                                            size={32}
                                                            round
                                                        />
                                                    </FacebookShareButton>
                                                    <TwitterShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <XIcon
                                                            size={32}
                                                            round
                                                        />
                                                    </TwitterShareButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-lg shadow-md text-[#719A78] bg-[#EEFDF0]">
                                        <p>
                                            Te omnes virtute volutpat sed. Ei
                                            esse eros interesset vel, ei populo
                                            denique ocurreret vix, eu cum
                                            pertinax mandamus vituperatoribus.
                                            Solum nihil luptatum per ex, ei amet
                                            viderer eos. Ea illum labitur
                                            mnesarchum pro. Eius meis salutandi
                                            ei nam, alterum expetenda et nec.
                                            Expetenda intellegat at eum, per
                                            mazim sanctus honestatis ad. Ei
                                            noluisse invenire vix. Te ancillae
                                            patrioque qui, probo bonorum
                                            vivendum ex vim.
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img
                                                src="https://source.unsplash.com/50x50/?portrait?4"
                                                alt=""
                                                className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                                            />
                                            <div>
                                                <p className="text-lg font-bold text-[#0A2A3B]">
                                                    Leroy Jenkins
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm mb-1">
                                                    Share Story
                                                </p>
                                                <div className="flex gap-2">
                                                    <FacebookShareButton
                                                        url={shareUrl}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <FacebookIcon
                                                            size={32}
                                                            round
                                                        />
                                                    </FacebookShareButton>
                                                    <TwitterShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        className="Demo__some-network__share-button"
                                                    >
                                                        <XIcon
                                                            size={32}
                                                            round
                                                        />
                                                    </TwitterShareButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TouristStory;
