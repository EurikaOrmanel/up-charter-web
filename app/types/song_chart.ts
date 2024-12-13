export interface SongChart {
    position: number
    previous_position: number | undefined
    song: Song
}

export interface Song {
    id: string
    title: string
    cover: string
    artist: string

}


