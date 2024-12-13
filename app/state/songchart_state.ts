import { create } from "zustand";
import { ActionStatus, SongChartState } from "../types/song_chart_state";
import axios from "axios";
import { SongChart } from "../types/song_chart";
const initialState: SongChartState = {
    load() {
    },
    status: ActionStatus.idle

}
export const useSongChart = create<SongChartState>((set) => ({
    ...initialState,
    load: async () => {
        set({ status: ActionStatus.loading })
        try {
            console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/visitor/chrts/sngs/tp100`)
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/visitor/chrts/sngs/tp100`)
            if (result.status == 200) {
                const data: SongChart[] = result.data
                set({ status: ActionStatus.completed, data: data })

            } else {
                set({ status: ActionStatus.failed, errMsg: "An error occured while fetching data." })
            }
        } catch (e) {
            set({
                errMsg: (e as string),
            })
        }
    }
}));
