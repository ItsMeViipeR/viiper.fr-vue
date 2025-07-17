<template>
  <Typings
    :texts="['My Principal Projects', 'My Open Source Projects', 'All My Work']"
    class="text-2xl lg:text-5xl font-bold mb-6 text-primary"
  />
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    <Card
      title="Gitwarp"
      description="Gitwarp is a tool that helps you to manage git repositories by simplifying all the commands."
      image-url="https://www.viiper.fr/_next/image?url=https%3A%2F%2Fpreview.redd.it%2Fg38817mqb1361.png%3Fauto%3Dwebp%26s%3D61f191d6a42b645d77cbbc6ce5d6f08686b6e77a&w=828&q=75"
      project-url="https://github.com/ItsMeViipeR/gitwarp"
    />
    <Card
      title="files.dll"
      description="A simple DLL writen in Rust to manipulate files."
      image-url="https://www.viiper.fr/_next/image?url=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F09%2F02%2F93%2F31%2F240_F_902933189_v6yVCYq5Z4qyNHPEYm0Jb7tLg6NH7rBv.jpg&w=828&q=75"
      project-url="https://github.com/ItsMeViipeR/files.dll"
    />
    <Card
      title="ezjson"
      description="A simple JSON editor built with Rust."
      image-url="https://www.viiper.fr/_next/image?url=https%3A%2F%2Fimgs.search.brave.com%2FtkZmPdVcFlKhpIDX2NSS3ioslQFeP-XnUgZPnYjDIWc%2Frs%3Afit%3A860%3A0%3A0%3A0%2Fg%3Ace%2FaHR0cHM6Ly90My5m%2FdGNkbi5uZXQvanBn%2FLzA4Lzk2LzM4LzMw%2FLzM2MF9GXzg5NjM4%2FMzAwNV9LVm5YeU1W%2FQm01UDBmTkV0TnFH%2FVlNBN0dWQUw1RWFl%2FYS5qcGc&w=828&q=75"
      project-url="https://github.com/ItsMeViipeR/ezjson"
    />
    <Card
      title="HeavensBot"
      description="A Discord bot that provides a variety of features, including moderation, informations, and more."
      project-url="https://github.com/ItsMeViipeR/HeavensBot"
    />
    <Card
      title="ezjson"
      description="A simple JSON editor built with Rust."
      project-url="https://github.com/ItsMeViipeR/ezjson"
    />
    <Card
      title="WIB"
      description="Which Is Bigger is a simple program that allows you to get which files are bigger in a specific directory."
      project-url="https://github.com/ItsMeViipeR/wib"
    />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Projects",
});
</script>
