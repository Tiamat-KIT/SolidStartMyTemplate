import { SolidAuth, type SolidAuthConfig } from "@solid-auth/base";
// import GitHub from "@auth/core/providers/github"
import Google from "@auth/core/providers/google"

/**
 * @param GoogleまたはBoxのアカウントでログインできるような設定を行う関数
 * @type SolidAuthConfig
 * */

export const authOpts: SolidAuthConfig = {
    secret: process.env.NEXTAUTH_SECRET as string,
    providers: [
        Google({
            clientId:process.env.GOOGLE_API_KEY as string,
            clientSecret:process.env.GOOGLE_SECRET_KEY as string
        }),
    ],
  debug: false,
}

export const { GET, POST } = SolidAuth(authOpts)