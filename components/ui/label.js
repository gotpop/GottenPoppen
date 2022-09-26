import { cx } from "@utils/all";

export default function Label(props) {
  const color = {
    green: "bg-emerald-700",
    blue: "bg-blue-600",
    orange: "bg-orange-700",
    purple: "bg-purple-600",
    pink: "bg-pink-600"
  };
  
  return (
    <span
      className={cx(
        "inline-flex text-xs font-medium tracking-wider uppercase text-white px-2 rounded",
        color[props.color] || "bg-pink-600"
      )}>
      {props.children}
    </span>
  );
}
