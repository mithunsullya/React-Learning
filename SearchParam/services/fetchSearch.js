const fetchSearch = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];
  const result = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal.toLowerCase()}&location=${location.toLowerCase()}&breed=${breed}`
  );

  if (!result.ok) {
    throw new Error(`Fetch not ok`);
  }

  return result.json();
};

export default fetchSearch;
