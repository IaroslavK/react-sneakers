import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";

function App() {
  return (
    <div className="wrapper clear">
      <Sidebar />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <Search />
        </div>

        <div className="d-flex">
          <Card
            img={"s1.jpg"}
            price={3272}
            description={"Мужские Кроссовки Nike Blazer Mid Suede"}
          />
          <Card
            img={"s2.jpg"}
            price={4330}
            description={"Мужские Кроссовки Nike Air Max 270"}
          />
          <Card
            img={"s3.jpg"}
            price={2249}
            description={"Мужские Кроссовки Nike Blazer Mid 77"}
          />
          <Card
            img={"s4.jpg"}
            price={1749}
            description={"Кроссовки Puma X Aka Boku Future Rider"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
