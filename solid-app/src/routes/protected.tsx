import { getSession } from "@solid-auth/base";
import { signOut } from "@solid-auth/base/client";
import { connect } from "http2";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Show, type VoidComponent,onMount, createSignal } from "solid-js";
import { createRouteData, useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";
import { Blog, FetchBlogListData, getList } from "~/lib/Blog";
import { authOpts } from "~/routes/api/auth/[...solidauth]";


export const routeData = () => {
  return createServerData$(async (_, event) => {
    const session = await getSession(event.request, authOpts);
    if (!session) {
      throw redirect("/");
    }
    return session;
  });
};

const Protected: VoidComponent = () => {
  const [BlogList,setBlogList] = createSignal<MicroCMSListResponse<Blog> | undefined>(undefined)
  onMount(() => {
    const response = FetchBlogListData()
    if(response === undefined) throw new Error("データが存在していないよ")
    setBlogList(response)
  })
  const session = useRouteData<typeof routeData>();
  return (
    <Show when={session()} keyed>
      {(us) => (
        <main>
          <h1>Protected</h1>
          {us.user?.image ? <img src={us.user?.image} /> : null}
          <span>Hey there {us.user?.name}! You are signed in!</span>
          <button
            onClick={() =>
              void signOut({
                redirectTo: "/",
                redirect: true,
              })
            }
          >
            Sign Out
          </button>
          <ul>
            {BlogList()!.contents.map((content) => {
              console.log(content)
              return (
                  <li>{content.title}</li>
              )
            })}
          </ul>
        </main>
      )}
    </Show>
  );
};

export default Protected;
