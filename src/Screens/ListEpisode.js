import { useState, useEffect } from 'react'

export default function ListEpisode(){
    const [episodes, setEpisodes] = useState([]);
    function ShowEpisode(){
        fetch('https://rickandmortyapi.com/api/episode').then((res) => {
            res.json().then((json) => {
                setEpisodes(json.results)
                console.log(json)

            })
        })
    }

    useEffect(() => {
        ShowEpisode()

    }, [])

    return(
        episodes.map((episode) => {
            return(
                <div key={episode.id}>
                    <p>{episode.name}</p>
                </div>
            )
        })
    )
    



}