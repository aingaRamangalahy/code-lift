<script setup lang="ts">
const topics = [
  {
    "name": "Angular",
    "description": "A platform for building web applications.",
    "createdAt": "2023-07-28T08:00:00.000Z",
    "updatedAt": "2023-07-28T12:34:56.789Z"
  },
  {
    "name": "React",
    "description": "A JavaScript library for building user interfaces.",
    "createdAt": "2023-07-28T09:30:15.000Z",
    "updatedAt": "2023-07-28T15:45:00.000Z"
  },
  {
    "name": "Node.js",
    "description": "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "createdAt": "2023-07-28T12:00:00.000Z",
    "updatedAt": "2023-07-28T14:20:30.000Z"
  },
  {
    "name": "Vue.js",
    "description": "A progressive JavaScript framework for building UIs.",
    "createdAt": "2023-07-28T14:30:00.000Z",
    "updatedAt": "2023-07-28T16:45:00.000Z"
  },
  {
    "name": "Python",
    "description": "A versatile programming language known for its simplicity.",
    "createdAt": "2023-07-28T16:00:00.000Z",
    "updatedAt": "2023-07-28T18:10:30.000Z"
  },
  {
    "name": "Java",
    "description": "A widely used object-oriented programming language.",
    "createdAt": "2023-07-28T18:30:00.000Z",
    "updatedAt": "2023-07-28T21:15:00.000Z"
  },
  {
    "name": "JavaScript",
    "description": "A high-level, interpreted programming language for the web.",
    "createdAt": "2023-07-28T21:30:00.000Z",
    "updatedAt": "2023-07-28T23:59:59.999Z"
  },
  {
    "name": "Ruby on Rails",
    "description": "A web application framework written in Ruby.",
    "createdAt": "2023-07-28T23:00:00.000Z"
  },
  {
    "name": "Swift",
    "description": "A powerful and intuitive programming language for iOS/macOS apps.",
    "createdAt": "2023-07-29T01:00:00.000Z"
  },
  {
    "name": "Django",
    "description": "A high-level Python web framework that encourages rapid development.",
    "createdAt": "2023-07-29T03:00:00.000Z"
  }
]

const categories = [
  {
    "name": "Frontend Development",
    "topics": ["615ae0a87df3a8abc1234567", "615ae0a87df3a8abc1234568", "615ae0a87df3a8abc1234569"],
    "createdAt": "2023-07-28T08:00:00.000Z",
    "updatedAt": "2023-07-28T12:34:56.789Z"
  },
  {
    "name": "Backend Development",
    "topics": ["615ae0a87df3a8abc123456a", "615ae0a87df3a8abc123456b", "615ae0a87df3a8abc123456c"],
    "createdAt": "2023-07-28T09:30:15.000Z",
    "updatedAt": "2023-07-28T15:45:00.000Z"
  },
  {
    "name": "Object-Oriented Programming",
    "topics": ["615ae0a87df3a8abc123456d", "615ae0a87df3a8abc123456e", "615ae0a87df3a8abc123456f"],
    "createdAt": "2023-07-28T12:00:00.000Z",
    "updatedAt": "2023-07-28T14:20:30.000Z"
  },
  {
    "name": "Database Management",
    "topics": ["615ae0a87df3a8abc1234570", "615ae0a87df3a8abc1234571", "615ae0a87df3a8abc1234572"],
    "createdAt": "2023-07-28T14:30:00.000Z",
    "updatedAt": "2023-07-28T16:45:00.000Z"
  },
  {
    "name": "Mobile App Development",
    "topics": ["615ae0a87df3a8abc1234573", "615ae0a87df3a8abc1234574", "615ae0a87df3a8abc1234575"],
    "createdAt": "2023-07-28T16:00:00.000Z",
    "updatedAt": "2023-07-28T18:10:30.000Z"
  }
]
</script>

<template>
  <div class="side-menu">
    <div class="menu-container">
      <div class="title">Topics</div>
      <div class="item" v-for="(topic, i) in topics" :key="i">
        {{ topic.name }}
      </div>
    </div>

    <div class="menu-container">
      <div class="title">Categories</div>
      <div class="item" v-for="(category, i) in categories" :key="i">
        {{ category.name }}
      </div>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.side-menu {
  border-right: 1px solid $secondary-border-color;
  position: fixed;
  height: calc(100vh - 64px);
  width: 15%;
  margin-left: 5rem;

  .menu-container {
    margin-top: 64px;

    .title {
      font-size: 18px;
      font-weight: bold;
    }

    .item {
      color: $secondary-text-color;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background: $content-background-color;
        border-radius: 10px;
      }
    }
  }
}
</style>