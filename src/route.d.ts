import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: String
    activeMenu?: String
  }
}