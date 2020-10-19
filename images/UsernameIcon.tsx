import React from "react";

function UsernameIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        fill="#90A4AE"
        d="M5 0a3.125 3.125 0 110 6.25A3.125 3.125 0 015 0zm3.58 6.52l-1.393-.348c-1.463 1.052-3.237.817-4.374 0L1.42 6.52A1.875 1.875 0 000 8.339v.723C0 9.58.42 10 .938 10h8.124c.518 0 .938-.42.938-.938V8.34c0-.86-.586-1.61-1.42-1.82z"
      />
    </svg>
  );
}

export default React.memo(UsernameIcon);
