import './App.css';
import RowDemo from './component/row';
import React from "react";
import NavBar from './component/nav';



function App() {

  const [articles, setArticles] = React.useState([])

  const fetchData = () => {
    fetch("https://storage.googleapis.com/aller-structure-task/test_data.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setArticles(data[0])
      })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  console.log(articles)
  return (
    <>
      <NavBar/>
      {articles && <> {
      articles.map((row, key) => (
        <RowDemo key={key} title={"row "+key} columns={row.columns} />
      ))}
</>}
    </>
  )
}

export default App;
