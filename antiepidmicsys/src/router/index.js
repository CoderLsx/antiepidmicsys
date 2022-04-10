import { createRouter, createWebHistory, onBeforeRouteLeave } from "vue-router";

// 用户界面路由
const LoginPage = () => import("../views/user-page/login-page.vue");
const RegisterPage = () => import("../views/user-page/register-page.vue");
const IndexPage = () => import("../views/user-page/index-page.vue");
const Way = () => import("../views/user-page/way.vue");
const Carousel = () => import("../views/user-page/Carousel.vue");
const Information = () => import("../views/user-page/information.vue");
const Report = () => import("../views/user-page/report.vue");
const Prevention = () => import("../views/user-page/prevention.vue");
const Community = () => import("../views/user-page/community.vue");
const Personal = () => import("../views/user-page/personal.vue");
const Detailed = () => import("../views/user-page/detailed.vue");

// 管理员页面路由
const AdminPage = () => import("../views/admin-page/admin-page.vue");
const AdminIndex = () => import("../views/admin-page/admin-index.vue");
const AdminResetPassword = () =>
  import("../views/admin-page/admin-resetpassword.vue");
const AdminCommunity = () => import("../views/admin-page/admin-community.vue");
const AdminVirulsManage = () =>
  import("../views/admin-page/admin-virulsmanage.vue");
const AdminVirulsSet = () => import("../views/admin-page/admin-virulsset.vue");
const AdminVirulsReport = () =>
  import("../views/admin-page/admin-virulsreport.vue");
const AdminWayManage = () => import("../views/admin-page/admin-waymanage.vue");
const AdminWaySet = () => import("../views/admin-page/admin-wayset.vue");
const AdminPrevention = () =>
  import("../views/admin-page/admin-prevention.vue");
const AdminPreventionSet = () =>
  import("../views/admin-page/admin-preventionset.vue");
const PreventionContent = () =>
  import("../views/user-page/prevention-content.vue");

const routes = [
  // 用户
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "用户登录",
    },
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "用户注册",
    },
    component: RegisterPage,
  },
  {
    path: "/personal/:username",
    name: "personal",
    meta: {
      title: "个人中心",
    },
    component: Personal,
  },
  {
    path: "/index",
    name: "index",
    meta: {
      title: "疫情防控宣传交流平台",
    },
    component: IndexPage,
    children: [
      {
        path: "",
        redirect: "/index/Carousel",
      },
      {
        path: "way",
        name: "way",
        component: Way,
      },
      {
        path: "Carousel",
        name: "Carousel",
        component: Carousel,
      },
      {
        path: "information",
        name: "information",
        component: Information,
      },
      {
        path: "report",
        name: "report",
        component: Report,
      },
      {
        path: "prevention",
        name: "prevention",
        component: Prevention,
      },
      {
        path: "preventionContent/:id",
        name: "preventionContent",
        component: PreventionContent,
      },
      {
        path: "community",
        name: "community",
        component: Community,
      },
      {
        path: "detailed/:id",
        name: "detailed",
        component: Detailed,
      },
    ],
  },

  // 管理员
  {
    path: "/admin",
    name: "admin",
    meta: {
      title: "管理员登录",
    },
    component: AdminPage,
  },
  {
    path: "/adminResetPassword",
    name: "adminResetPassword",
    meta: {
      title: "管理员密码修改",
    },
    component: AdminResetPassword,
  },
  {
    path: "/adminIndex",
    name: "adminIndex",
    meta: {
      title: "管理员平台",
    },
    component: AdminIndex,
    children: [
      {
        path: "/adminIndex",
        redirect: "/adminIndex/adminWayManage",
      },
      {
        path: "adminCommunity",
        name: "adminCommunity",
        meta: {
          title: "评论管理",
        },
        component: AdminCommunity,
      },
      {
        path: "adminVirulsManage",
        name: "adminVirulsManage",
        meta: {
          title: "病毒信息管理",
        },
        component: AdminVirulsManage,
      },
      {
        path: "adminVirulsSet/:id",
        name: "adminVirulsSet",
        component: AdminVirulsSet,
      },
      {
        path: "adminVirulsReport",
        name: "adminVirulsReport",
        component: AdminVirulsReport,
      },
      {
        path: "adminWayManage",
        name: "adminWayManage",
        component: AdminWayManage,
      },
      {
        path: "adminWaySet/:id",
        name: "adminWaySet",
        component: AdminWaySet,
      },
      {
        path: "adminPrevention",
        name: "adminPrevention",
        component: AdminPrevention,
      },
      {
        path: "adminPreventionSet/:id",
        name: "adminPreventionSet",
        component: AdminPreventionSet,
      },
    ],
  },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
});

route.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default route;
