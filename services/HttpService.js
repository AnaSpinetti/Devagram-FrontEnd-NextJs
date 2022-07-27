import axios from "axios";

export default class HttpService{
    constructor(){
        this.axios = axios.create({
            baseURL: 'https://devagram-indol.vercel.app/api'
        });
    }

    post(url, dados){
        console.log(url, dados)
        return this.axios.post(url, dados);
    }
}