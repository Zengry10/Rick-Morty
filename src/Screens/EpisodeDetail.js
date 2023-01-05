import { useLocation } from 'react-router-dom';
export default function EpisodeDetail(){

    let location = useLocation();
    console.log(location.state)
}