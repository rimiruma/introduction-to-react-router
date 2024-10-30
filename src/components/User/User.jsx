import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>Name:{name}</h2>
            <p>email:{email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Detail</Link>
            <Link to={`/user/${id}`}>
                  <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;