<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import About from "$lib/components/About.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<div
  class="fixed w-calc-xl min-h-screen border-r border-slate-200/5 bg-slate-900 bg-grid-gradient before:bg-grid-texture before:absolute before:w-full before:h-full before:[mask-image:linear-gradient(90deg,transparent,65%,black)]"
>
</div>
<div
  class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
>
  <div class="lg:flex lg:justify-between">
    <Header />
    <main
      id="content"
      class="text-gray-600 dark:text-slate-400 pt-24 lg:w-1/2 lg:py-24 basis-1/2"
    >
      <About />
      <Experience />
      <Projects />
    </main>
  </div>
</div>

<style>
  .w-calc-xl {
    width: calc(((100% - 1280px) / 2) + 6rem + ((1280px - 12rem) * 0.4));
  }
</style>
