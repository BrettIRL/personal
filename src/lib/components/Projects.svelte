<script>
  import { projects } from "$lib/data";
</script>

<section
  id="projects"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
  aria-label="My Projects"
>
  <ul class="group/list">
    {#each projects as project}
      <li class="mb-12">
        <div
          class="group relative grid grid-cols-8 transition-all gap-4 hover:!opacity-100 group-hover/list:opacity-50"
        >
          <div
            class="absolute -inset-x-4 -inset-y-4 z-10 rounded-md group-hover:bg-slate-50/[0.075] group-hover:dark:bg-slate-800/50 group-hover:border group-hover:border-slate-200/20 group-hover:dark:border-none group-hover:shadow-md group-hover:dark:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg"
          />
          <div class="order-2 col-span-6 z-10">
            <a
              href={project.link}
              class="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 group-hover:dark:text-sky-300 text-base"
              target="_blank"
            >
              <h3>{project.name}</h3>
            </a>
            <p class="mt-2 text-sm leading-normal">{project.description}</p>
            <ul class="mt-2 flex flex-wrap">
              {#each project.technologies as technology}
                <li class="mr-1 5 mt-2">
                  <div
                    class="flex-items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-500 dark:text-sky-300"
                  >
                    {technology}
                  </div>
                </li>
              {/each}
            </ul>
          </div>
          <img
            alt={project.name}
            class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 order-1 col-span-2 translate-y-1 z-10"
            src={project.image}
          />
        </div>
      </li>
    {/each}
  </ul>
  <div class="mt-12">
    <a
      href="/projects"
      class="inline-flex items-center font-medium leading-tight text-slate-900 dark:text-slate-200 group"
    >
      <span
        class="border-b border-b-transparent pb-px transition group-hover:border-sky-300"
        >All Projects
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-4 h-4 inline-block ml-1 stroke-[1.5] stroke-slate-900 dark:stroke-slate-200 -translate-y-px transition-transform group-hover:translate-x-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </a>
  </div>
</section>
