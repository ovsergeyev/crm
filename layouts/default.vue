<script type="ts" setup>
import { account } from '~/lib/appwrite';
import { useAuthStore } from '~/store/auth.store';
import { useIsLoadingStore } from '~/store/loader.store';

const isLoadingStore = useIsLoadingStore();
const store = useAuthStore();
const router = useRouter();

onMounted(async()=>{
  try {
    const user = await account.get()
    if(user) store.set({user})
  } catch(error) {
    router.push('/login')
  } finally {
    isLoadingStore.set(false)
  }
})

console.log('Loaded')
</script>

<template>
  <LayoutLoader v-if="isLoadingStore.isLoad" />
  <section v-else :class="{grid: store.isAuth}" style="min-height: 100vh;">
    <LayoutSidebar v-if="store.isAuth" />
    <div>
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
</style>