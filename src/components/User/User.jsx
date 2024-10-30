

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
        </div>
    );
};

export default User;