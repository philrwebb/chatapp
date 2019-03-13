<template>
  <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>Chat</h3>
              <hr>
          </div>
          <div class="card-body card-body-fh" >
              <div id="messages" v-for="(msg, index) in messages" :key="index">
                  <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
              </div>
          </div>
      </div>
      <div class="card-footer">
          <form @submit.prevent="sendMessage">
              <div class="gorm-group">
                  <label for="user">User:</label>
                  <input type="text" v-model="user" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Message:</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Send</button>
          </form>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { mapState } from 'vuex'
export default {
    data() {
        return {
            user: '',
            message: '',
            messages: [],
            socket : io('172.20.10.3:3001')
        }
    },
    computed: {
        ...mapState({
            savedMessages: state => state.simpleMessages.messages
        })
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();
            
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message
            });
            this.message = ''
        }
    },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            var messageBody = document.querySelector('#messages');
            messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
            // you can also do this.messages.push(data)
        });
    }
}
</script>

<style>
.card-body-fh { height: 2hi 00px; overflow-x:visible; overflow-y: auto; scroll-behavior: smooth; bottom: 0; }


/* .card-body-fh p { width: 650px; word-break: break-word; } */
</style>