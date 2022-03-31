import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import SignUp from '../components/SignUp.vue'
import LogIn from '../components/LogIn.vue'
import AddCourses from '../components/AddCourses.vue'
import UpdateCourses from '../components/UpdateCourses.vue'
import DisplayCourses from '../components/DisplayCourses.vue'
import DeleteCourses from '../components/DeleteCourses.vue'
import GettingStarted from '../components/GettingStarted.vue'

const routes = [
  {
    path: '/',
    name: 'GettingStarted',
    component: GettingStarted
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/add-course',
    name: 'AddCourses',
    component: AddCourses,
  },
  {
    path: '/update-course/:id',
    name: 'UpdateCourses',
    component: UpdateCourses,
  },
  {
    path: '/delete-course/:id',
    name: 'DeleteCourses',
    component: DeleteCourses,
  },
  {
    path: '/display-courses',
    name: 'DisplayCourses',
    component: DisplayCourses,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
