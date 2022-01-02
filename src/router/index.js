import { createRouter, createWebHistory } from "vue-router";
import MovieDetails from "../views/MovieDetails";
import Home from "../views/Home";
const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },
    {
        path: '/movie/:id',
        name: "Moviedetails",
        component: MovieDetails,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router