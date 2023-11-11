export type User = {
    id?: string;
    conversations?: string[];
    email: string;
    name: string;
    password: string;
    auth_type: string;
    active?: boolean;
}
