import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div>
            <ul>
                <Link to='/episode'><li>Episode</li></Link>
            </ul>
        </div>
    )
}