import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePost } from "@/hooks/usePosts";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export interface LoginResponse {
    data: {
        token: string;
        user: {
            name: string;
            email: string;
            role: "vendor" | "customer";
        };
    };
}

export const useLogin = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const returnUrl = searchParams.get("returnUrl");
    const { data, error, isLoading, execute } = usePost<LoginResponse>();
    const [user, setUser] = useLocalStorage<any>("user", "");
    const [token, setToken] = useLocalStorage<any>("token", "");

    const handleLogin = async (values: { "action": "login", email: string; password: string }) => {
        execute("/api/auth", values);
    };

    useEffect(() => {
        if (data) {
            setUser(data.data.user);
            setToken(data.data.token);
            router.push(returnUrl ?? "/dashboard");
        }
    }, [data, router, returnUrl, setUser, setToken]);

    return { handleLogin, error, isLoading };
};
