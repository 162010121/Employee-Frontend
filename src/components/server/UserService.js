import axios from "axios";

class UserService{

    
}
export const loginUser=(loginDetails)=>
    {
        return axios.post('http://localhost:2000/employee/login',loginDetails)
        .then((res) => res.data)
    };

export default UserService