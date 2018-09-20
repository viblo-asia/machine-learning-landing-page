<template>
  <footer class="footer my-sm-and-up-3 my-xs-only-1">
    <el-row type="flex" justify="center">
      <el-col>
        <a
          href="https://viblo.asia"
          target="blank"
          class="footer__logo mt-1">
          <img src="https://viblo.asia/logo_full.svg" alt="Viblo logo"/>
        </a>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <p class="footer__copyright">&copy; 2018 Viblo. All rights reserved.</p>
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
  @import '~assets/sass/variables/colors';

  .footer-bg {
    background: $bg-footer;
  }

  .footer {
    &__logo {
      display: block;
      img {
        max-height: 2.5rem;
      }
    }

    &__copyright {
      font-size: 1.1rem;
      color: $primary;
      text-align: center;
    }
  }
</style>
