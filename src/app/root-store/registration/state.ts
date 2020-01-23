import { User } from '../../Models/User';

export interface RegistrationState {
    isRegister: boolean;
    isOnline: boolean;
    user: User;
    isLoading: boolean;
    isError: boolean;
    error: string;
}

export const initilaRegState: RegistrationState = {
    isLoading: false,
    isOnline: false,
    isRegister: false,
    isError: false,
    user: null,
    error: ''
};
