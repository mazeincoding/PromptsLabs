import { get_app_name } from "@/lib/utils";

function Logo({
  size = 24,
  show_logo = true,
  show_text = true,
}: {
  size: number;
  show_logo?: boolean;
  show_text?: boolean;
}) {
  const app_name = get_app_name();
  const second_capital_index = app_name.split('').findIndex((char, index) => index > 0 && char === char.toUpperCase());
  const primary_text = app_name.slice(second_capital_index);
  const regular_text = app_name.slice(0, second_capital_index);

  return (
    <div className="flex items-center gap-2">
      {show_logo && <LogoIcon size={size} />}
      {show_text && (
        <span className="text-lg font-bold">
          {regular_text}
          <span className="text-primary">{primary_text}</span>
        </span>
      )}
    </div>
  );
}

function LogoIcon({ size = 24 }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 270 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.355133"
        y="0.660934"
        width="268.678"
        height="268.678"
        rx="27"
        fill="#46917E"
      />
      <path
        d="M147.413 206.514L88.7743 137.592C87.5031 136.098 87.5031 133.902 88.7743 132.408L147.413 63.4864"
        stroke="white"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <path
        d="M182.819 176.616L149.618 137.592C148.347 136.098 148.347 133.902 149.618 132.408L182.819 93.3839"
        stroke="white"
        strokeWidth="22"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { Logo, LogoIcon };
