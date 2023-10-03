import React from "react";

function RememberMe() {
  return (
    <div className="flex justify-between mb-4">
      <span>
        <label for="remember_user">
          <input
            id="remember_user"
            type="checkbox"
            name="remember_user"
            value="1"
          />{" "}
          Remember me
        </label>
      </span>
      <span>Need help?</span>
    </div>
  );
}

export default RememberMe;
