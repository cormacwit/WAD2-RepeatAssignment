import { useEffect, useState } from "react";
import {getTVSeries} from '../api/tmdb-api'

const useTvSeries = id => {
  const [tvseries, setTvSeries] = useState(null);
  useEffect(() => {
    getTVSeries(id).then(tvseries => {
      setTvSeries(tvseries);
    });
  }, [id]);
  return [tvseries, setTvSeries];
};

export default useTvSeries