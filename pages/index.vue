<template>
  <img
    src="https://www.viiper.fr/favicon.ico"
    class="border-4 border-primary rounded-full w-44 h-w-44 mb-4"
  />

  <Typing
    text="Hello, I'm ViipeR 👋"
    class="text-3xl lg:text-5xl font-bold mb-6 text-primary"
  />

  <div class="grid grid-cols-2 gap-2 md:flex">
    <Badge text="Web developer" icon="i-lucide-code" />
    <Badge text="Rust developer" icon="cib:rust" />
    <Badge text="Next.js developer" icon="ri:nextjs-fill" />
    <Badge text="Nuxt.js developer" icon="material-icon-theme:nuxt" />
  </div>

  <p class="text-lg max-w-2xl mx-auto mb-8">
    Passionate web developer focused on front-end, modern interfaces, and smooth
    user experiences. Welcome to my portfolio!
  </p>

  <div class="flex justify-center gap-4 flex-wrap">
    <UButton
      label="Look at my work"
      icon="i-lucide-folder"
      to="/projects"
      size="lg"
    />

    <UButton
      label="Contact me"
      icon="i-lucide-mail"
      color="primary"
      variant="outline"
      to="/contact"
      size="lg"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content:
        "Welcome to my portfolio! I'm ViipeR, a passionate web developer focused on front-end, modern interfaces, and smooth user experiences. Explore my work and get in touch!",
    },
    {
      name: "keywords",
      content:
        "web developer, front-end, modern interfaces, user experience, portfolio",
    },
    {
      name: "author",
      content: "ViipeR",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "twitter:title",
      content: "Home - ViipeR's Portfolio",
    },
    {
      name: "twitter:description",
      content:
        "Welcome to my portfolio! I'm ViipeR, a passionate web developer focused on front-end, modern interfaces, and smooth user experiences. Explore my work and get in touch!",
    },
    {
      name: "og:title",
      content: "Home - ViipeR's Portfolio",
    },
    {
      name: "og:description",
      content:
        "Welcome to my portfolio! I'm ViipeR, a passionate web developer focused on front-end, modern interfaces, and smooth user experiences. Explore my work and get in touch!",
    },
  ],
});
</script>
