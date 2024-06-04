<script lang="ts" setup>
import { useAppStore } from "@/stores";
import { useQuasar } from "quasar";

const $q = useQuasar();

const appStore = useAppStore();

const switchMode = (): void => {
    $q.dark.toggle();
    console.log($q.dark);
};
</script>
<template>
    <q-header id="app" :class="appStore.isDark ? 'bg-dark text-white' : 'bg-white text-dark'">
        <q-toolbar>
            <div class="row fit justify-between">
                <h5 class="text-weight-bold">< Portfolio /></h5>

                <div>
                    <!--  <q-btn

        :icon="isDark ? 'light_mode' : 'dark_mode'"

        :color="isDark ? 'dark' : 'white'"  

        :text-color="isDark ? 'white' : 'dark'"

        @click="switchMode"

        round

        flat

      ></q-btn>-->

                    Light <q-toggle v-model="appStore.isDark" label="Dark" @toggle="switchMode" />
                </div>
            </div>
        </q-toolbar>
    </q-header>
</template>
