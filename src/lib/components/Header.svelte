<script lang="ts">
  import { navMenu } from "$lib/data";

  function scrollIntoView(e: MouseEvent) {
    const target = e.currentTarget as HTMLAnchorElement;
    const selector = target.getAttribute("href");
    if (!selector) return;
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }

  function toggleDarkMode() {
    const rootClasses = document.documentElement.classList;
    if (rootClasses.contains("dark")) {
      localStorage.theme = "light";
      rootClasses.remove("dark");
    } else {
      localStorage.theme = "dark";
      rootClasses.add("dark");
    }
  }
</script>

<header
  class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 basis-[40%]"
>
  <div class="z-10">
    <h1
      class="text-4xl font-bold tracking-tight text-slate-900 lg:text-slate-100 dark:text-slate-100 sm:text-5xl"
    >
      Brett Cocking
    </h1>
    <h2
      class="mt-3 text-lg font-medium tracking-tight text-slate-900 lg:text-slate-100 dark:text-slate-100 sm:text-xl"
    >
      Full Stack Engineer
    </h2>
    <p class="lg:text-slate-400 mt-4 max-w-xs leading-normal">
      I build sleek, robust, intuitive products and digital experiences.
    </p>
    <nav class="hidden lg:block">
      <ul class="mt-16 w-max">
        {#each navMenu as menuItem}
          <li>
            <a
              href={menuItem.link}
              class="group flex items-center py-3"
              on:click|preventDefault={scrollIntoView}
            >
              <span
                class="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                >{menuItem.title}</span
              ></a
            >
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <ul class="mt-8 flex items-center z-10">
    <li class="mr-2">
      <a
        href="https://github.com/BrettIRL"
        class="w-8 h-8 flex items-center justify-center rounded-md transition text-slate-400 lg:hover:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5"
      >
        <span class="sr-only">Github</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-6 w-6"
          ><path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          /></svg
        >
      </a>
    </li>
    <li class="mr-2">
      <a
        href="http://linkedin.com/in/brett-c"
        class="w-8 h-8 flex items-center justify-center rounded-md transition text-slate-400 lg:hover:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5"
      >
        <span class="sr-only">LinkedIn</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6"
          ><path
            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          /></svg
        ></a
      >
    </li>
    <li class="ml-auto lg:mr-8">
      <button
        class="h-8 w-8 flex items-center justify-center rounded-md transition text-slate-400 lg:hover:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5"
        on:click={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-7 h-7 stroke-[1.5] hidden dark:block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-7 h-7 stroke-[1.5] dark:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </li>
  </ul>
</header>
