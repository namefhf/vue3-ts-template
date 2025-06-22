<script lang="tsx">
export default defineComponent({
  name: 'Loading',
  emits: ['close'],
  setup(props, { emit }) {
    return () => {
      return (
        <div class="fixed inset-0 flex items-center justify-center  z-50">
          <svg
            class="animate-spin h-10 w-10 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => emit('close')}
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.343A8.001 8.001 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.595zM12 20a8.001 8.001 0 01-6.343-2.93l-3.93 1.595A11.95 11.95 0 0012 24v-4zm6.343-2.93A8.001 8.001 0 0120 12h4c0 3.042-1.135 5.824-3 7.938l-3.657-1.938zM20 12a8.001 8.001 0 01-2.93-6.343l3.657-1.938A11.95 11.95 0 0024 12h-4z"
            ></path>
          </svg>
        </div>
      );
    };
  },
});
</script>

<style lang="less" scoped></style>
