import axios from "axios";

export default class HttpService{
    constructor(){
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL+'/api'
        });
    }

    post(url, dados){
        return this.axios.post(url, dados);
    }
}