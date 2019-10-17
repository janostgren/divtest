const axios = require('axios')

const getBreeds = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = await getBreeds()

  /*
  if (breeds.data.message) {
    console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
  }
  */
  return breeds;
}

async function x() {
  var breeds = await countBreeds();
  console.log("info","in x")
  console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
  //console.log(breeds);

}
x();
