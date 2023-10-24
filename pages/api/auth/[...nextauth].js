import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/db/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      //   profile(data) {
      //     return {
      //         id: data.id,
      //         name: data.name,
      //         email: data.email,
      //         image: data.avatar_url,
      //         admin: false,
      //         preferedColors: ["#dddddd", "#ffffff"],
      //     };
      // },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),

  // callbacks: {
  //   async session({ session, user }) {
  //     session.user.userId = user.id;
  //     return session;
  //   },
  // },
};

export default NextAuth(authOptions);
