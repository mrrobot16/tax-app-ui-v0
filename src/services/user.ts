import axios, { Axios, AxiosError } from 'axios';
import { API_BASE_URL } from 'config/app';
import { createRandomUser } from 'utils/auth';
import { User } from 'types';

export async function newUser(newUser: User = createRandomUser()) {
        const url = `${API_BASE_URL}/users/new`;
        const body = {
            ...newUser,

        };
        const response = await axios.post(url, body);

        return response;
}

export async function getUser(id: string) {
        const url = `${API_BASE_URL}/users/${id}`;
        const response = await axios.get(url);

        return response;
}
