import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [],
}

export default NextAuth(authOptions)