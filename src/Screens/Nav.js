import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div className="bg-cyan-900 flex justify-center">
            <ul className="flex gap-4">
                <Link to='/episode'><li>Episode</li></Link>
                <Link to='/favoris'><li>favoris</li></Link>
            </ul>
        </div>
    )
}