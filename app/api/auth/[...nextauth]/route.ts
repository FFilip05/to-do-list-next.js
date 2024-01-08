import Credentials from "next-auth/providers/credentials";
import { authOptions } from "../../../lib/auth"
  import NextAuth from "next-auth";

  const handler = NextAuth({
    providers:[
  ]});
  async function authorize(credentials, req:Req){
    if(!credentials?.username || !credentials?password) return null

    try{
      const user = await login(credentials.username, credentials.password)
      return user;
    } catch (e) {
      console.log(e)
      return null
    }
  }
  export { handler as GET, handler as POST };