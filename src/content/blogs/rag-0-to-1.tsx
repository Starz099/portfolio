import { HighlightPath } from "../common/HighlightPath";
import { DiagramBlock } from "../common/DiagramBlock";

const Rag0To1 = () => {
  return (
    <article className="text-muted-foreground space-y-10">
      <section className="space-y-5">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          The Problem: The Context Wall
        </h2>
        <p className="leading-8">
          If you have ever tried to learn AI API programming, you must have
          heard about the notorious problem of context. LLMs are incredibly
          smart, but they are essentially &quot;frozen&quot; in time based on
          their training data. They don&apos;t know your specific business data,
          your internal documents, or your latest user logs.
        </p>
        <p className="leading-8">
          When first encountering this wall, it is common to hear about
          fine-tuning the model as the ultimate fix. But let&apos;s be honest,
          fine-tuning comes with massive headaches:
        </p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>It is incredibly hard to manage.</li>
          <li>It is expensive to set up.</li>
          <li>It is a nightmare to sustain as your data keeps changing.</li>
        </ul>
        <p className="leading-8">
          So, how is this solved? The answer is a concept called RAG. Let&apos;s
          talk about what RAG is in the simplest way possible, and eventually
          take it to the next level.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Breaking Down RAG (Retrieval-Augmented Generation)
        </h2>
        <p className="leading-8">
          At their core, LLMs are just generating the most probable next word.
          They are essentially predicting similar text based on what they have
          seen. There is a saying in the AI world that the better and more
          specific the input (the prompt), the more accurate the results will
          be.
        </p>
        <p className="leading-8">
          In order to educate the LLM about specific interests and provide
          context, it is necessary to provide a highly specific prompt that
          includes the relevant information needed to find the best answer.
        </p>
        <p className="leading-8">
          At its most basic level, this is RAG. Business information is stored
          and then concatenated into the prompt, giving the LLM the exact
          context it needs to answer.
        </p>
        <DiagramBlock
          src="/images/blog/rag-0-to-1/1.png"
          alt="User prompt and document merging into a single prompt for LLM"
          caption="Basic RAG concept: Merging user prompt with relevant documents"
        />
        <p className="leading-8">
          But it is not that simple. Let&apos;s look at the problems in this
          approach, one by one, and see how to solve them.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Problem 1: The Giant Text File
        </h2>
        <p className="leading-8">
          Imagine storing all business info in a text doc and providing it to
          the AI inside the prompt. Passing a 2 GB text file to an LLM every
          time a question is asked simply won&apos;t work.
        </p>
        <p className="leading-8">
          LLMs have a strict limit on how much data they can process at one
          time. This isn&apos;t about how many parameters were used to train the
          model; it is about the &quot;short-term memory,&quot; which is called
          the <HighlightPath path="context window" />.
        </p>
        <p className="leading-8">
          Since it is impossible to give all the data to the LLM at once, there
          needs to be a way to manage data and only provide the specific part
          that is relevant at the exact moment of the query.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Solution 1: Let&apos;s Chunk It
        </h2>
        <p className="leading-8">
          Let&apos;s think from first principles. The size of the text data is
          way too large. What can be done to decrease it?
        </p>
        <p className="leading-8">
          One idea is to compress it by eliminating repeated words or
          summarizing. However, this introduces risks:
        </p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>It might change the core meaning of some sentences.</li>
          <li>It might introduce false truths to the LLM.</li>
          <li>It guarantees the LLM will not answer properly.</li>
        </ul>
        <p className="leading-8">
          So, let&apos;s try something else. Most of the time, a large block of
          text talks continuously about a specific subject. What if this massive
          log of data is broken into smaller planks? For example, a large text
          containing 1,000 words could be broken into 5 chunks of 200 words
          each.
        </p>
        <DiagramBlock
          src="/images/blog/rag-0-to-1/2.png"
          alt="Large text document being sliced into smaller equal-sized chunks"
          caption="Text chunking: Breaking large documents into manageable pieces"
        />
        <p className="leading-8">
          But now there is a new question. How is it possible to know which
          200-word chunk is the most relevant to the prompt at any given moment?
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Problem 2: Finding the Right Chunk
        </h2>
        <p className="leading-8">
          One way is to put something like topic tags or names on these planks.
          A map could be created that says, &quot;This topic is related to this
          specific piece of text.&quot; Then, when a prompt is provided, the
          system checks which topic matches best and attaches only that chunk to
          the prompt.
        </p>
        <p className="leading-8">
          This is a much better position to be in. The text size is reduced
          drastically and relevant context is attached. But it is still not the
          best approach. What if the chunk picked did not contain all the info
          on the topic? Context might be missed entirely.
        </p>
        <p className="leading-8">
          To solve this, the strategy can be improved:
        </p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>
            <strong>Increase the chunks:</strong> Retrieve the{" "}
            <HighlightPath path="top k" /> (top 3 or 5) relevant chunks instead
            of one.
          </li>
          <li>
            <strong>Add overlapping:</strong> Overlap chunks by a few words so
            context isn&apos;t lost in a hard slice.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Problem 3: Scalability
        </h2>
        <p className="leading-8">
          This is a better state than the last one, but let&apos;s look at
          scalability.
        </p>
        <p className="leading-8">
          Chunking all the text, manually assigning tags, storing them
          separately, and managing the overlaps will get messy. Plus, searching
          through manual tags every time a question is asked is not the most
          reliable way because tags might not even be assigned properly.
        </p>
        <p className="leading-8">So, how is this finally solved for real?</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          The Solution: Vectorization and Semantic Search
        </h2>
        <p className="leading-8">
          This is where the magic of vectorization,{" "}
          <HighlightPath path="embeddings" />, vector databases, and{" "}
          <HighlightPath path="semantic search" /> comes in. Let&apos;s break
          them down.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Vectorization and Embeddings
        </h3>
        <p className="leading-8">
          Imagine a massive, multi-dimensional space. Vectorization is the
          process of converting text chunks into numbers (coordinates) and
          placing them in this space. These numerical representations are called
          embeddings. The cool part is that the math places concepts with
          similar meanings closer to each other, keeping relationships intact.
          For example, the mathematical distance between &quot;India&quot; and
          &quot;Delhi&quot; will be very similar to the distance between
          &quot;China&quot; and &quot;Beijing&quot;. This gives the computer a
          way to actually understand relationships.
        </p>
        <DiagramBlock
          src="/images/blog/rag-0-to-1/3.png"
          alt="3D scatter plot showing text concepts as dots with similar meanings close together"
          caption="Vector embeddings: Similar concepts cluster together in semantic space"
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Vector Databases
        </h3>
        <p className="leading-8">
          Since standard databases are not built to handle massive lists of
          multi-dimensional coordinates,{" "}
          <HighlightPath path="Vector Databases" /> are used instead. They are
          specifically built to store these embeddings and search through them
          incredibly fast.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
          Semantic Search
        </h3>
        <p className="leading-8">
          Instead of searching for exact keyword matches or manual tags,
          semantic search looks at the meaning of the prompt. It converts the
          prompt into an embedding, drops it into that multi-dimensional space,
          and gathers the text chunks that are physically closest to it.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          The Standard RAG Cycle
        </h2>
        <p className="leading-8">
          What does a standard, basic RAG setup actually look like in practice?
          It is a simple cycle:
        </p>
        <ul className="marker:text-muted-foreground list-disc space-y-2 pl-6 leading-8">
          <li>
            <strong>Prep the data:</strong> Chunk data, convert to embeddings,
            and save in a Vector DB.
          </li>
          <li>
            <strong>The User Prompt:</strong> The system receives the
            user&apos;s question.
          </li>
          <li>
            <strong>Search:</strong> Embed the question to run a semantic search
            for top k text chunks.
          </li>
          <li>
            <strong>Augment:</strong> Gather the relevant chunks and stitch them
            into the prompt.
          </li>
          <li>
            <strong>Generate:</strong> Send the contextual prompt to the LLM for
            a highly accurate response.
          </li>
        </ul>
        <DiagramBlock
          src="/images/blog/rag-0-to-1/4.png"
          alt="Complete RAG workflow showing document processing through LLM output"
          caption="Complete RAG cycle"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Wrapping Up
        </h2>
        <p className="leading-8">
          This cycle is the most basic, foundational version of RAG. It works
          wonders for standard text.
        </p>
        <p className="leading-8">
          But what happens when it gets complex? Over time, it becomes clear
          that some data is not easily chunkable. Take legal documents for
          example. They are full of external references, cross-sections, and
          complex clauses that break if they are just chopped up into 200-word
          blocks.
        </p>
        <p className="leading-8">
          How is that tackled? Well, that requires some advanced RAG techniques,
          but I might discuss those in a future blog.
        </p>
      </section>
    </article>
  );
};

export default Rag0To1;
