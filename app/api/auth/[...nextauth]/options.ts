import type { NextAuthOptions, User as NextAuthUser } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      profile(profile) {
        let userRole = "Github User";
        if (profile?.email == "mariam.razmadze.1@iliauni.edu.ge") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    GoogleProvider({
      profile(profile) {
        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        if (credentials) {
          try {
            const foundUser = await User.findOne({ email: credentials.email });
            if (foundUser) {
              const user = Array.isArray(foundUser) ? foundUser[0] : foundUser;
              const match = await bcrypt.compare(
                credentials.password,
                user.password
              );

              if (match) {
                delete user.password;
                return user;
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
