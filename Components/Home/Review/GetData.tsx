import { Client } from "@notionhq/client"


interface NotionPageItem {
    object: 'page';
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: {
      object: 'user';
      id: string;
    };
    last_edited_by: {
      object: 'user';
      id: string;
    };
    cover: null;
    icon: null;
    parent: {
      type: 'database_id';
      database_id: string;
    };
    archived: boolean;
    in_trash: boolean;
    properties: {
      Rating: {
        id: string;
        type: 'number';
        number: number ; // Có thể là null nếu không có giá trị
      };
      Text: {
        id: string;
        type: 'rich_text';
        rich_text: {
          type: 'text';
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string; // Có thể có nhiều giá trị khác nhau, để string cho tổng quát
          };
          plain_text: string;
          href: null;
        }[];
      };
      Name: {
        id: string;
        type: 'title';
        title: {
          type: 'text';
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string; // Tương tự như Text
          };
          plain_text: string;
          href: null;
        }[];
      }
    };
    url: string;
    public_url: null;
  }

export const GetReview = async () : Promise<NotionPageItem[] | undefined>=>{
    
    try{
        const notion = new Client({auth : "ntn_w20748058256ErM2tsTcuwnawmMawV7mDwJDsEOYL5mdos"})

    const databaseId = "1cd07bab064180988837dffbbf74cf9a"

    const response = await notion.databases.query({
        database_id: databaseId,
    })
    return response.results as NotionPageItem[]
    }catch(err){
        console.log(err)
    }
}