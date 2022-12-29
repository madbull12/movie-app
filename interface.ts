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
    movie_id?:number;
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
    poster_path:string;
}

export interface TVDetails extends MovieDetails {
    episode_run_time:number[];
    first_air_date:string;
    last_air_date:string;
    name:string;
    networks:Network[];
    number_of_episodes:number;
    number_of_seasons:number
    seasons:Season[];
    type:string;
}

interface Season {
    id:number;
    name:string;
    poster_path:string;
    season_number:number;
}

export interface SeasonDetails extends Season {
    overview:string;
    episodes:Episode[]
}

interface Episode {
    id:number;
    name:string;
    still_path:string;
}

interface Network {
    name:string;
    id:number;
    logo_path:string;

}

interface Company {
    name:string;
    id:number;
    logo_path?:string;

}

export interface Cast {
    id:number;
    name:string;
    profile_path:string;
    character:string;

}

interface Genre {
    id:number;
    name:string;
}

export interface MovieReview {
    id:string;
    author_details:Author;
    content:string;
    created_at:string;
    url:string;
}

interface Author {
    name:string;
    username:string;
    avatar_path:string | null;
    rating:number;
}

// export interface TV {
//     name:string;
//     poster_path:string;
//     vote_average:number;
//     id:number;

// }

export interface ISaved {
    title:string;
    id:string;
    vote_average:string;
    movieId:number;
    release_date:string;

}