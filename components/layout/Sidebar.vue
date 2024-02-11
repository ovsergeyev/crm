<script lang="ts" setup>
  import { account } from '~/lib/appwrite';
  import { useAuthStore  } from '~/store/auth.store';
  import { useIsLoadingStore } from '~/store/loader.store';

  const store = useAuthStore()
  const isLoadingStore = useIsLoadingStore()
  const router = useRouter()
  const logout = async() => {
    isLoadingStore.set(true)
    await account.deleteSession('current')
    store.clear()
    await router.push('/login')
    isLoadingStore.set(false)
  }
</script>

<!-- TODO: Appwrite config + Auth -->

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="140px" class="mx-auto" />
    </NuxtLink>

    <button @click = logout() class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20"/>
    </button>

    <LayoutMenu />
  </aside>
</template>