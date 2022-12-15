import { useState } from "react"; //useState DOM manipulation

export default function SignInPage({ setAuth }) {
  const [errorMessage, setErrorMessage] = useState("");

  function signIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value; // mail value from inout field in sign in form
    const password = event.target.password.value; // password value from inout field in sign in form

    if (mail === "admin@mail.dk" && password === "admin1234") {
      setAuth(true);
      localStorage.setItem("isAuth", true); // set localStorage
    } else {
      setErrorMessage("Wrong mail or password.");
    }
  }
  return (
    <section className="page">
      <article>
        <h1 className="text-center">Sign In</h1>
        <form onSubmit={signIn}>
          <input type="email" name="mail" placeholder="Type your mail" />
          <input type="password" name="password" placeholder="Type your password" />
          <p className="text-error">{errorMessage}</p>
          <button>Sign in</button>
        </form>
      </article>
    </section>
  );
}
