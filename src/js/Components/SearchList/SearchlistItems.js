import React from "react";

import { Media } from "react-bootstrap";

import "../../../../src/style.css";

export const SearchlistItems = ({ suggestions }) => {
  let content;
  if (suggestions.fetching_error === true) {
    content = (
      <div>
        Ooops! it seems error fetching data, Visit again in few minutes we are
        working to fix the issue at the earliest
      </div>
    );
  } else if (suggestions.fetching === true) {
    content = <div>Loading..</div>;
  } else {
    return (
      <li className="contactListItems">
        <Media>
          <Media.Left>
            <img width={48} height={48} src={`${suggestions.general.avatar}`} />
          </Media.Left>

          <Media.Body>
            <Media.Heading>
              {`${suggestions.general.firstName} ${
                suggestions.general.lastName
              }`}
            </Media.Heading>

            <p>Job Title : {`${suggestions.job.title}`} </p>
          </Media.Body>
        </Media>
      </li>
    );
  }
};
