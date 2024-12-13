export interface SongChart {
    id: string
    position: number
    previous_position: number | undefined
    song: Song
}

export interface Song {
    id: string
    title: string
    cover: string
    artist: Artist

}


export type Artist = {
    id: string
    stagename: string
}