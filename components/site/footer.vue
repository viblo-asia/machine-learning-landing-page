<template>
  <footer class="footer">
    <el-row type="flex" justify="center" align="middle">
      <el-col :md="3">
        <ul class="footer__links">
          <li class="footer__link footer__link--fb">
            <a :href="facebookPageURL" target="_blank" :title="facebookPageTitle">
              <img :src="facebookIcon" :alt="facebookPageTitle">
            </a>
          </li>
          <li class="footer__link footer__link--viblo">
            <a href="https://viblo.asia" target="_blank" title="Viblo">
              <img :src="vibloSmallIcon" alt="Viblo">
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" align="middle">
      <el-col :md="6">
        <p class="footer__copyright">
          &copy; 2017 Viblo. All rights reserved.
        </p>
      </el-col>
    </el-row>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        rootURL: 'https://viblo.asia',
        facebookPageURL: 'https://www.facebook.com/viblo.asia',
        facebookPageTitle: 'Viblo Facebook Fanpage',
        facebookIcon: 'https://marketing-image-production.s3.amazonaws.com/social/white/facebook.png',
        vibloSmallIcon: 'https://marketing-image-production.s3.amazonaws.com/uploads/bc6b9002cc06507253b8d35a512cfc668ea15e0a58884a7f432f828138dff3425c74cfc46edff91bcdac385382277abc72f6314c66c54076af6cee4bb369edfe.png'
      }
    }
  }
</script>

<style lang="scss">
  .footer-bg {
    background: #152133;
  }

  .footer {
    margin-top: 3rem;
    margin-bottom: 3rem;

    &__links {
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }

    &__link {
      display: block;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      &--fb {
        background: #3b579d;
      }
      &--viblo {
        background: #ffffff;
      }
    }

    &__link + &__link {
      margin-left: 1rem;
    }

    &__copyright {
      color: #9a9a9a;
      font-size: 0.8375rem;
      text-align: center;
    }
  }
</style>
