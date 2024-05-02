import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results : T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '84a5ab09da404023a50c949665ed8f30'
    }
})