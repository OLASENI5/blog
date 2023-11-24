import React, { useState } from "react";

const CommentForm = ({ btnLabel, formSubmitHandler }) => {
  const [value, setValue] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="flex flex-col items-end border border-dark-hard rounded-lg p-4">
        <textarea
          className="w-full focus:outline-none"
          rows="5"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-dark-hard text-white font-semibold mt-2"
        >
          {btnLabel}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
