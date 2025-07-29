const categories = [
  {
    name: "JavaScript",
    description:
      "Проверьте свои знания основ JavaScript и продвинутых концепций",
    questionsCount: 10,
  },
  {
    name: "React",
    description:
      "Проверь себя с помощью хуков, компонентов и лучших практик React",
    questionsCount: 10,
  },
  {
    name: "Node.js",
    description: "Сервер-сайд JavaScript и разработка backend",
    questionsCount: 10,
  },
  {
    name: "Web APIs",
    description: "API-интерфейсы, fetch, DOM и веб-стандарты",
    questionsCount: 10,
  },
];

function StartScreen({ onSelectCategory }) {
  return (
    <>
      <h2>Выберите квиз категорию</h2>
      <span className="subtitle">
        Выберите тему программирования, чтобы проверить свои знания
      </span>
      <ul className="start-categories">
        {categories.map((cat) => (
          <li onClick={() => onSelectCategory(cat.name)}>
            <img src={"/img/" + cat.name + ".png"} width={50} height={50} />
            <div className="content">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <div className="qstn-count-and-btn">
                <span>{cat.questionsCount} вопросов</span>
                <button>Начать</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default StartScreen;
