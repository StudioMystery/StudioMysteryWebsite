---
title: What is Shorter.Services?
date: 2024-12-03 08:00 AM
description: A side project that was really a lesson in disguise..
isCompleted: true
slug: what-is-shorter.services
tags: [software dev]
---

[Shorter.Services](http://Shorter.Services) is a SAAS application I dreamed up in December 2023. I wanted to make it easier to convert human-readable text from rasterized files into machine-readable data. I also wanted to make money off what I thought was a unique idea.

Fast forward 10 months, and I came to realize that my idea was not at all unique. At least 5 other, larger companies already had similar offerings. I was disheartened, but I finished the project.

Maybe there’s a law of technology that says: If you think you have a new idea, someone else has already prototyped it.

Anyways, I was able to build an efficient web app, and my pricing was very competitive (read: cheap), but I didn’t believe I’d ever make real money off it. Just like my last major project, building the thing was only half the battle.

Applications are like newborns, they need constant support. At least if I was knitting bibs on Etsy, I could say goodbye to my customers after they buy the thing. With this project, I envisioned so much hand-holding post-sale that it would never pay off.

Code-wise, it was a joy to build. In the first week, I had a working prototype of the service. Golang especially was a wonderful upgrade from C# and Python, both languages I’ve used in the past. The language conventions around async, error handling, and build speed were just so good.

Unfortunately, despite the technical prowess, it took me ten more months to finish the rest of the project. A lot of that is because of the UI / frontend. Both took a large amountnof time and effort to design and build. I thought it was a simple enough system, just a few forms. That is my inexperience showing.

To summarize, Shorter was built on a custom Golang backend and a Sveltekit frontend. It used a remote Neon db and a series of containers from Google, including an OCR utility. It deployed to a pair of lite GCP VMs and used Stripe as a payments provider.

Would I do it all over again? Even though I know now that it was a failure? Yes, I would. I learned a lot and built something to spec, my spec at least.

It wasn’t a failure of code, but of marketing.
