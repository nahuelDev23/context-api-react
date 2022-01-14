export const fetchApi = async (url, method = "GET") => {

  if (method === 'GET') {
    return await fetch(url)
  }

}