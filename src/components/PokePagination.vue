<template>
  <ul class="pagination">
    <li class="btn btn-success" :class="{ disabled: current_page <= 1 }">
      <a @click.prevent="goToPage(1)" href=".">Primeira</a>
    </li>
    <li
      v-for="i in prev"
      :key="'prev-' + i"
      :class="{ active: i === Number(current_page) }"
      class="btn btn-success"
    >
      <a @click.prevent="goToPage(i)" href=".">{{ i }}</a>
    </li>
    <li class="btn btn-success">
      <span>{{ current_page }}</span>
    </li>
    <li
      v-for="i in next"
      :key="'next-' + i"
      :class="{ active: i === Number(current_page) }"
      class="btn btn-success"
    >
      <a @click.prevent="goToPage(i)" href=".">{{ i }}</a>
    </li>
    <li class="btn btn-success" :class="{ disabled: current_page >= total_pages }">
      <a @click.prevent="goToPage(total_pages)" href=".">Última</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PokePagination",
  props: {
    pagination: {
      type: Object,
      required: true
    }
  },
  computed: {
    current_page() {
      return this.pagination.current_page
        ? this.pagination.current_page
        : this.pagination.page;
    },
    total_pages() {
      return this.pagination.total_pages
        ? this.pagination.total_pages
        : this.pagination.pages;
    },
    prev() {
      let page = this.current_page - this.calculateUpperRange,
        pages = [];

      if (page < 1) {
        page = 1;
      }

      for (var i = page; i < this.current_page; i++) {
        pages.push(i);
      }

      return pages;
    },
    next() {
      let page = this.current_page + this.calculateBottomRange,
        pages = [];

      if (page > this.total_pages) {
        page = this.total_pages;
      }

      for (var i = this.current_page + 1; i <= page; i++) {
        pages.push(i);
      }

      return pages;
    },
    calculateBottomRange() {
      return this.current_page < 6 ? 11 - this.current_page : 5;
    },
    calculateUpperRange() {
      return this.current_page > this.total_pages - 6
        ? 10 - (this.total_pages - this.current_page)
        : 5;
    }
  },
  methods: {
    goToPage(page) {
      if (page === this.current_page) {
        return;
      }
      this.$emit("page", { page });
    }
  }
};
</script>

<style scoped>
</style>