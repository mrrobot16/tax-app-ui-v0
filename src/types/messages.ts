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
    loading: boolean;
    sendMessage: (message: string) => unknown | void;
    callback: () => unknown | void;
};
