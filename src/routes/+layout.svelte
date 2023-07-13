<script>
  import "../tailwind.css";
  import { onMount } from "svelte";

  onMount(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
</script>

<svelte:head>
  <title>Brett Cocking - Full Stack Engineer</title>
  <meta
    name="description"
    content="Brett Cocking is a software engineer who builds sleek, robust, intuitive products and digital experiences."
  />
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<slot />
