import React from "react";
import _ from "lodash";

const Tags = tags =>
  _.map(tags.tags, tag => {
    return (
      <small
        key={tag}
        className="badge badge-secondary text-white font-weight-light mr-1"
      >
        {tag}
      </small>
    );
  });

export default Tags;
