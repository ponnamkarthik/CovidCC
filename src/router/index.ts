import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "App",
    component: () =>
      import(/* webpackChunkName: "base" */ "../layouts/Main.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/Home.vue"),
      },
      {
        path: "/search",
        name: "search",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/search/SearchResources.vue"
          ),
      },
      {
        path: "/users",
        name: "users",
        component: () =>
          import(
            /* webpackChunkName: "users" */ "../views/users/UsersList.vue"
          ),
      },
      {
        path: "/auth",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "auth" */ "../views/auth/Login.vue"),
        children: [
          {
            path: "",
            redirect: "/auth/login",
          },
          {
            path: "login",
            name: "Login",
            component: () =>
              import(
                /* webpackChunkName: "auth" */ "../views/auth/LoginComponent.vue"
              ),
          },
          {
            path: "register",
            name: "Register",
            component: () =>
              import(
                /* webpackChunkName: "auth" */ "../views/auth/RegisterComponent.vue"
              ),
          },
        ],
      },
      {
        path: "/forgot-password",
        name: "Forgot Password",
        component: () =>
          import(
            /* webpackChunkName: "auth" */ "../views/auth/ForgotPassword.vue"
          ),
      },
    ],
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
