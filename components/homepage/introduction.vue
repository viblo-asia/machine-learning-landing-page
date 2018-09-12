<template>
  <el-row
    id="gioi-thieu"
    type="flex"
    justify="center"
    class="introduction py-sm-and-up-4">
    <el-col :sm="20" :md="18">
      <section-header>
        <template slot="title">
          <h4>Viblo <span class="icon-heart">&hearts;</span> Machine learning</h4>
        </template>
      </section-header>

      <div class="introduction__text">
        <p>
          Chúng tôi ứng dụng các kỹ thuật trong <strong>Machine Learning, Deep Learning</strong>
          và đặc biệt là <strong>Natural Language Processing</strong> để xây dựng các dịch vụ
          hiện đang được sử dụng bởi <a href="https://viblo.asia" class="link"><strong>Viblo</strong></a>
          (Một blog kĩ thuật dành cho các lập trình viên Việt Nam). Tất nhiên, chúng tôi không muốn
          giới hạn các dịch vụ này trong khuôn khổ của <strong>Viblo</strong>. Trong tương lai,
          chúng tôi sẽ tách các dịch vụ này thành các ứng dụng độc lập và bạn hoàn toàn có thể
          sử dụng chúng để xây dựng những ý tưởng của riêng mình.
        </p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import SectionHeader from '~/components/shared/section-header.vue'

  export default {
    components: {
      SectionHeader
    }
  }
</script>

<style lang="scss">
  @import "~assets/sass/variables/colors";

  .introduction {
    .icon-heart {
      color: #ff0000;
      font-size: 2.4rem;
    }

    &__text, &__text p {
      font-size: 1.1375rem;
      text-align: justify;
    }
  }
</style>
