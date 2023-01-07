import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
export default function ListEpisode(){
    const [episodes, setEpisodes] = useState(null);
    const bag2 = "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/rick_et_morty004_0.jpg?itok=BLVuYBuX"
    function ShowEpisode(){
        fetch('https://rickandmortyapi.com/api/episode').then((res) => {
            res.json().then((json) => {
                setEpisodes(json.results)
            
            })
        })
    }

 

    useEffect(() => {
        ShowEpisode()
    }, [])

    if (episodes){
        return(
            <div className='flex flex-wrap w-full justify-center '>
                {
                episodes.map((episode) => {
                    return(
                        <Link to={`/EpisodeDetail/${episode.id}`} key={episode.id} state= {{ episode : episode }}>
                            <div

                            style={{backgroundImage: `url(${bag2})`}}
                            className='bg-black w-64 h-64 m-16 rounded-lg flex-col bg-no-repeat bg-cover bg-center hover:opacity-50 duration-100' key={episode.id}>
                                <div className='flex justify-center mt-6 '>
                                    <p className='text-white text-xl font-bold'> {episode.name}</p>
                                </div>
                                <div className='mt-32 ml-2'>
                                    <p className='text-white font-bold'>{episode.air_date}</p>
                                    <p className='text-white font-bold'>{episode.episode}</p>
                                    <button className='text-[#2AD522] font-bold' onClick={() => console.log(episode.id)}>Ajouter au favoris</button>
                                </div>
                            </div>
                        </Link>
                    )
                })
                }
            </div>
        )
    }

}