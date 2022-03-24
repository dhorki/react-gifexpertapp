const getUrlString = (category, offset) => {
  const limit = 10;
  return `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${limit}&api_key=a7hREqvmncZZ8SrIRmUKdfBQ52WFB5OJ&offset=${offset}`;
};

export const getGifs = async (category) => {
  let url = getUrlString(category, 0);

  let resp = await fetch(url);
  let { data, pagination } = await resp.json();
  const total = pagination.total_count;

  console.log(url, total);

  let finalData = [];

  if (total >= 10) {
    const offset = Math.round(Math.random() * (total - 10));
    url = getUrlString(category, offset);

    console.log(url);

    resp = await fetch(url);
    const { data: newData } = await resp.json();
    finalData = newData;
  } else {
    finalData = data;
  }

  const gifs = finalData.map((image) => {
    console.log(image);
    return {
      id: image.id,
      title: image.title,
      url: image.images?.downsized_medium.url,
    };
  });

  console.log(gifs);
  return gifs;
};
