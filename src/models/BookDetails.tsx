import { BookBase } from "./BookBase";

export  interface BookDetails extends  BookBase {
    pageCount:number,
    description:string,
    publishedDate:string,
    averageRating:number,
    categories:string,
    } 