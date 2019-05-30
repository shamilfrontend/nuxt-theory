<template>
  <section>
    <h1>{{ user.employee_name }}</h1>
    <hr>
    <div class="info">
      <img
        :src="user.profile_image || 'https://i.ya-webdesign.com/images/user-image-png-7.png'"
        :alt="user.employee_name"
        width="250"
      >
      <ul>
        <li><strong>ID:</strong> {{ user.id }}</li>
        <li><strong>AGE:</strong> {{ user.employee_age }}</li>
        <li><strong>SALARY:</strong> {{ user.employee_salary }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.id);
    },
    async asyncData({params, error, store}) {
      try {
        const user = await store.dispatch('users/fetchUserById', params.id);
        return {
          user
        }
      } catch (e) {
        error(e);
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin-left: 30px;
    padding-left: 30px;
    border-left: 1px solid #999;
  }

  li {
    margin-bottom: 5px;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
</style>
