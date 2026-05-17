type BrandMarkProps = {
  className?: string;
  size?: number;
};

export default function BrandMark({ className = "", size = 56 }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      role="img"
      aria-label="AllyCheck"
      className={className}
      style={{ width: size, height: size, display: "block" }}
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f3529" />
          <stop offset="100%" stopColor="#031915" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" fill="url(#bg)" />

      <path
        d="M512 168L318 628L465 628L318 856L690 856L736 748L586 748L512 564L438 748L586 748L737 428L512 168Z"
        fill="#fafaf8"
      />
      <path
        d="M686 656L827 562L609 820L753 830L827 840L788 936L565 920L686 656Z"
        fill="#fafaf8"
      />
      <path
        d="M512 168L318 628L448 628L607 384L694 508L746 494L512 168Z"
        fill="#fafaf8"
        opacity="0.95"
      />
      <path
        d="M454 670L736 494L651 574L469 712L454 670Z"
        fill="#fafaf8"
      />
      <path
        d="M512 168L460 291L553 470L512 564L438 748L586 748L512 564L746 494L512 168Z"
        fill="#fafaf8"
      />
    </svg>
  );
}
