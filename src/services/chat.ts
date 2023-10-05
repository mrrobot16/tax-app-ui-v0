// /* eslint-disable no-unreachable */

import { Message } from 'types';

export const chat = async (
    message: string,
    callback: (message: Message) => void,
    errorCallback: (message: string) => void
) => {
    // NOTE: Fetch OpenAI API
    try {
        const response = 'openAIResponse';
        // throw 'error as string';

        setTimeout(() => {
            callback({
                text: response,
                type: 'api',
            });
        }, 1000 * 3);

        return {
            text: response,
            type: 'api',
        };
    } catch (error) {
        errorCallback('error with OpenAI');
    }
};
