export default defineEventHandler(async (event) => {
  const key = event.context.key
  const query = useQuery(event)
  const { location } = await $fetch<{ location: CityType[] }>('https://geoapi.qweather.com/v2/city/lookup', {
    params: {
      location: query.location,
      key,
    },
  })
  return {
    location,
  }
})
