import React from "react";

import { Media } from "react-bootstrap";

import "../../../../src/style.css";

export const SearchlistDetails = ({ ser_list }) => {
  let content;
  if (ser_list.fetching_error === true) {
    content = (
      <div>
        Ooops! it seems error fetching data, Visit again in few minutes we are
        working to fix the issue at the earliest
      </div>
    );
  } else if (ser_list.fetching === true) {
    content = <div>Loading..</div>;
  } else {
    return (
      <li className="contactListDetails">
        <Media>
          <Media.Left>
            <img width={96} height={96} src={`${ser_list.general.avatar}`} />
          </Media.Left>

          <Media.Body>
            <Media.Heading>
              <p>
                {" "}
                {`${ser_list.general.firstName} ${ser_list.general.lastName}`}
              </p>
            </Media.Heading>
            <p>
              {" "}
              Job Title : {`${ser_list.job.title} - ${
                ser_list.job.company
              }`}{" "}
            </p>
            <p> Email : {`${ser_list.contact.email}`} </p>
            <p> Phone : {`${ser_list.contact.phone}`} </p>
            <p>
              {" "}
              Address :{" "}
              {`${ser_list.address.zipCode},
                      ${ser_list.address.street},
                      ${ser_list.address.city},
                      ${ser_list.address.country}`}
            </p>
          </Media.Body>
        </Media>
      </li>
    );
  }
};
