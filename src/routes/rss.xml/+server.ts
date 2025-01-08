// @ts-nocheck

import { envVariables } from "$lib/envVariables";
import { getPosts } from '$lib/getPosts'


export async function GET() {
  const response = getPosts()

  const body = xml(response.body.posts)

  return new Response(String(body))
}

const xml =
  posts => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Studio Mystery</title>
    <link>https://www.studiomystery.com/rss.xml</link>
    <description>Studio Mystery is an indie game studio focusing on narrative-driven RPGs. It is run by Thadd Simpson.</description>
    ${posts
      .map(
        post =>
          `
        <item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link>${envVariables.basePath}/blog/${post.slug}/</link>
          <pubDate>${new Date(post.date)}</pubDate>
          <content:encoded>
            <div style="margin-top: 50px; font-style: italic;">
              <strong>
                <a href="${envVariables.basePath}/blog/${post.slug}">
                  Keep reading
                </a>
              </strong>  
            </div>
          </content:encoded>
        </item>
      `
      )
      .join('')}
  </channel>
</rss>`