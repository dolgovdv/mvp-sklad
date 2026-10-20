import { withAuth } from "next-auth/middleware";
import { ROUTES } from "@/shared/config/routes";

export default withAuth({
  pages: { signIn: ROUTES.LOGIN },
});

export const config = {
  matcher: [
    // Защищаем все внутренние страницы, включая новые роуты
    "/((?!api/auth|login|_next/static|_next/image|favicon.ico).*)",
  ],
};
