<script>
  import { MetaTags } from "svelte-meta-tags";
  import { envVariables } from "$lib/envVariables";
  import { blogMetaData } from "$lib/blogMetaData";

  const meta = {
    title: `About | ${blogMetaData.blogTitle}`,
    description: blogMetaData.description,
    url: envVariables.basePath,
    siteName: blogMetaData.blogTitle,
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1000,
      height: 523,
      alt: "image",
    },
  };
</script>

<MetaTags
  title={meta.title}
  description={meta.description}
  canonical={meta.url}
  openGraph={{
    description: meta.description,
    images: [
      {
        ...meta.image,
      },
    ],
    site_name: meta.siteName,
    title: meta.title,
    type: "website",
    url: meta.url,
  }}
  twitter={{
    cardType: "summary_large_image",
    title: meta.title,
    description: meta.description,
    image: meta.image.url,
    imageAlt: meta.image.alt,
  }}
/>
<div class="about-container">
  <h1>About</h1>
  <p>Studio Mystery is an indie game studio focusing on narrative-driven RPGs. It is run by <a href="https://bsky.app/profile/thadd-simpson.bsky.social">Thadd Simpson</a>, a writer, developer, tester, and gaming enthusiast.</p>
  <p>If you want to reach out, follow me on <a href="https://bsky.app/profile/thadd-simpson.bsky.social">BlueSky</a>.</p>
</div>
