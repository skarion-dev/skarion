import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          },
        );

        const data = await res.json();
        if (!data?.id) {
          console.error("Login failed:", data);
          return null;
        }

        return {
          id: String(data.id),
          name: data.name,
          email: data.email,
          role: data.role,
          image: data.image,
          lastLogin: data.lastLogin,
          accessToken: data.accessToken,
        };
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      async profile(profile) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/oauth`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              provider: "google",
              providerAccountId: profile.sub,
              profile,
            }),
          },
        );

        if (!res.ok) throw new Error("OAuth backend error");
        const user = await res.json();

        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.image,
          lastLogin: user.lastLogin,
          accessToken: user.accessToken,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = String(user.id);
        token.role = user.role;
        token.image = user.image;
        token.lastLogin = user.lastLogin;
        token.email = user.email;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.image = token.image as string;
        session.user.lastLogin = token.lastLogin as string;
        session.user.email = token.email as string;
      }
      (session as any).accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true, //TODO: update later
});
