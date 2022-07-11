// project imports
import { UserProfile } from 'types/user-profile';

export interface JWTDataProps {
    userId: string;
}

export type JWTContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfile | null | undefined;
    logout: () => void;
    login: (loginName: string, encodePwd: string) => Promise<void>;
    register: (userName: string, email: string, backgroundIntroduction: string, phone: string, role: number) => Promise<void>;
    resetPassword: (email: string) => void;
    updateProfile: VoidFunction;
};

export interface InitialLoginContextProps {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfile | null | undefined;
}
