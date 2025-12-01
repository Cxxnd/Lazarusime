"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

export default function ScheduleCarousel({ data }) {
    if (!Array.isArray(data)) {
        return <p>Data tidak valid, expected array</p>;
    }

    return (
        <div className="space-y-12 w-full">
            {data.map((dayItem, idx) => (
                <div key={idx} className="w-full">
                    {/* Judul Hari */}
                    <h2 className="text-xl font-bold mb-4">{dayItem.day}</h2>

                    {/* Carousel */}
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={12}
                        slidesPerView={2.5}
                        breakpoints={{
                            480: { slidesPerView: 3.2 },
                            640: { slidesPerView: 4.2 },
                            768: { slidesPerView: 5.2 },
                            1024: { slidesPerView: 6.2 },
                        }}
                    >
                        {dayItem.anime_list.map((anime, i) => (
                            <SwiperSlide key={i}>
                                <Link href={anime.url}>
                                    <div className="w-full">
                                        <img
                                            src={anime.poster}
                                            alt={anime.anime_name}
                                            className="w-full h-48 object-cover rounded-lg shadow-md"
                                        />
                                        <p className="text-sm mt-2 font-medium line-clamp-2">
                                            {anime.anime_name}
                                        </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
}
