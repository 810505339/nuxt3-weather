export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  event.context.key = config.KEY
})
