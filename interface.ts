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
    name?:string;
}

export interface MovieDetails {
    backdrop_path?:string;
    genres:Genre[];
    id:number;
    popularity:number;
    release_date:string;
    title:string;
    status:string;
    production_companies:Company[];
    overview:string;
    runtime?:number;
    vote_average:number;

}

interface Company {
    name:string;
    id:number;
    logo_path?:string;

}

interface Genre {
    id:number;
    name:string;
}

// export interface TV {
//     name:string;
//     poster_path:string;
//     vote_average:number;
//     id:number;

// }