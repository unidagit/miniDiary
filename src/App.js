import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "하마",
    content: "안녕 나는 하마",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "사자",
    content: "안녕 나는 사자",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "두루미",
    content: "안녕 나는 두루미",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
