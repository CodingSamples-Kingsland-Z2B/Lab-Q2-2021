import { Link } from 'react-router-dom';

function ListItem(props){
    return (
        <li className="listItem">
            <Link to={props.location}>{props.location}</Link>
        </li>
    )
}

export default ListItem;