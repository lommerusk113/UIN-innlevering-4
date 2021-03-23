import client from './client'


const movieService = `title, 'actor':actor->name`;

export const getMovies = async () =>{
    const data = await client.fetch(`*[_type == "movie"]{${movieService}}`);
    return data;
};