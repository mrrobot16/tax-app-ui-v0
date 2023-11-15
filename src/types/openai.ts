import { AxiosError } from 'axios';

export type openAIStatusCallback = {
    (error?: string | AxiosError | unknown): void;
}
