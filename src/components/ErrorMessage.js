import { Error } from "../ui/Error";

export default function ErrorMessage({ message }) {
  return (
    <Error>
      <span>⛔</span>
      {message}
    </Error>
  );
}
