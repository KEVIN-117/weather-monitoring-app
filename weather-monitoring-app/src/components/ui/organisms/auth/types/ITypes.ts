export interface ILogin {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: IUser;
}

export interface IRegister {
    name: string;
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    status: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}