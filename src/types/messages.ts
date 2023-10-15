export type Message = {
    content: string;
    role: string;
}

export type MessagesListProps = {
    loading: boolean;
    messages: Message[];
}

export type SendMessagesProps = {
    loading: boolean;
    sendMessage: (message: Message) => void;
};
