// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Banner() {
    return (
        <div className="relative w-full mb-12">
            <div className="mx-auto text-center lg:px-8">
                <div className="flex flex-col justify-center px-4 py-5  lg:px-6">
                    <h1 className="mt-3  text-2xl font-bold tracking-normal text-slate-900 md:text-4xl lg:text-5xl">
                        Bangladesh Unveiled: <br /> Your{" "}
                        <span className="text-[#EEFDF0]">Expedition</span>, Our
                        <span className="text-[#EEFDF0]"> Expertise </span>!
                    </h1>
                    <p className="mt-2 text-lg text-gray-700">
                        Immerse yourself in the heart of Bangladesh, where every
                        step is a story and every moment is an adventure. <br />{" "}
                        Let our expert guides lead the way to a journey uniquely
                        yours.
                    </p>
                </div>
                <div className="rounded-lg mx-auto bg-[#EEFDF0] w-[950px] h-[420px] p-4">
                    <Swiper
                        slidesPerView={"auto"}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mx-auto"
                    >
                        <SwiperSlide>
                            <img
                                className="w-[950px] h-96 justify-center"
                                src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/18174406/bangladesh-places-to-visit-FEATURE-compressed.jpg"
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide className="mx-auto h-96 w-[680px]">
                            <img
                                className="w-[950px] h-96 justify-center"
                                src="https://images.unsplash.com/photo-1690885091609-efbc5dcc1577?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-[950px] h-96 justify-center"
                                src="https://images.unsplash.com/photo-1672561924208-7762120e7077?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-[950px] h-96 justify-center"
                                src="https://images.unsplash.com/photo-1681672705104-c78e31a8d111?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-[950px] h-96 justify-center"
                                src="https://images.unsplash.com/photo-1587222318667-31212ce2828d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
