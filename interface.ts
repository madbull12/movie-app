export interface Movie {
    poster_path:string | null;
    adult:boolean;
    overview:string;
    release_date:string;
    id:number;
    original_title:string;
    original_language:string;
    title:string;
    backdrop_path:string | null;
    popularity:number;
    video:boolean;
    vote_count:number;
    vote_average:number;
    name:string;
}

// export interface TV {
//     name:string;
//     poster_path:string;
//     vote_average:number;
//     id:number;

// }