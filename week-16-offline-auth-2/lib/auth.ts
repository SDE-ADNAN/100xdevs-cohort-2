import CredentialsProvider from "next-auth/providers/credentials";
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any, req) {
        console.log(credentials);
        return {
          id: "user1",
          name: "adnan",
          email: "adnan@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }: any) => {
      token.userId = token.sub;
      return token;
    },
    session: ({ session, token }: any) => {
      if (session && session.user) {
        session.user.id = token.userId; // token.sub
      }
      return session;
    },
  },
};
