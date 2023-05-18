export type User = {
    id: number;
    first_name: string;
    last_name: string;
    uuid: string;
    email: string;
    password: string;
    permissions: string | null;
    avatar?: string | null;
    role: "SUPER_ADMIN" | "ADMIN" | "GENERAL";
    csrf_token?: string;
    current_password?: string;
    new_password?: string;
    email_verified: boolean;
    is_active: boolean;
    last_login: Date | null;
    created_at: Date;
};

export type JSONResponse = {
    status: "success" | "fail";
    data?: any;
    error?: any;
};
