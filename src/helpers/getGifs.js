export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=3nluynQ5UX42CR5mfcLVUN40kgeq0l4J`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  });

  return gifs;

}