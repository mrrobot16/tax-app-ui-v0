export type Message = {
    info: string;
    type: string;
}

export type MessageListProps = {
    loading: boolean;
    messages: Message[];
    callback: () => unknown | void;
}
