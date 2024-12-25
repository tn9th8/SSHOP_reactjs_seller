import { IAccount, IApiRes } from '../types/backend.type';
import axios from './axios.config';


export const callLogin = (username: string, password: string): Promise<IApiRes<IAccount>> => {
    return axios.post<IApiRes<IAccount>>('/api/v1/accounts/login', { username, password }) as any;
}