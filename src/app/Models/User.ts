export interface User {
    name: string;
    email: string;
    id?: number;
    token?: number;
    fanme?: string;
    lname?: string;
}

export interface UserReg {
    name: string;
    email: string;
    password: string;
}

export interface LoginUser {
    email: string;
    password: string;
}
