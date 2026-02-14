<template>
<div class="">
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component"/>
    </transition>
  </router-view>
</div>
</template>

<script>
import router from './router'
export default {
  setup() {
    router.beforeEach((to, from) => {

      if (to.name == 'login' && from.name == 'pw-login') to.meta.transition = 'slide-left'
      if (to.name == 'pw-login' && from.name == 'login') to.meta.transition = 'slide-left'

      
        if (to.meta.transition == undefined) return
        if (to.meta.transition == 'push') {
          to.meta.transition = 'push'
          if (!from.name) to.meta.transition = ''
          return
        }
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    })
  },
}
</script>

<style>
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .23s cubic-bezier(0.65, 0.05, 0.36, 1);
  position: absolute;
}
.slide-left-enter-from {

  transform: translateX(100vw);
  opacity: 0;
}


.slide-left-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
  
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .23s cubic-bezier(0.65, 0.05, 0.36, 1);
  position: absolute;
}
.slide-right-enter-from {

  transform: translateX(-100vw);
  opacity: 0;
}


.slide-right-leave-to {
  transform: translateX(100vw);
  opacity: 0;
  
}

.push-enter-active,
.push-leave-active {
  transition: all 0.45s cubic-bezier(0.65,0.05,0.36,1);
}

.push-enter-to {
  position: absolute;
  right: 0;
}

.push-enter-from {
  position: absolute;
  right: -190%;
}

.push-leave-to {
  position: absolute;
  left: -190%;
}

.push-leave-from {
  position: absolute;
  left: 0;
}


</style>
