export type Message = {
    info: string;
    type: string;
}

export type MessagesListProps = {
    loading: boolean;
    messages: Message[];
    callback: () => unknown | void;
}
