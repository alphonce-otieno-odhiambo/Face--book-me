import NextAuth from "next-auth"
import  { SessionProvider } from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  Providers: [
    SessionProvider.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})