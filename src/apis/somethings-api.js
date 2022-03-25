import http from "@/apis/http-client"

const somethingsUrl = "/api/somethingss"

export default {
  getAll() {
    return http
      .get(somethingsUrl)
      .then((response) => response.data)
      .catch(console.error)
  },
}
