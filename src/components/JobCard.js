import { New, Featured, Languages, Tools, Role, Level } from "./Tags";
import "./css/JobCard.css";
// import "./css/responsive.css";
import JobInfo from "./JobInfo";
import Avatar from "./Avatar";
import { useContext } from "react";
import { JobContext } from "./JobContext";
function JobCard({ data }) {
  const ctx = useContext(JobContext);
  return (
    <div className={`job-card ${data.featured ? "featured-card" : ""}`}>
      <Avatar imageUrl={data.logo}></Avatar>
      <div className="group">
        <div className="company-name">
          <span className="name">{data.company}</span>
          {data.new ? <New context={ctx}></New> : null}
          {data.featured ? <Featured context={ctx}></Featured> : null}
        </div>
        <div className="job-title">{data.position}</div>

        <JobInfo
          postedAt={data.postedAt}
          contract={data.contract}
          location={data.location}
        ></JobInfo>
      </div>
      <div className="requirements">
        <Role role={data.role} context={ctx}></Role>
        <Level level={data.level} context={ctx}></Level>
        <Languages languages={data.languages} context={ctx}></Languages>
        <Tools tools={data.tools} context={ctx}></Tools>
      </div>
    </div>
  );
}

export default JobCard;
