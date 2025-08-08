<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import About from "$lib/components/About.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import { onMount } from "svelte";

  let pageLoadTime = 0;

  onMount(() => {
    const observer = new PerformanceObserver(
      (entries: PerformanceObserverEntryList) => {
        const navEntries = entries.getEntriesByType("navigation");
        if (navEntries.length > 0) {
          const entry = navEntries[0] as PerformanceNavigationTiming;
          pageLoadTime = entry.loadEventEnd - entry.startTime;
        }
      }
    );

    observer.observe({ type: "navigation", buffered: true });
  });
</script>

<div
  class="fixed hidden lg:block w-calc-xl min-h-screen border-r border-slate-200/5 bg-slate-900 bg-grid-gradient before:bg-grid-texture before:absolute before:w-full before:h-full before:mask-[linear-gradient(90deg,transparent,65%,black)]"
/>
<div
  class="mx-auto min-h-screen max-w-(--breakpoint-xl) px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
>
  <div class="lg:flex lg:justify-between">
    <Header />
    <main id="content" class="pt-24 lg:w-1/2 lg:py-24 basis-1/2">
      <About />
      <Experience />
      <Projects />
      <footer class="text-slate-400 max-w-md pb-16 text-sm sm:pb-0">
        {#if pageLoadTime > 0}
          <p>
            This site loaded in a blazingly fast {pageLoadTime / 1000}s.
            &#128293;
          </p>
        {/if}
        <p>
          Built with
          <a
            href="https://kit.svelte.dev"
            class="font-medium text-slate-800 dark:text-slate-300 hover:text-sky-400 focus-visible:text-slate-900 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
            target="_blank">SvelteKit</a
          >
          and
          <a
            href="https://tailwindcss.com"
            class="font-medium text-slate-800 dark:text-slate-300 hover:text-sky-400 focus-visible:text-slate-900 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
            target="_blank">TailwindCSS</a
          >, deployed with
          <a
            href="https://vercel.com"
            class="font-medium text-slate-800 dark:text-slate-300 hover:text-sky-400 focus-visible:text-slate-900 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
            target="_blank"
          >
            Vercel</a
          >. Coded in
          <a
            href="https://neovim.io"
            class="font-medium text-slate-800 dark:text-slate-300 hover:text-sky-400 focus-visible:text-slate-900 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
            target="_blank">Neovim</a
          >, btw.
        </p>
      </footer>
    </main>
  </div>
</div>

<style>
  .w-calc-xl {
    width: calc(((100% - 1280px) / 2) + 6rem + ((1280px - 12rem) * 0.4));
  }
</style>
