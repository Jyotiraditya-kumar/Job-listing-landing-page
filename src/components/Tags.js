// import { useContext } from "react";
// import { JobContext } from "./JobContext";

import { tagHandler } from "./Utility";

export function Languages({ languages, context }) {
  // const ctx = useContext(JobContext);
  return (
    <>
      {languages.map((language) => (
        <div
          data-value={language}
          data-type="languages"
          key={language}
          onClick={(event) => {
            tagHandler(event, context);
          }}
        >
          {language}
        </div>
      ))}
    </>
  );
}
export function Tools({ tools, context }) {
  return (
    <>
      {tools.map((tool) => (
        <div
          data-value={tool}
          data-type="tools"
          key={tool}
          onClick={(event) => {
            tagHandler(event, context);
          }}
        >
          {tool}
        </div>
      ))}
    </>
  );
}

export function New({ context }) {
  // const ctx = useContext(JobContext);

  return (
    <div
      className="new"
      data-value="New"
      data-type="new"
      onClick={(event) => {
        tagHandler(event, context);
      }}
    >
      NEW!
    </div>
  );
}
export function Featured({ context }) {
  // const ctx = useContext(JobContext);

  return (
    <div
      className="featured"
      data-value="Featured"
      data-type="featured"
      onClick={(event) => {
        tagHandler(event, context);
      }}
    >
      FEATURED
    </div>
  );
}
export function Role({ role, context }) {
  // const ctx = useContext(JobContext);

  return (
    <div
      data-value={role}
      data-type="role"
      onClick={(event) => {
        tagHandler(event, context);
      }}
    >
      {role}
    </div>
  );
}
export function Level({ level, context }) {
  // const ctx = useContext(JobContext);

  return (
    <div
      data-value={level}
      data-type="level"
      onClick={(event) => {
        tagHandler(event, context);
      }}
    >
      {level}
    </div>
  );
}
