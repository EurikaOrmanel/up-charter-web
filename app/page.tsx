'use client'
import { useEffect } from "react";
import { useSongChart } from "./state/songchart_state";
import MusicChartCard from "./components/MusicChartCard";

export default function Home() {
  const { data, errMsg, status, load } = useSongChart();
  useEffect(() => {
    load()
  }, [load])
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 px-4 md:grid-cols-3 lg:grid-cols-6 gap-6 auto-rows-max">
        {
          data?.map(e => <MusicChartCard {...e} key={e.id} />)
        }

      </div>
    </div>
  );
}
