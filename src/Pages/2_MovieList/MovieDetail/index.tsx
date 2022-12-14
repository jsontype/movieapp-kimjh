import React, { useState } from "react";
// import { skipPartiallyEmittedExpressions } from 'typescript'
import styles from "./style.module.scss";

type MovieDetailProps = {
  item: any;
};

export default function MovieDetail({ item }: MovieDetailProps) {
  const movieRank =
    item.rating >= 9
      ? styles.movieRankGood
      : item.rating >= 7
      ? styles.movieRankSoso
      : styles.movieRankBad;
  const hotIcon = item.rating >= 9 && "π₯";
  const genres = item.genres.join(", ");
  const runtime = item.runtime + "min" || "μμμκ° μ λ³΄μμ";
  const summary = item.summary ? item.summary : item.synopsis;

  const [isIidx, setIsIdx] = useState(0);

  const torrents = item.torrents.map((item: any, idx: number) => {
    const disIdx = idx + 1;
    const copyUrl = (url: string, idx: number) => {
      navigator.clipboard.writeText(url);
      setIsIdx(idx);
    };
    return (
      <div key={idx}>
        <button type="button" onClick={() => copyUrl(item.url, disIdx)}>
          ν λ νΈ{disIdx}URLλ³΅μ¬
        </button>
        <span className={styles.coopyUrl}>
          {" "}
          {disIdx === isIidx ? "ν λ νΈ" + disIdx + " μ£Όμλ³΅μ¬ μλ£" : ""}
        </span>
      </div>
    );
  });

  const detail = (
    <div className={styles.movieDetail}>
      <div>μ₯λ₯΄: {genres}</div>
      <div>λ¬λνμ: {runtime}</div>
      <div>
        <span>{hotIcon}</span> νμ  :{" "}
        <span className={movieRank}>{item.rating}</span> / 10
      </div>
      <div>{summary}</div>
      <div>{torrents}</div>
    </div>
  );

  return <div>{detail}</div>;
}
