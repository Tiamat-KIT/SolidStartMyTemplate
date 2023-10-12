import { JSX } from "solid-js";
import { getSession } from "@auth/solid-start"
import { createServerData$ } from "solid-start/server"
import { authOpts } from "~/routes/api/auth/[...solidauth]"
import { Session } from "@auth/core/types";
import {signIn,signOut} from "@auth/solid-start/client"

/* const session = useSession()
const loading = session.loading
const user = () => session()?.user */

export default function LogIOButton():JSX.Element {
  /** 
   * @param 常にサーバ上で実行される非同期データ取得関数から得たUserデータ
   */
  const FetchUserData = createServerData$(
    async (_, { request }) => {
      return await getSession(request, authOpts)
    },
    { key: () => ["auth_user"] }
  )

  const User = FetchUserData()
  const ViewProfile = ({User}: {User:Session | null | undefined}) => {
    if(typeof User !== "undefined" && User !== null){
      return (
        <>
          <p>{User.user?.name}</p>
          <p>{User.user?.email}</p>
          <button class="btn" onClick={() => signOut()}>Sign Out</button>
        </>
      )
    }
    return (
      <>
        <p>Your Login Wait...</p>
        <button class="btn" onClick={() => signIn()}>Sign in</button>
      </>
    )
  }

  return (<ViewProfile User={User}/>)
};
