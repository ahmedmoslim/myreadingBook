export interface BookBase {
id:string,
title:string,
authors:string[],
imageLinks:{
    smallThumbnail:string,
    thumbnail:string
},
shelf:string,
industryIdentifiers?:IndustryIdentifiers[],

description:string,
publishedDate:string,
averageRating:number,
categories:string,
}

type IndustryIdentifiers ={
    type:string,
    identifier:string
}