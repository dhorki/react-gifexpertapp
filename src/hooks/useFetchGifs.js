import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => setState({ data: imgs, loading: false }));
  }, [category]); // leaving it empty configures useState to run only once for getGifs()
  // this, is when is rendered the first time

  return state;
};
