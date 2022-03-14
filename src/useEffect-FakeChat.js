import { useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    title: "ReactJS là gì? Tại sao nên học ReactJS?",
  },
  {
    id: 2,
    title: "SPA/MPA là gì?",
  },
  {
    id: 3,
    title: " Arrow function",
  },
];

function FakeChat() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          style={{
            color: lessonId === lesson.id ? "red" : "#333",
          }}
          onClick={() => setLessonId(lesson.id)}
        >
          {lesson.title}
        </li>
      ))}
    </div>
  );
}
export default FakeChat;
