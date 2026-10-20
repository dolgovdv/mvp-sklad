'use client';

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">mvp-sklad</h2>
        <p className="text-sm text-gray-500 mb-6">Войдите в систему через ваш Google-аккаунт</p>
        
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.79 5.79 0 0 1 8.2 12.725a5.79 5.79 0 0 1 5.79-5.79c2.457 0 4.414 1.134 5.485 2.17l3.193-3.193C20.657 3.91 17.589 2.182 14 2.182a9.818 9.818 0 0 0-9.818 9.818A9.818 9.818 0 0 0 14 21.818c5.4 0 9.818-4.327 9.818-9.818 0-.6-.063-1.218-.182-1.714H12.24Z"
            />
          </svg>
          <span>Войти через Google</span>
        </button>
      </div>
    </div>
  );
}
