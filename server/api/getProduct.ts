export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const id = query.id
  console.log('id: ', id);

  try {
    const data = await $fetch(`https://dummyjson.com/products/${id}`)
    return data
  }
  catch (error) {
    console.log('error: ', error);
    return {}
  }
})
