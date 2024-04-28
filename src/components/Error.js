import { useRouteError } from "react-router-dom";

//Note to be taken:
// whenever you see a function starting with use like useEffect or
//  useState it is called a "Hook"

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
