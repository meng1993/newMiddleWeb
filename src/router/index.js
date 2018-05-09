import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/courseware'
import Content from '@/page/homework'
// 课件下的子组件开始
import TeachContent from '@/page/courseware/teachContent'
import Word from '@/page/courseware/word'
import Synthesize from '@/page/courseware/synthesize'
import Sentence from '@/page/courseware/sentence'
import Knowledge from '@/page/courseware/knowledge'
// 课件下的子组件结束
// 作业下的子组件开始
import homeworkContent from '@/page/homework/homeworkContent'
// 作业下的子组件结束

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/courseware'
    },
    {
      path: '/courseware',
      name: 'courseware',
      component: Index,
      children: [
        {
          path: '',
          name: 'TeachContent',
          component: TeachContent
        },
        {
          // /:userId/:challengId/:type
          path: '/courseware/word',
          name: 'Word',
          component: Word
        },
        {
          path: '/courseware/synthesize',
          name: 'Synthesize',
          component: Synthesize
        },
        {
          path: '/courseware/sentence',
          name: 'Sentence',
          component: Sentence
        },
        {
          path: '/courseware/knowledge',
          name: 'Knowledge',
          component: Knowledge
        }
      ]
    },
    {
      path: '/homework',
      component: Content,
      children: [
        {
          path: '',
          name: 'homeworkContent',
          component: homeworkContent
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
  // console.log(from.fullPath)
})
export default router

