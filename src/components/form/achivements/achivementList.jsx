import React from "react";
import AchievementItem from "./achivementItem";

export default function AchievementList({ achievements, onEdit, onDelete }) {
  return (
    <ul className="list-group mt-2">
      {achievements.map((achievement, index) => (
        <AchievementItem
          key={index}
          index={index}
          achievement={achievement}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
