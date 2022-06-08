import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Chronicles() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Link to="/">
        <h2>
          <FaArrowLeft /> Powrót na stronę główną
        </h2>
      </Link>
      <h2>Kroniki</h2>
    </main>
  );
}
