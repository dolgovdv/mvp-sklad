import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const dynamic = "force-dynamic";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          // Запрос к NestJS бэкенду внутри Docker-сети
          const response = await fetch("http://backend:3001/auth/google-sync", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
              avatar: user.image,
            }),
          });

          if (!response.ok) return false;

          const data = await response.json();
          user.backendToken = data.token;
          return true;
        } catch (error) {
          console.error("Ошибка связи с бэкендом:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user && (user as any).backendToken) {
        token.accessToken = (user as any).backendToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
