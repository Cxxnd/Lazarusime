// import AnimeList from "@/components/AnimeList";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { getAnime } from "@/libs/service-api";
const ongoing = async () => {
    // const searchParams = useSearchParams();
    // const currentPage = parseInt(searchParams.get("page")) || 1;

    // const [page, setPage] = useState(currentPage);
    // const [animeData, setAnimeData] = useState({});
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const res = await getAnime({
    //                 resource: `ongoing-anime?${page}`,
    //             });
    //             setAnimeData(res || {});
    //         } catch (error) {
    //             console.error("❌ Error fetching complete anime:", error);
    //             setAnimeData({});
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [page]);
    return (
        <div className="flex justify-center items-center">
            <a className="text bg-center text-xl-center font-bold">
                Website sedang di perbaiki
            </a>
        </div>
        // <div>
        //     {loading ? (
        //         <div className="text-center py-20 text-gray-400">
        //             Sedang memuat data anime...
        //         </div>
        //     ) : !animeData?.data?.anime || animeData.data.anime.length === 0 ? (
        //         <div className="text-center py-20 text-gray-400">
        //             Tidak ada anime yang ditemukan.
        //         </div>
        //     ) : (
        //         <>
        //             {/* List Anime */}
        //             <AnimeList api={animeData} />

        //             {/* Pagination */}
        //             <div className="flex justify-center items-center mt-10 flex-col gap-2">
        //                 <p className="text-gray-400">
        //                     Halaman{" "}
        //                     <span className="text-white font-semibold">
        //                         {page}
        //                     </span>{" "}
        //                     dari{" "}
        //                     <span className="text-white font-semibold">
        //                         {animeData?.data?.pagination
        //                             ?.last_visible_page || 1}
        //                     </span>
        //                 </p>
        //                 <Pagination
        //                     page={page}
        //                     lastPage={
        //                         animeData?.data?.pagination
        //                             ?.last_visible_page || 1
        //                     }
        //                     setPage={setPage}
        //                 />
        //             </div>
        //         </>
        //     )}
        // </div>
    );
};
export default ongoing;
