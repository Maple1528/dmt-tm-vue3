import { createRouter, createWebHashHistory, RouteRecordRaw, RouterView } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: { name: 'grade' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: 'grade',
        component: RouterView,
        meta: {
          title: '年级管理'
        },
        children: [
          {
            path: '',
            name: 'grade',
            component: () => import('@/views/grade/index.vue'),
            meta: {
            }
          },
          {
            path: 'add',
            name: 'addGrade',
            component: () => import('@/views/grade/addGrade.vue'),
            meta: {
              title: '增加年级',
              activeMenu: '/grade'
            }
          },
          {
            path: 'edit',
            name: 'editGrade',
            component: () => import('@/views/grade/editGrade.vue'),
            meta: {
              title: '编辑年级',
              activeMenu: '/grade'
            }
          }
        ]
      },
      {
        path: '/subject',
        component: RouterView,
        meta: {
          title: '课程管理'
        },
        children: [
          {
            path: '',
            name: 'subject',
            component: () => import('@/views/subject/index.vue'),
            meta: {
            }
          },
          {
            path: 'add',
            name: 'addSubject',
            component: () => import('@/views/subject/addSubject.vue'),
            meta: {
              title: '新增课程',
              activeMenu: '/subject'
            }
          },
          {
            path: 'edit',
            name: 'aditSubject',
            component: () => import('@/views/subject/editSubject.vue'),
            meta: {
              title: '编辑课程',
              activeMenu: '/subject'
            }
          }
        ]

      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
