export type Message = {
    text: string;
    type: string;
}

export type MessagesListProps = {
    loading: boolean;
    messages: Message[];
}

export type SendMessagesProps = {
    loading: boolean;
    sendMessage: (message: Message) => void;
    callback: (message: Message) => void;
};
