import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="130" />
    <rect x="0" y="278" rx="10" ry="10" width="280" height="28" />
    <rect x="3" y="323" rx="10" ry="10" width="280" height="88" />
    <rect x="128" y="417" rx="25" ry="25" width="152" height="45" />
    <rect x="3" y="426" rx="10" ry="10" width="90" height="27" />
  </ContentLoader>
);

