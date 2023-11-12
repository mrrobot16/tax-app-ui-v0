import axios, { Axios, AxiosError } from 'axios';
import { API_BASE_URL } from 'config/app';

export async function newConversation(user_id: string) {
    try {
        const url = `${API_BASE_URL}/conversations/new`;
        const body = {
            user_id,
        };
        const response = await axios.post(url, body);

        console.log('response', response);

        return response;
    } catch (error) {
        console.error('Error with new conversation with openai', error);
    }
}
