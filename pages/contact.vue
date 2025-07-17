<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Must be at least 1 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  message: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const res = $fetch("/api/contact", {
    method: "POST",
    body: event.data,
  });
  const result = (await res) as { success: boolean; error?: string };
  if (result.success) {
    toast.add({
      title: "Success",
      description: "Your message has been sent successfully!",
      color: "success",
    });

    state.email = "";
    state.message = "";
  } else {
    toast.add({
      title: "Error",
      description: `There was an error sending your message. Error: ${result.error}`,
      color: "error",
    });
  }
}

useHead({
  title: "Contact Me",
  meta: [
    {
      name: "description",
      content:
        "Contact me through this form. I will get back to you as soon as possible.",
    },
    {
      name: "keywords",
      content: "contact, email, message, form",
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
      content: "Contact Me",
    },
    {
      name: "twitter:description",
      content:
        "Contact me through this form. I will get back to you as soon as possible.",
    },
    {
      name: "og:title",
      content: "Contact Me",
    },
    {
      name: "og:description",
      content:
        "Contact me through this form. I will get back to you as soon as possible.",
    },
  ],
});
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 min-w-full"
    @submit="onSubmit"
  >
    <UFormField label="Email" name="email">
      <UInput
        v-model="state.email"
        placeholder="Type your email here"
        class="min-w-full"
      />
    </UFormField>

    <UFormField label="Message" name="message">
      <UTextarea
        v-model="state.message"
        type="text"
        :rows="10"
        autoresize
        color="success"
        placeholder="Type your message here..."
        class="min-w-full"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
