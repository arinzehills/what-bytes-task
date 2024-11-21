import { useEffect, } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePost } from "@/hooks/usePosts";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export interface RegisterResponse {
    data: {
        token: string;
        user: {
            name: string;
            email: string;
            role: "vendor" | "customer";
        };
    };
}

export const useRegister = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const returnUrl = searchParams.get("returnUrl");
    const { data, error, isLoading, execute } = usePost<RegisterResponse>();
    const [setUser] = useLocalStorage<any>("user", "");
    const [setToken] = useLocalStorage<any>("token", "");

    const handleLogin = async (values: { "action": "register", name: string; email: string; password: string }) => {
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
