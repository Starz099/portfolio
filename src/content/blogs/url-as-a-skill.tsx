const HighlightPath = ({ path }: { path: string }) => {
  return (
    <strong className="text-foreground inline max-w-full align-baseline leading-none font-medium">
      <span className="bg-muted text-foreground inline-block max-w-full rounded px-1.5 py-0 align-baseline text-xs leading-6 break-all sm:text-sm">
        {path}
      </span>
    </strong>
  );
};

const UrlAsASkill = () => {
  return (
    <article className="text-muted-foreground space-y-10">
      <section className="space-y-5">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          I rarely see the GitHub homepage.
        </h2>
        <p className="leading-8">
          If I want a repo, I type the repo URL. If I want a profile, I type the
          profile URL. If I want issues or pull requests, I just change the last
          part of the URL.
        </p>
        <p className="leading-8">
          No clicking through the UI. No menus. Just the URL bar.
        </p>
        <p className="leading-8">
          At some point I noticed something interesting. The more time you spend
          online, the more the URL bar starts feeling less like a place where
          you type websites and more like a navigation tool.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          When you start noticing patterns
        </h2>
        <p className="leading-8">
          When you first use a website, you rely completely on the interface.
        </p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>Click the button.</li>
          <li>Open the menu.</li>
          <li>Follow links.</li>
        </ul>
        <p className="leading-8">
          But after using the same site for a while, patterns start appearing.
          GitHub is a simple example.
        </p>
        <pre className="border-border bg-muted text-foreground overflow-x-auto rounded-xl border px-4 py-3 text-sm leading-7">
          <code>{`github.com/{username}
github.com/{username}/{repo}
github.com/{user}/{repo}/issues
github.com/{user}/{repo}/pulls`}</code>
        </pre>
        <p className="leading-8">
          If you are on <HighlightPath path="/issues" /> and want pull requests,
          you can just change it to <HighlightPath path="/pulls" />. No
          navigation needed.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          More Examples{" "}
        </h2>

        <div className="space-y-3">
          <h3 className="text-foreground text-xl font-semibold">
            Going directly to problems on LeetCode
          </h3>
          <p className="leading-8">
            On coding platforms like LeetCode, I rarely open the homepage
            anymore.
          </p>
          <pre className="border-border bg-muted text-foreground overflow-x-auto rounded-xl border px-4 py-3 text-sm leading-7">
            <code>{`leetcode.com/problems/{problem-name}
leetcode.com/problems/{problem-name}/submissions/
leetcode.com/u/{username}`}</code>
          </pre>
          <p className="leading-8">
            Once you know the structure, you can jump directly to where you want
            to go.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-xl font-semibold">
            Switching between Google accounts
          </h3>
          <p className="leading-8">
            Google services follow a similar pattern. For example in Gmail, the
            number after <HighlightPath path="/u/" /> represents the account
            index.
          </p>
          <pre className="border-border bg-muted text-foreground overflow-x-auto rounded-xl border px-4 py-3 text-sm leading-7">
            <code>{`https://mail.google.com/mail/u/0/#inbox
https://mail.google.com/mail/u/1/#inbox
https://mail.google.com/mail/u/2/#inbox`}</code>
          </pre>
          <p className="leading-8">
            Changing that number switches the account instantly. Works across
            many Google products.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-xl font-semibold">
            Jumping to a specific video moment
          </h3>
          <p className="leading-8">
            YouTube links support timestamps using the
            <span className="mx-1">
              <HighlightPath path="t" />
            </span>
            query parameter.
          </p>
          <pre className="border-border bg-muted text-foreground overflow-x-auto rounded-xl border px-4 py-3 text-sm leading-7">
            <code>youtube.com/watch?v=VIDEO_ID&t=300</code>
          </pre>
          <p className="leading-8">
            This opens the video at 300 seconds. People often share links like
            this when pointing to a specific part of a video.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-xl font-semibold">
            Finding any npm package
          </h3>
          <p className="leading-8">
            npm works the same way. Once you know the URL pattern, you never
            really need to search the homepage.
          </p>
          <pre className="border-border bg-muted text-foreground overflow-x-auto rounded-xl border px-4 py-3 text-sm leading-7">
            <code>{`npmjs.com/package/{package-name}
npmjs.com/package/react
npmjs.com/package/tailwindcss`}</code>
          </pre>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-xl font-semibold">
            Vercel preview deploys
          </h3>
          <p className="leading-8">
            Vercel preview deployments are another good example.
          </p>

          <p className="leading-8">
            Every pull request gets its own predictable preview URL. You can
            open it directly, share it, or test it without navigating the
            dashboard.
          </p>

          <p className="leading-8">
            Production, staging, preview builds. Each environment has its own
            URL. The URL itself is already telling you where you are.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-xl font-semibold">
            Slugs: readable URLs for content pages
          </h3>
          <p className="leading-8">
            You are reading this blog at{" "}
            <HighlightPath path="/blog/url-as-a-skill" />. That last part is
            called a{" "}
            <strong className="text-foreground font-semibold">slug</strong>.
          </p>
          <p className="leading-8">
            A slug is basically a URL-friendly version of a title.
          </p>
          <pre className="border-border bg-muted text-foreground overflow-x-auto rounded-xl border px-4 py-3 text-sm leading-7">
            <code>{`"URL as a Skill"  →  url-as-a-skill
"My First Post"   →  my-first-post
"What is Next.js" →  what-is-next-js`}</code>
          </pre>
          <p className="leading-8">The rules are pretty simple:</p>
          <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
            <li>Lowercase everything.</li>
            <li>Replace spaces with hyphens.</li>
            <li>Remove special characters.</li>
          </ul>
          <p className="leading-8">
            Slugs make URLs readable and shareable. They also help with SEO
            because search engines understand the words in the path.
          </p>
          <pre className="border-border bg-muted text-foreground overflow-x-auto rounded-xl border px-4 py-3 text-sm leading-7">
            <code>{`/blog?id=f3a92c          ← tells you nothing
/blog/url-as-a-skill    ← tells you exactly what it is`}</code>
          </pre>
          <p className="leading-8">
            Most modern frameworks like Next.js use file-based routing, where
            the folder name literally becomes the slug.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Why this actually matters
        </h2>
        <ol className="marker:text-muted-foreground list-decimal space-y-2 pl-6 leading-8 marker:font-semibold">
          <li>It is faster than navigating through menus.</li>
          <li>
            You start noticing route patterns like
            <span className="mt-1 inline-flex flex-wrap gap-2 align-middle">
              <HighlightPath path="/users" />
              <HighlightPath path="/repos" />
              <HighlightPath path="/issues" />
              <HighlightPath path="/settings" />
            </span>
            .
          </li>
          <li>
            It also helps when building webapps because routing in React,
            Next.js, or Express follows the same idea.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          How to develop this habit
        </h2>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>Pay attention to the address bar when moving between pages.</li>
          <li>
            Notice path changes like
            <span className="mx-1 inline-flex flex-wrap items-center gap-2 align-middle">
              <HighlightPath path="/issues" />
              <span>to</span>
              <HighlightPath path="/pulls" />
            </span>
            .
          </li>
          <li>Try editing URLs manually and see what happens.</li>
          <li>
            Watch for common paths like
            <span className="mt-1 inline-flex flex-wrap gap-2 align-middle">
              <HighlightPath path="/profile" />
              <HighlightPath path="/dashboard" />
              <HighlightPath path="/settings" />
              <HighlightPath path="/docs" />
              <HighlightPath path="/api" />
              <HighlightPath path="/admin" />
            </span>
            .
          </li>
        </ul>
      </section>

      <p className="text-foreground text-center leading-8 italic underline underline-offset-2">
        The URL bar is the command line of the web.
      </p>
    </article>
  );
};

export default UrlAsASkill;
