// export const API_KEY = `?api_key=38d8dd67d0503c7b3179fefed4f58607`
// token 

// renpi renpi portfolio empresarial
// `IGAASn8vqAGERBZAE9uMDhHa194aXJEd0hWTkJfQWlueVdmSmtCWDVQal9BbEFaSFMzZAmhzOXJZATGsySGNFM01pV1pyLVdMam1XSWtjMUJZAOVJhOHVyOVF5dk9vZA0VWTEI0MVV0aUc3U05ub1BlWkRFZA3hsZAzVCTUVPVDlZALXN1QQZDZD`

export const TOKEN = `IGAAcGmhquDBVBZAE11eWltaXFuaUJSc1E3MzNjbzVPSkxUU3k1WHlvSncxOUkzTWpzYm9ZAOTVBX3lsWnBYUElsNS1xU0xJSjNTaXlnemdFNGZA2elF6ZAmh4UWFrS2dMTWpxNm9WTGxrb0o5cGtFXzNIdkxKSHA4TFZAZARGQzOW9KWQZDZD`
export const BASEURL = `https://graph.instagram.com/`
export const FIELDS = `id,username,account_type,media_count`
export const DATACONTENT = `id,caption,media_type, media_url, permalink, timestamp, account_type,media_count`
export const URLOEMBED  = `instagram_oembed`
export const URLPOST = `https://www.instagram.com/p/DDsHzK_v3MZ/`
// export const URLSERIES = `trending/tv/day`
// export const URLGENRES = `genre/movie/list`
// export const URLMOVIECATEGORIES = `discover/movie`

// export const esp = `&language=es-CL`

export const imgW300 = `https://image.tmdb.org/t/p/w300`
export const imgW500 = `https://image.tmdb.org/t/p/w500`


// ig api fetch
// getting user data
// const getUSerData = async() => {
//     const resp = await fetch(`${BASEURL}me?fields=${FIELDS}&access_token=${TOKEN}`)
//     const data = await resp.json()
//     const userId = data.id
//     console.log(userId);
    

//     return userId
// }

// // getUSerData()
// const userIdProfile = await getUSerData()

// const getUserPost = async() => {
//     // gettin posts
//     const respu = await fetch(`${BASEURL}me/media?&access_token=${TOKEN}`)
//     const datas = await respu.json()
//     console.log(datas);
// }
// await getUserPost()
// await getUserPost(userIdProfile)
// TODO> obtener los post en los que estamos como 'colaboradores'
