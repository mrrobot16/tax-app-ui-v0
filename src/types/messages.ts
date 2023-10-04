export type Message = {
    info: string;
    type: string;
}

export type MessagesListProps = {
    loading: boolean;
    messages: Message[];
    callback: () => unknown | void;
}

export type SendMessagesProps = {
    sendMessage: (message: string) => unknown | void;
    loading: boolean;
};
