import "./css/Filters.css";
import removeIcon from "../images/icon-remove.svg";
import { useContext } from "react";
import { JobContext } from "./JobContext";
import { tagRemoveHandler, clearTags } from "./Utility";

function Filters() {
  const ctx = useContext(JobContext);
  return (
    <div
      className="filter-section"
      style={{ display: ctx.tags.length > 0 ? "flex" : "none" }}
    >
      <div className="filters">
        {ctx.tags.map((tag) => (
          <div
            className="filter"
            data-type={tag.type}
            data-value={tag.tag}
            key={tag.tag}
          >
            <div className="filter-text">{tag.tag}</div>
            <img
              src={removeIcon}
              className="cross"
              alt="remove"
              onClick={(event) => {
                tagRemoveHandler(event, ctx);
              }}
            ></img>
          </div>
        ))}
      </div>
      <div className="clear-button" onClick={(event) => clearTags(event, ctx)}>
        Clear
      </div>
    </div>
  );
}
export default Filters;
