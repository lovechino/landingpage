import { Client } from "@notionhq/client"

export const GetReview = async ()=>{
    
    try{
        const notion = new Client({auth : "ntn_w20748058256ErM2tsTcuwnawmMawV7mDwJDsEOYL5mdos"})

    const databaseId = "1cd07bab064180988837dffbbf74cf9a"

    const response = await notion.databases.query({
        database_id: databaseId,
    })
    return response.results
    }catch(err){
        console.log(err)
    }
}