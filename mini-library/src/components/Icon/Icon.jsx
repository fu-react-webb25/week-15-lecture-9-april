import { Link } from 'react-router-dom';
import './icon.css';

const Icon = ({ path, type, onClick = null }) => {
    return (
        <Link to={ path } className="icon" onClick={ onClick } >
            <i className={`icon__content fa-solid ${type}`}></i>
        </Link>
    )
}

export default Icon;