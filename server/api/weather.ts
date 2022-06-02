export default defineEventHandler(async (event) => {
  const key = event.context.key
  const query = useQuery(event)
  const { now } = await $fetch<{ location: CityType[] }>('https://devapi.qweather.com/v7/weather/now', {
    params: {
      location: query.location,
      key,
    },
  })
  console.log(now)

  return {
    now,
  }
})
