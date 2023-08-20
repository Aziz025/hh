import React from 'react'; // Импорт React обязателен, если вы используете JSX
import Header from '../../components/header';
import MyResumes from '@/components/myresumes';

export default function ResumePage() {
  const resumes = [
    {
      position: "Менеджер отдела продаж",
      createdAt: "25.07.2023",
      stats: {
        views: 0,
        applies: 0,
        show: 0
      }
    },
    {
      position: "Back-end Developer",
      createdAt: "25.06.2023",
      stats: {
        views: 10,
        applies: 5,
        show: 100
      }
    },
    {
      position: "React Developer",
      createdAt: "25.01.2023",
      stats: {
        views: 20,
        applies: 10,
        show: 200
      }
    }
  ];

  return (
    <main>
      <Header />
      <div className="container">
        <div className="flex flex-ai-c flex-jc-sb ptb7">
          <h1>Мои резюме</h1>
          <button className="button button-secondary-bordered">Создать резюме</button>
        </div>
        <MyResumes resumes={resumes} />
      </div>
    </main>
  );
}
