<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index">
        <p><b>用户：</b>{{ msg.user }}</p>
        <p><b>AI：</b>{{ msg.ai }}</p>
      </div>
    </div>

    <div class="input-box">
      <input v-model="input" placeholder="输入内容..." />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

interface Message {
  user: string
  ai: string
}

const input = ref('')
const messages = ref<Message[]>([])

const sendMessage = async () => {
  if (!input.value) return

  const userMessage = input.value

  const res = await axios.post('/api/chat', {
    message: userMessage
  })

  messages.value.push({
    user: userMessage,
    ai: res.data.reply
  })

  input.value = ''
}
</script>

<style>
.chat-container {
  width: 600px;
  margin: 50px auto;
}

.messages {
  min-height: 300px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}

.input-box {
  display: flex;
}
input {
  flex: 1;
}
</style>