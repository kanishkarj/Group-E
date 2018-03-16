<template lang="html">
  <v-app id="inspire">
    <v-navigation-drawer
      clipped
      fixed
      app
      class="mt-4"
    >
    <div class="text-xs-center pt-4">
      <div class="pt-4" v-for="i in 4" :key='i'>
        <h3 class="">Set {{i}}</h3>
        <v-btn v-for="j in questions[i-1].Set.length"
         class="mr-1 ml-0"
         fab dark small
         :color='questions[i-1].Set[j-1].color'
         :key='j'
         @click="setCurrQuestion(i,j)"
         >
           {{j}}
        </v-btn>
      </div>
   </div>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>{{title}} : Set {{currSet +1}} | {{currQ+1}} </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex shrink>
            <v-container fluid fill-height>
              <v-layout justify-center >
                <v-flex>
                  <h2>
                    {{currQuest.questions}}
                  </h2>
                    <v-radio-group v-model="opt">
                      <v-radio :label="currQuest.op1" value="1"></v-radio>
                      <v-radio :label="currQuest.op2" value="2"></v-radio>
                      <v-radio :label="currQuest.op3" value="3"></v-radio>
                      <v-radio :label="currQuest.op4" value="4"></v-radio>
                    </v-radio-group>
              </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app fixed>
      <v-btn flat value="recent" @click="prevQ">
        <v-icon>arrow_back</v-icon>
        <span> Previous</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn-toggle flat value="recent" v-model='marked'>
        <v-btn>
          <span>Mark for Review</span>
        </v-btn>
      </v-btn-toggle>
      <v-spacer></v-spacer>
      <v-btn flat value="recent" v-if="opt>0" @click="removeAns">
        <span>Remove</span>
      </v-btn>
      <v-spacer v-if="opt>0"></v-spacer>
      <v-btn flat value="recent" @click="nextQ">
        <span>Next</span>
        <v-icon>arrow_forward</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      title: '',
      questions: [],
      currSet: 0,
      currQ: 0,
      opt: 0,
      marked: true,
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  methods: {
    changedAnsAfter: function () {
      if (this.questions[this.currSet].Set[this.currQ].ans) {
        this.opt = this.questions[this.currSet].Set[this.currQ].ans
      } else {
        this.opt = 0
      }
    },
    changedAnsBefore: function () {
      if (this.questions[this.currSet].Set[this.currQ].marked) {
        this.questions[this.currSet].Set[this.currQ].color = 'primary'
        console.log(this.questions[this.currSet].Set[this.currQ])
      } else {
        if (this.questions[this.currSet].Set[this.currQ].ans > 0) {
          this.questions[this.currSet].Set[this.currQ].color = 'success'
        } else {
          this.questions[this.currSet].Set[this.currQ].color = 'red'
        }
      }
    },
    setCurrQuestion: function (set, q) {
      this.changedAnsBefore()
      this.currSet = set - 1
      this.currQ = q - 1
      this.changedAnsAfter()
    },
    nextQ: function () {
      console.log(this.questions[this.currSet].Set[this.currQ])
      this.changedAnsBefore()
      if (this.currQ < 20 - 1) {
        this.currQ++
      } else {
        console.log('sd')
        this.currQ = 0
        this.currSet++
      }
      this.changedAnsAfter()
    },
    prevQ: function () {
      this.changedAnsBefore()
      if (this.currQ > 0) {
        this.currQ--
      } else if (this.currSet > 0) {
        this.currSet--
        this.currQ = 19
      }
      this.changedAnsAfter()
    },
    removeAns: function () {
      this.opt = 0
      this.questions[this.currSet].Set[this.currQ].ans = 0
    },
    markForReview: function () {
      this.marked = !this.marked
    }
  },
  computed: {
    currQuest: function () {
      return this.questions[this.currSet].Set[this.currQ]
    }
  },
  created: function () {
    this.title = this.$store.state.title
    this.$store.dispatch('updateQuestions').then(() => {
      this.questions = (this.$store.getters.getQuestions)
    })
  },
  watch: {
    opt: function () {
      this.questions[this.currSet].Set[this.currQ].ans = this.opt
    },
    marked: function () {
      if (this.marked == null) {
        this.questions[this.currSet].Set[this.currQ].marked = false
      } else {
        this.questions[this.currSet].Set[this.currQ].marked = true
      }
    }
  }
}
</script>

<style lang="css">

</style>
