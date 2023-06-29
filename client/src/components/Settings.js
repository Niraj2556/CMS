function Settings() {
  return (
    <>
    <div className="">
      <div className="">
        <div className="">
          <span className="">Update Your Account</span>
          <span className="">Delete Account</span>
        </div>
        <form className="">
          <label>Profile Picture</label>
          <div className="">
            <img
              src=""
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className=""
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Your email" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
    </>
  )};

export default  Settings;