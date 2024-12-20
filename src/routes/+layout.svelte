<script>
  import "../assets/styles/global.css";
  import Header from "$lib/components/Header.svelte";
  import Container from "$lib/components/Container.svelte";
  import Content from "$lib/components/Content.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<!-- Google tag (gtag.js) -->
<Head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-T6RJY7HY09"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-T6RJY7HY09');
  </script>
</Head>

<Container>
  <Header />
  <Content>
    <slot />
  </Content>
  <Footer />
</Container>
