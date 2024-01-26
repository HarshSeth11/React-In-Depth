import { useContext } from 'react'
import UserContext from '../contexts/UserContext';

export default function Profile() {
    const { user } = useContext(UserContext);

    if(user) {
        return (
            <div>
                <h1>Hello, {user.username}</h1>
            </div>
        )
    }

    else {
        return (
            <h1>Please Login</h1>
        )
    }
}
