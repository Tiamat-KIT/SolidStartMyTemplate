import { createEffect } from "solid-js";

export default function About() {
  /* createEffect(() => document.getElementById("ume")?.appendChild(
      
  )) */
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        あなたの経験談をみんなに伝えよう！
      </h1>
      {/* <span id="ume" /> */}
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdQHQDPqHE4Mh_MC3CXkhyMazdvmuiXzauov2b9g5bWvMtSHg/viewform?embedded=true" width="1280" height="908" /* frameborder="0" marginheight="0" marginwidth="0" */>読み込んでいます…</iframe>
    </main>
  );
}
