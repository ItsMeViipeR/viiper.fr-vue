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
</script>

<template>
  <UContainer
    class="py-16 items-center justify-center flex flex-col gap-4 max-w-xl"
  >
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
    </UForm></UContainer
  >
</template>
