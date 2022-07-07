import './App.css';
import RowDemo from './component/row';
import React from "react";



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
    <div>

      {articles && <> {
      articles.map((row, key) => (
        <RowDemo key={key} title={"row "+key} columns={row.columns} />
      ))}
</>}
    </div>
  )
}

export default App;
