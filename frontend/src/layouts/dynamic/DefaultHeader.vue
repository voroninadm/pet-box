<template>
  <div class="header bg-slate-50">
    <div class="flex gap-2">
      <router-link :to="{ name: 'home' }">
        <svg
          class="header__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            d="M31.8 16 16.8.3a1 1 0 0 0-1.5 0L.3 16a1 1 0 1 0 1.4 1.4L3 16v15a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V21h8v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V16l1.3 1.4a1 1 0 0 0 1.5-1.4zM27 14.2V30h-5V20a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v10H5V14.2a1 1 0 0 0 0-.2L16 2.5 27 14a1 1 0 0 0 0 .2z"
          />
        </svg>
      </router-link>

      <router-link :to="{ name: 'createProduct' }" class="mx-2">
        <svg
          class="header__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <rect
              width="20"
              height="20"
              x="2"
              y="2"
              data-name="--Rectangle"
              rx="2"
              ry="2"
            />
            <path d="M15.5 12h-7m3.5 3.5v-7" />
          </g>
        </svg>
      </router-link>
    </div>
    <div>
      <button @click="$emit('open-login-modal')">
        <svg
          class="header__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            d="M16.64 20.67a1 1 0 1 0 1.42 1.41l5.9-6.06-5.9-6.06a1 1 0 0 0-1.42 1.41L20.26 15H.99a1 1 0 0 0 0 2h19.33zM30 0H12a2 2 0 0 0-2 2v9h2.02V3.22c0-.67.54-1.21 1.2-1.21h15.53c.67 0 1.21.54 1.21 1.21l.03 25.57a1.2 1.2 0 0 1-1.2 1.21H13.22a1.2 1.2 0 0 1-1.21-1.2v-7.83H10V30c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 10px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid lightgrey;
  box-shadow: 2px 1px 5px lightgray;

  &__icon {
    width: 25px;
    height: 25px;
  }
}
</style>
