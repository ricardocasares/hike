// external
import React from "react";
import { User, Code, Photo, Book } from "react-bytesize-icons";

// internal
import Link from "./Link";
import { themed } from "providers/Theme";

const getIcon = icon => {
  const icons = {
    user: (
      <User
        width={48}
        height={48}
        strokeWidth={"7%"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    code: (
      <Code
        width={48}
        height={48}
        strokeWidth={"7%"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    book: (
      <Book
        width={48}
        height={48}
        strokeWidth={"7%"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    photo: (
      <Photo
        width={48}
        height={48}
        strokeWidth={"7%"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  };

  return icons[icon];
};

export default themed(({ theme }) => (
  <div>
    <Link route="index">{getIcon("book")}</Link>
  </div>
));
