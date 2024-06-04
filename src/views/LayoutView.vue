<script setup lang="ts">
import { NavBar } from "@/components";
</script>

<template>
    <main>
        <q-layout view="hHh lpR fFf">
            <nav-bar />

            <q-page-container>
                <q-page padding>
                    <router-view />
                </q-page>
            </q-page-container>
        </q-layout>
    </main>
</template>

<style scoped>
.title::after {
    content: "•";

    color: red;

    margin-left: 10px;

    margin-top: 10px;
}

.underline--magical {
    background-image: linear-gradient(120deg, red 0%, red 100%);

    background-repeat: no-repeat;

    background-size: 100% 0.2em;

    background-position: 0 88%;

    padding: 2px;

    transition: background-size 0.25s ease-in;

    &:hover {
        background-size: 100% 100%;
    }
}

.body--light {
    .welcome {
        &:before {
            border-top: 0.1rem solid $dark-page;
        }
    }
}

.body--dark {
    .welcome {
        &:before {
            border-top: 0.1rem solid white;
        }
    }
}

@media (min-width: 1024px) {
    body {
        .q-page {
            padding: 0 2rem;
        }
    }
}

.ml1 {
    font-weight: 900;

    font-size: 3.5em;
}

.ml1 .letter {
    display: inline-block;

    line-height: 1em;
}

.ml1 .text-wrapper {
    position: relative;

    display: inline-block;

    padding-top: 0.1em;

    padding-right: 0.05em;

    padding-bottom: 0.15em;
}

.ml1 .line {
    opacity: 0;

    position: absolute;

    left: 0;

    height: 3px;

    width: 100%;

    background-color: #fff;

    transform-origin: 0 0;
}

.ml1 .line1 {
    top: 0;
}

.ml1 .line2 {
    bottom: 0;
}
</style>
