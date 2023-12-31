import axios, { Axios, AxiosError } from 'axios';
import { API_BASE_URL } from 'config/app';
import { Message, openAIStatusCallback } from 'types';

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
    callback?: (error?: string | null | boolean | Error | unknown) => void
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
    } catch (error: AxiosError | unknown) {
        console.error('Error with new conversation with openai', error);

        if(callback) {
            callback(error);
        }

        throw error;
    }
}

export async function openAIStatus(callback: openAIStatusCallback) : Promise<{ status: number | undefined, error?: AxiosError }> {
    try {
        const url = `${API_BASE_URL}/openai/status`;
        const response = await axios.get(url);

        return response;
    } catch (error: AxiosError | unknown) {
        console.error('Error with checking openai status', error);
        callback(error);

        return {
            error: error as AxiosError,
            status: (error as AxiosError).response?.status,
        };
    }
}

export async function apiStatus() {
    try {
        const url = `${API_BASE_URL}/`;
        const response = await axios.get(url);

        return response;
    } catch (error: AxiosError | unknown) {
        console.error('Error with checking api status', error);

        const status = (error as AxiosError).response?.status ? (error as AxiosError).response?.status : null;

        return {
            error: error as AxiosError,
            status: status || 500,
        };
    }
}

export async function newConversationMessageV1(
    message: Message,
    callback?: (error?: string | null | boolean | Error | unknown) => void
) {
    try {
        const url = `${API_BASE_URL}/openai/chat-completion`;
        const body = {
            ...message,
        };
        const response = await axios.post(url, body);

        return response;
    } catch (error: AxiosError | unknown) {
        console.error('Error with openai/chat-completion', error);

        if(callback) {
            callback(error);
        }

        throw error;
    }
}

export async function newConversationChatCompletionMessageV1(
    user_id: string,
    message: Message,
    callback?: (error?: string | null | boolean | Error | unknown) => void
) {
    try {
        const url = `${API_BASE_URL}/conversations/new/message/chat-completion`;
        const body = {
            conversation: {
                user_id,
            },
            message: {
                ...message,
                user_id,
            },
        };
        const response = await axios.post(url, body);

        return response;
    } catch (error: AxiosError | unknown) {
        console.error('Error with openai/chat-completion', error);

        if(callback) {
            callback(error);
        }

        throw error;
    }
}

export async function newMessageChatCompletion(
    user_id: string,
    conversation_id: string,
    message: Message,
    callback?: (error?: string | null | boolean | Error | unknown) => void
) {
    try {
        const url = `${API_BASE_URL}/conversations/message/chat-completion`;
        const body = {
            user_id,
            conversation_id,
            ...message,
        };

        const response = await axios.post(url, body);

        return response;
    } catch (error) {
        console.error('Error with openai/chat-completion', error);

        if(callback) {
            callback(error);
        }

        throw error;
    }
}
