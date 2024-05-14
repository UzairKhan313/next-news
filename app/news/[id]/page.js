import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return <div>{id} Page</div>;
};

export default page;
