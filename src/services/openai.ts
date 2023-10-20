import axios from 'axios';
import { API_BASE_URL } from 'config/app';
import { Message } from 'types';

export async function newConversationWithOpenai(
    user_id: string | null,
    message: Message
) {
    try {
        const url = `${API_BASE_URL}/conversations/new/openai`;
        const body = {
            user_id,
            message,
        };
        const response = await axios.post(url, body);

        return response;
    } catch (error) {
        console.error('Error with new conversation with openai', error);
    }
}

export async function newConversationMessage(
    user_id: string,
    conversation_id: string,
    message: Message,
) {
    try {
        const url = `${API_BASE_URL}/conversations/message/new/openai/${conversation_id}`;
        const body = {
            user_id,
            conversation_id,
            message,
        };
        const response = await axios.post(url, body);

        return response;
    } catch (error) {
        console.error('Error with new conversation with openai', error);
    }
}

export async function checkOpenAIStatus() {
    try {
        const url = `${API_BASE_URL}/openai/status`;
        const response = await axios.get(url);

        return response;
    } catch (error) {
        console.error('Error with checking openai status', error);
    }
}
