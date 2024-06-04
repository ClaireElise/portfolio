<script lang="ts" setup>
import { useAppStore } from "@/stores";

const appStore = useAppStore();
</script>

<template>
    <div class="flex row items-center">
        <div class="flex column col-1">
            <div class="flex column q-gutter-y-md justify-end">
                <q-icon name="mdi-github" size="sm" />

                <q-icon name="mdi-linkedin" size="sm" />

                <q-icon name="mdi-web" size="sm" />
            </div>
        </div>

        <div class="flex column justify-center q-gutter-y-md col-6">
            <div class="text-overline text-uppercase">Bonjour, <span class="text-green">{Claire-Elise Hochet}</span></div>

            <h3 class="text-weight-bold">
                <span class="text-weight-bold">Développeuse Web</span>
                <div class="flex row q-gutter-x-md q-pt-md"></div>
            </h3>

            <div class="flex row q-mt-none">
                <q-btn icon="img:src\assets\logo.svg" size="sm" unelevated>
                    <q-tooltip :offset="[10, 10]" anchor="top middle" self="bottom middle">vue.js </q-tooltip>
                </q-btn>

                <q-btn icon="img:public\img\icons\vscode.svg" size="sm" unelevated>
                    <q-tooltip :offset="[10, 10]" anchor="top middle" self="bottom middle">vscode </q-tooltip>
                </q-btn>

                <q-btn :text-color="appStore.isDark ? 'white' : 'dark'" label=".Net" size="sm" unelevated>
                    <q-tooltip :offset="[10, 10]" anchor="top middle" self="bottom middle">.Net </q-tooltip></q-btn
                >

                <q-btn icon="img:public\img\icons\azure.svg" size="sm" unelevated> <q-tooltip :offset="[10, 10]" anchor="top middle" self="bottom middle">Azure </q-tooltip></q-btn>
            </div>
        </div>

        <div class="col-4">
            <q-img src="public\img\3d-casual-life-text-program-on-computer-screen.png" width="350px" />
        </div>
    </div>

    <div class="q-pa-md row items-start q-gutter-md q-mt-lg q-mb-md">
        <q-card class="my-card col" bordered flat>
            <q-card-section class="flex justify-between">
                <div>
                    <span class="text-subtitle1 text-weight-bold q-pr-sm" style="font-size: 30px">+ 3 ans</span>
                    <span class="text-overline"> d'expériences </span>
                </div>

                <div>
                    <q-btn color="teal-2" icon="mdi-briefcase" size="md" bordered flat round />
                </div>
            </q-card-section>
        </q-card>

        <q-card class="my-card col" bordered flat>
            <q-card-section class="flex justify-between">
                <div>
                    <span class="text-subtitle1 text-weight-bold q-pr-sm" style="font-size: 30px">Angers</span>
                    <span class="text-overline">et ses alentours</span>
                </div>

                <div>
                    <q-btn color="amber-3" icon="mdi-map-marker-multiple" size="md" bordered flat round />
                </div>
            </q-card-section>
        </q-card>

        <q-card class="my-card col" bordered flat>
            <q-card-section class="flex justify-between">
                <div>
                    <span class="text-subtitle1 text-weight-bold q-pr-sm" style="font-size: 30px">Microsoft</span>
                    <span class="text-overline">certification</span>
                </div>

                <div>
                    <q-btn color="purple-2" icon="mdi-certificate" size="md" bordered flat round />
                </div>
            </q-card-section>
        </q-card>
    </div>

    <div class="flex justify-center">
        <q-icon name="mdi-arrow-down" size="sm" />
    </div>
</template>
<style lang="scss" scoped></style>
