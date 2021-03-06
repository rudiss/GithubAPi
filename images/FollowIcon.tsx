import React from "react";

function FollowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="18"
      fill="none"
      viewBox="0 0 9 18"
    >
      <path
        fill="#162668"
        d="M4.43 0c1.632 0 2.954 1.007 2.954 2.25S6.062 4.5 4.43 4.5c-1.63 0-2.953-1.007-2.953-2.25S2.799 0 4.43 0zm2.216 5.063H6.12a5.222 5.222 0 01-3.382 0h-.524C.992 5.063 0 5.817 0 6.75v4.781c0 .466.496.844 1.108.844h.738v4.781c0 .466.496.844 1.108.844h2.953c.612 0 1.108-.378 1.108-.844v-4.781h.738c.612 0 1.108-.378 1.108-.844V6.75c0-.932-.992-1.688-2.215-1.688z"
      />
    </svg>
  );
}

export default React.memo(FollowIcon);
