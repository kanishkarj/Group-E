import router from '../../router'

export default {
  signIn (context, payload) {
    console.log(payload)
    router.push('/home')
  },
  startExam (context, payload) {
    router.push('/start')
  },
  updateQuestions (context, payload) {
    const data = require('./data')
    Promise.all([
      context.commit('assignQuestions', data)
    ]).then(() => {
      context.commit('randomizeQuest')
    })
  }
}
