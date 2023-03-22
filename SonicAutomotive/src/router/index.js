import { createWebHistory, createRouter } from "vue-router";
import BMW from "@/navbar/BMW.vue";
import Ford from "@/navbar/Ford.vue";
import Luxes from "@/navbar/Luxes.vue";
import Mazda from "@/navbar/Mazda.vue";
import Mclaren from "@/navbar/Mclaren.vue";
import Mercedes from "@/navbar/Mercedes.vue";
import Mitsubishi from "@/navbar/Mitsubishi.vue";
import Nissan from "@/navbar/Nissan.vue";
import Porsche from "@/navbar/Porsche.vue";
import Toyota from "@/navbar/Toyota.vue";
import Home from "@/navbar/Home.vue";
import Contact from "@/navbar/Contact.vue";
import About from "@/navbar/About.vue";
import admin from "@/admin/admin.vue";
import adminedit from "@/admin/editadmin.vue";
import create from "../admin/create.vue";
import buy from "@/components/buy.vue";
 import Carsearch from "@/navbar/search.vue";
import info from "@/navbar/detail.vue";
import ordered from "@/components/Ordered.vue";



const routes = [
  {
    path: "/bmw",
    name: "BMW",
    component: BMW,
  },
  {
    path:"/:Model",
    name:"s",
    component: Carsearch,
    
  },
  {
    path: "/ford",
    name: "Ford",
    component: Ford,
  },{
    path: "/luxes",
    name: "Luxes",
    component: Luxes,
  },
  {
    path: "/mazda",
    name: "Mazda",
    component: Mazda,
  },{
    path: "/mclaren",
    name: "Mclaren",
    component: Mclaren,
  },
  {
    path: "/mercedes",
    name: "Mercedes",
    component: Mercedes,
  },{
    path: "/mitsubishi",
    name: "Mitsubishi",
    component: Mitsubishi,
  },
  {
    path: "/nissan",
    name: "Nissan",
    component: Nissan,
  },{
    path: "/porsche",
    name: "porsche",
    component: Porsche,
  },
  {
    path: "/toyota",
    name: "Toyota",
    component: Toyota,
  },{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },{
    path: "/about",
    name: "About",
    component: About,
  },{
    path: "/:Brand/:id",
    name: "details",
    component: info,
  },
  {
    path: "/Admin",
    name: "Admin",

    component: admin,
  },
  {
    path: "/Admin/:id",
    name: "Adminedit",

    component: adminedit,
  },
  {
    path: "/admin/create",

    name: "Create",
    component: create,
  },
  {
  path: "/Buy/:id",

  name: "Buy",
  component: buy,
},
{
  path: "/Ordered",

  name: "test",
  component: ordered,
},
 

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;