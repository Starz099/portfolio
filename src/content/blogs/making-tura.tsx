import Image from "next/image";

const HighlightPath = ({ path }: { path: string }) => {
  return (
    <strong className="text-foreground inline max-w-full align-baseline leading-none font-medium">
      <span className="bg-muted text-foreground inline-block max-w-full rounded px-1.5 py-0 align-baseline text-xs leading-6 break-all sm:text-sm">
        {path}
      </span>
    </strong>
  );
};

type DiagramBlockProps = {
  src: string;
  alt: string;
  caption: string;
};

const DiagramBlock = ({ src, alt, caption }: DiagramBlockProps) => {
  return (
    <figure className="border-border bg-muted/40 space-y-3 overflow-hidden rounded-2xl border p-3 sm:p-4">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="border-border bg-background h-auto w-full rounded-xl border object-cover"
      />
      <figcaption className="text-muted-foreground text-sm leading-6 sm:text-base">
        {caption}
      </figcaption>
    </figure>
  );
};

const MakingTura = () => {
  return (
    <article className="text-muted-foreground space-y-10">
      <section className="space-y-5">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Why I built Tura
        </h2>
        <p className="leading-8">
          I have always been a fan of croc. It is a great tool that just works
          when you need to send files between computers. Using it so much got me
          thinking about how it actually handles those transfers under the hood.
          I decided I wanted to build my own version, a peer-to-peer CLI file
          transfer tool I named Tura.
        </p>
        <p className="leading-8">
          This is how it went, what I tried first, what completely failed, and
          how the architecture slowly changed.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          The First Try: Direct Connections
        </h2>
        <p className="leading-8">
          The first idea was simple. Just do peer-to-peer.
        </p>
        <p className="leading-8">
          My computer should directly connect to your computer. No server in
          between. That feels like the &quot;correct&quot; way to do it.
        </p>
        <p className="leading-8">
          The problem is routers. Our computers only know their local IP
          address, not the public one because of NAT (Network Address
          Translation). To find these, I used STUN. Both clients would hit a
          STUN server and get their public IP and the port their router exposed.
        </p>
        <p className="leading-8">
          Now both sides had this info, but they still needed to exchange it.
          For that, I used MQTT since it is lightweight and easy for this kind
          of signaling.
        </p>
        <p className="leading-8">So the flow became:</p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>both clients get public IP + port via STUN</li>
          <li>they publish it on an MQTT topic</li>
          <li>the other side reads it</li>
        </ul>
        <p className="leading-8">
          Once both sides had each other&apos;s info, they would try UDP hole
          punching.
        </p>
        <DiagramBlock
          src="/images/blog/1.png"
          alt="STUN and MQTT signaling with UDP hole punching"
          caption="STUN + MQTT + UDP hole punching flow"
        />
        <p className="leading-8">On paper, this looked really nice.</p>
        <p className="leading-8">In reality, it broke instantly.</p>
        <p className="leading-8">
          Different networks behave very differently. Some routers use Symmetric
          NAT, where the port changes for every connection. So the port you
          shared becomes useless almost immediately.
        </p>
        <p className="leading-8">
          On top of that, strict firewalls just drop unknown UDP packets
          entirely.
        </p>
        <p className="leading-8">
          So sometimes it worked, sometimes it did not. Mostly it did not.
        </p>
        <p className="leading-8">
          At that point it was clear: this approach is unreliable in real-world
          conditions. I had to drop it.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          The Pivot: Using a TCP Relay
        </h2>
        <p className="leading-8">
          Since direct connections were not reliable, I needed a fallback that
          always works.
        </p>
        <p className="leading-8">
          That is when I looked back at croc and realized they use a relay
          server when needed.
        </p>
        <p className="leading-8">So I switched to that approach.</p>
        <p className="leading-8">
          Instead of trying to connect to each other, both clients connect to a
          central TCP relay server.
        </p>
        <p className="leading-8">
          Outbound connections are almost always allowed by routers, so this
          works consistently.
        </p>
        <p className="leading-8">
          Once both clients are connected, the relay does not do anything fancy.
          It just forwards data from sender to receiver.
        </p>
        <DiagramBlock
          src="/images/blog/2.png"
          alt="TCP relay architecture where two clients connect through a relay"
          caption="TCP relay architecture (Client -> Relay -> Client)"
        />
        <p className="leading-8">
          Finally, I was able to send a file successfully from one machine to
          another without random failures.
        </p>
        <p className="leading-8">That was a big milestone.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          The Speed Issue: Chunking the Data
        </h2>
        <p className="leading-8">
          Now that the connection was stable, the next problem was actually
          transferring files efficiently.
        </p>
        <p className="leading-8">
          You cannot just dump a large file into a socket in one go. It needs to
          be broken into smaller pieces.
        </p>
        <p className="leading-8">
          I chose <HighlightPath path="64KB" /> chunks (buckets).
        </p>
        <p className="leading-8">The flow was:</p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>read 64KB from disk</li>
          <li>send it over the network</li>
          <li>wait for it to finish</li>
          <li>repeat</li>
        </ul>
        <p className="leading-8">On the receiving side:</p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>read incoming chunks</li>
          <li>write them to disk</li>
        </ul>
        <DiagramBlock
          src="/images/blog/3.png"
          alt="Sequential read send wait chunk flow"
          caption="Sequential chunk flow (Read -> Send -> Wait)"
        />
        <p className="leading-8">This worked fine in terms of correctness.</p>
        <p className="leading-8">But performance was bad.</p>
        <p className="leading-8">
          I was getting around 500KB/s to 1MB/s, which is way too slow.
        </p>
        <p className="leading-8">
          The issue was the flow itself. Everything was sequential.
        </p>
        <p className="leading-8">
          While reading from disk, the network was idle.
        </p>
        <p className="leading-8">While sending data, disk was idle.</p>
        <p className="leading-8">
          So even though both components were fast individually, they were not
          being used efficiently together.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Fixing the Bottleneck: Multithreading
        </h2>
        <p className="leading-8">To fix this, I needed concurrency.</p>
        <p className="leading-8">
          Instead of a single stream handling the entire file, I split the work
          across multiple threads.
        </p>
        <p className="leading-8">
          I divided the file into parts and started 4 parallel streams. Each
          thread handled its own chunk of the file independently: reading,
          sending, everything.
        </p>
        <DiagramBlock
          src="/images/blog/4.png"
          alt="Parallel chunk transfer with multiple worker threads"
          caption="Parallel chunk transfer with multiple threads"
        />
        <p className="leading-8">Now things started to improve.</p>
        <p className="leading-8">
          Disk and network were both being used continuously instead of waiting
          on each other.
        </p>
        <p className="leading-8">The difference was huge.</p>
        <p className="leading-8">
          When I ran the relay server locally on my own machine, the transfer
          speed went up to around 1GB/s.
        </p>
        <p className="leading-8">
          To test it in a more realistic setup, I exposed the server using a
          tunneling tool and asked a friend to try it.
        </p>
        <p className="leading-8">We got around 4 to 5MB/s consistently.</p>
        <p className="leading-8">
          That drop was not because of my system. It was the limitation of the
          free tunneling service.
        </p>
        <p className="leading-8">
          So at this point, performance-wise, things were in a good place.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Securing the Transfer
        </h2>
        <p className="leading-8">Now came the security part.</p>
        <p className="leading-8">
          Since all data was going through the relay server, it could
          technically read everything being transferred. That did not feel
          right.
        </p>
        <p className="leading-8">So I added end-to-end encryption.</p>
        <p className="leading-8">
          I used the <HighlightPath path="chacha20poly1305" /> crate, which is a
          well-known and reliable encryption method.
        </p>
        <p className="leading-8">This changed the pipeline a bit.</p>
        <p className="leading-8">Before sending each chunk:</p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>data gets encrypted using a shared key</li>
        </ul>
        <DiagramBlock
          src="/images/blog/5.png"
          alt="End-to-end encryption flow through a relay"
          caption="Encryption flow (Encrypt -> Relay -> Decrypt)"
        />
        <p className="leading-8">
          The relay server just forwards encrypted data, which looks like random
          bytes.
        </p>
        <p className="leading-8">On the receiving side:</p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>data is decrypted before writing to disk</li>
        </ul>
        <p className="leading-8">
          So even though the relay is in the middle, it has no idea what is
          being transferred.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          The Cost of Encryption
        </h2>
        <p className="leading-8">
          Encryption solved the privacy issue, but it came with a cost.
        </p>
        <p className="leading-8">
          Every chunk now had to go through encryption before sending and
          decryption after receiving.
        </p>
        <p className="leading-8">When I tested locally again:</p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>speed dropped from ~1GB/s to ~500 to 600MB/s</li>
        </ul>
        <p className="leading-8">The CPU was the bottleneck this time.</p>
        <p className="leading-8">
          I tried optimizing by increasing chunk size so fewer encryption calls
          would happen.
        </p>
        <p className="leading-8">But that created new problems:</p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>memory usage increased a lot</li>
          <li>network handling became messy</li>
        </ul>
        <p className="leading-8">So I went back to 64KB chunks.</p>
        <p className="leading-8">
          At that point, it felt like the right balance.
        </p>
        <p className="leading-8">
          Even with the drop, 500MB/s is still very fast, and the added security
          is worth it.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Conclusion
        </h2>
        <p className="leading-8">
          Building Tura helped me understand a lot of things.
        </p>
        <p className="leading-8">
          Direct peer-to-peer sounds ideal, but real-world networks make it
          unreliable. That is why relay-based systems are so common.
        </p>
        <p className="leading-8">
          I also saw how much difference concurrency makes, and how encryption
          introduces real tradeoffs with performance.
        </p>
        <p className="leading-8">
          A lot of this was trial and error. Things broke multiple times before
          working properly.
        </p>
        <p className="leading-8">
          But that is honestly the best part of building something like this.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Github
        </h2>
        <a
          href="https://github.com/starz099/tura"
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline decoration-1 underline-offset-4 transition-opacity hover:opacity-80"
        >
          https://github.com/starz099/tura
        </a>
      </section>
    </article>
  );
};

export default MakingTura;
