import { createRouteData, useParams } from "solid-start";
import { FetchBlogArticleData, getDetail } from "~/lib/Blog";
// import {parse} from "node-html-parser"

export default function BlogArticle(){
    const params = useParams<{ id: string }>()
    const ArticleData = FetchBlogArticleData(params.id)
    if(!ArticleData){
        return (
        <>
            <h1>NotFound</h1>
            <p>{params.id}</p>
        </>
        )
    }

    // console.log(ArticleData.body)

    return (
        <>
            <h1>{ArticleData.title}</h1>
            {ArticleData.body}
        </>
    )
}