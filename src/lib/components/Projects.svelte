<script>
  import SectionHeader from "./SectionHeader.svelte";
  import { projects } from "$lib/data";
</script>

<section
  id="projects"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
  aria-label="My Projects"
>
  <SectionHeader title="Projects" />
  <ul class="group/list">
    {#each projects as project}
      <li class="mb-12">
        <div
          class="group relative grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        >
          <div
            class="absolute -inset-x-4 -inset-y-4 z-10 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-50/[0.075] lg:group-hover:dark:bg-slate-800/50 lg:group-hover:border lg:group-hover:border-slate-200/20 lg:group-hover:dark:border-none lg:group-hover:shadow-md lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
          />
          <div class="sm:order-2 sm:col-span-6 z-10">
            <a
              href={project.link}
              class="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 group-hover:dark:text-sky-300 text-base"
              target="_blank"
            >
              <h3>
                {project.name}
                {#if project.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    class="w-3 h-3 inline-block stroke-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 translate-y-px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                {/if}
              </h3>
            </a>
            <p class="mt-2 text-sm leading-normal">{project.description}</p>
            {#if project.note}
              <p class="mt-2 text-xs leading-normal flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block stroke-2 mr-1 stroke-sky-400 dark:stroke-sky-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                {project.note}
              </p>
            {/if}
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
            width="200"
            height="48"
            class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 translate-y-1 z-10"
            src={project.image}
          />
        </div>
      </li>
    {/each}
  </ul>
</section>
