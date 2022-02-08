function JobInfo({ postedAt, contract, location }) {
  return (
    <ul className="job-info">
      <li>{postedAt}</li>
      <li>{contract}</li>
      <li>{location}</li>
    </ul>
  );
}
export default JobInfo;
