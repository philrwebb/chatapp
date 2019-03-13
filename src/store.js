import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    conversation: {
      start: Date,
      end: Date,
      customer: String,
      active: Boolean,
      conservationPort: Number,
      messages: []
    },
    message: {
      sent: Date,
      text: String,
      sentBy: String,
    },
    helpdesk: {
      currentConversation: {},
      conversations: [],
      systemUserId: String
    },
    simpleMessages: {
      user: '',
      message: '',
      messages: []
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    simpleMessages: state => state.simpleMessages
  }
})
