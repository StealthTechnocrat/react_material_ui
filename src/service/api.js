import axios from 'axios'

const url = 'http://localhost:8000';

export const authenticateSignUp = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error.message);
    }
}
export const authenticateLogin = async (user) => {
    try{
        return await axios.post(`${url}/login`, user)
    }catch(error){
        console.log('login error',error.message)
    }
}
    