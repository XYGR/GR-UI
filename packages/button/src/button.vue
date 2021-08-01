<template>
  <button
    @click="$emit('click')"
    class="gr-button"
    :disabled="disabled"
    :class="[
    'gr-button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'gr-button--size-'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'GrButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
