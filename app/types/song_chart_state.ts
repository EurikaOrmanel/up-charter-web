import { SongChart } from "./song_chart"

export type SongChartState = {
    status: ActionStatus
    data?: SongChart[]
    errMsg?: string
    load: () => void

}


export enum ActionStatus { loading, failed, completed, idle }

