import { useNavigate } from "react-router-dom";

export default function SubscribeButton({
  label = "Subscribe for Updates",
  variant = "primary",
}) {
  const navigate = useNavigate();

  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition";

  const styles = {
    primary:
      "bg-green-600 text-white hover:bg-green-700 shadow-sm",
    outline:
      "border border-green-600 text-green-700 hover:bg-green-50",
  };

  return (
    <button
      onClick={() => navigate("/join")}
      className={`${base} ${styles[variant]}`}
    >
      {label}
    </button>
  );
}
