import axios from 'axios';

const sendData = async(passage) => {
    const options = {
    method: 'post',
    url: '/input',
    baseURL: 'http://localhost:3000',
    data: {
        firstName: "Gorjesslian",
        lastName: "Sheesh",
        inputs: passage
    }};
    
    try {
        const resp = await axios(options);
        console.log(resp);
    } catch(err) {
        console.error("Leader Acquisition Error");
        throw err;
    }
}
    
export default sendData;