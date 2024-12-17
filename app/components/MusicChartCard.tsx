import { BarChart3,  TrendingDown, TrendingUp, Link } from "lucide-react";
import { SongChart } from "../types/song_chart";
import Image from "next/image";



// const formatNumber = (num: number) => {
//     return new Intl.NumberFormat('en-US', {
//         notation: 'compact',
//         maximumFractionDigits: 1
//     }).format(num);
// };
const getRankChange = (current: number, previous: number) => {
    const change = previous - current;

    return {
        icon: change > 0 ? TrendingUp : TrendingDown,
        color: change > 0 ? 'text-green-400' : 'text-pink-400',
        value: Math.abs(change)
    };
};
export default function MusicChartCard({ position, previous_position, song }: SongChart) {
    const rankChange = getRankChange(position, previous_position ?? 0);
    const RankIcon = rankChange.icon;
    return (
        <div
            key={song.id}
            className="relative group  row-span-2 col-span-2"
        // onMouseEnter={() => setHoveredTrack(track)}
        // onMouseLeave={() => setHoveredTrack(null)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative backdrop-blur-lg bg-white/5 rounded-3xl p-4 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                {/* Rank Badge */}
                <div className="absolute -top-3 -left-3 z-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-70 blur-sm" />
                        <div className="relative bg-black/50 backdrop-blur-sm text-white px-4 py-1 rounded-full border border-white/20">
                            #{position}
                            <span className={`ml-2 ${rankChange.color} text-sm`}>
                                <RankIcon size={14} className="inline" />
                                {/* {rankChange.value} */}
                            </span>
                        </div>
                    </div>
                </div>
                {/* Album Art */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 group">
                    <Image
                        src={song.cover}
                        alt={song.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                    </div>
                </div>

                {/* Track Info */}
                <div>
                    <h3 className="font-bold text-lg mb-1 truncate group-hover:text-pink-400 transition-colors">
                        {song.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-3 truncate">{song.artist.stagename}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-white/60">
                            <BarChart3 size={16} />
                            {/* <span>{formatNumber(track.streams)}</span> */}
                        </div>
                        <div className="flex items-center gap-2 text-white/60">
                            <Link size={16} className="text-pink-400" />
                            {/* <span>{formatNumber(track.likes)}</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


