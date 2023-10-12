import { createRouteData } from "solid-start";
import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";

export type Blog = {
    id: string,
    title: string,
    body: string,
    img: MicroCMSImage
} & MicroCMSDate

export const client = createClient({
    serviceDomain: "tiamat",
    /* apiKey: process.env.MICROCMS_API_KEY as string, */
    apiKey: "cea0bdf6bfc54fbd8b53f3bfbbdc346710d8",
    retry: true
})

export const getList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Blog>({
     endpoint: "blog",
     queries,
    });
    return listData;
};
   
export const getDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
   ) => {
    const detailData = await client.getListDetail<Blog>({
     endpoint: "blog",
     contentId,
     queries,
    });
    return detailData;
};

export function FetchBlogListData(){
    const fetchListData = createRouteData(async () => {
        return await getList()
    })()

    if(fetchListData === undefined){
        throw new Error("データが存在していないよ")
    }
    return fetchListData
}

export function FetchBlogArticleData(contentId: string){
    const FetchArticleData = createRouteData(
        async() => {
            return await getDetail(contentId)
        }
    )()
    if(FetchArticleData === undefined){
        throw new Error("データが存在していないよ")
    }
    return FetchArticleData
    
}