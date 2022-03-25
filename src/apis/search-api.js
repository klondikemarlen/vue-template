import http from "@/apis/http-client"

const searchUrl = "https://api.themoviedb.org/3/search/movie"
const API_KEY = "a99cc60fc2b34dbb18cb806b8a88ed14"

export default {
  get(params) {
    return http
      .get(searchUrl, { params: { api_key: API_KEY, ...params } })
      .then((response) => response.data)
      .catch(console.error)
  },
}
