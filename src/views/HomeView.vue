<template lang="pug">
.home.mx-5
  pre {{ meta }}

  b-container
    b-row
      b-col.mb-5
        b-form(@submit.prevent="search")
          b-form-input.mb-3(
            v-model="searchTerm",
            type="text",
            placeholder="Enter search query",
            required
          )
          b-button(type="submit", variant="primary") Submit

    b-row
      b-col
        b-carousel(
          :interval="6000",
          controls,
          indicators,
          background="#ababab",
          style="text-shadow: 1px 1px 2px #333"
        )
          b-carousel-slide(
            v-for="movie in movies",
            :caption="movie.original_title",
            :text="movie.overview",
            :img-src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          )
    b-row.mt-3
      b-col(cols="12")
        b-pagination(
          v-model="currentPage",
          :total-rows="totalResults",
          :per-page="perPage",
          aria-controls="my-table",
          @input="$emit()"
        )
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"

import api from "@/apis/search-api"

// {
//   "page": 1,
//   "total_pages": 1,
//   "total_results": 2
// }

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data: () => ({
    currentPage: 1,
    // totalPages: 1,
    totalResults: 1,
    loading: false,
    meta: {},
    movies: [],
    searchTerm: "batman",
  }),
  computed: {
    perPage() {
      return this.movies.length
    },
  },
  watch: {
    currentPage(value) {
      this.search(this.searchTerm, value)
    },
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.loading = true
      api
        .get({ query: this.searchTerm, page: this.currentPage })
        .then((data) => {
          console.log("data", data)
          this.movies = data.results
          delete data.results
          this.meta = data
          // this.currentPage = data.page
          this.totalResults = data.total_results
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
