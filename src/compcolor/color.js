import React from "react";
import StarRating from "./starRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider";

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();
  return (
    <section className="section-color">
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, width:450,backgroundColor: color }}  className="color"/>
      <StarRating
        selectedStars={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  );
}
