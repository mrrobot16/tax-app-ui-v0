import { Message } from 'types';

export type Conversation = {
    user_id: string;
    id?: string
    messages?: Message[];
    message_groups?: Message[];
    active?: boolean;
}
