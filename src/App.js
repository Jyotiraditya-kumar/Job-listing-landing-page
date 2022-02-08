import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";

import { useContext } from "react";
import { JobContext } from "./components/JobContext";

import { useEffect } from "react";

function App() {
  const ctx = useContext(JobContext);
  // const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((d) => {
        // console.log(d);
        ctx.setData(d);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <section className="card-section">
        <Filters></Filters>
        {ctx.data.map((d) => (
          <JobCard data={d} key={d.id}></JobCard>
        ))}
      </section>
    </>
  );
}

export default App;
