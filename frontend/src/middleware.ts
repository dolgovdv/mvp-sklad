export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // Защищаем все внутренние страницы, включая новые роуты
    "/((?!api/auth|login|_next/static|_next/image|favicon.ico).*)",
  ],
};
