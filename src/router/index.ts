import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: (): any => import("@/views/LayoutView.vue"),
            children: [
                {
                    path: "/",
                    component: (): any => import("@/views/HomeView.vue"),
                },
            ],
        },
    ],
});

export default router;
