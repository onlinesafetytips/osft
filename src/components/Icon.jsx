// Small inline SVG set. Icons are decorative by default (aria-hidden).
// Pass `title` to make an icon semantic (gives it a role="img" and label).

const COMMON_PROPS = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function wrap(children, { title, size = 24, ...rest } = {}) {
  const ariaProps = title
    ? { role: 'img', 'aria-label': title }
    : { 'aria-hidden': 'true', focusable: 'false' };
  return (
    <svg {...COMMON_PROPS} width={size} height={size} {...ariaProps} {...rest}>
      {children}
    </svg>
  );
}

export function Shield(props) {
  return wrap(
    <>
      <path d="M12 3 4 6v6c0 4.5 3.2 7.5 8 9 4.8-1.5 8-4.5 8-9V6l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </>,
    props
  );
}

export function Mail(props) {
  return wrap(
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>,
    props
  );
}

export function Lock(props) {
  return wrap(
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>,
    props
  );
}

export function Globe(props) {
  return wrap(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 3 2.5 15 0 18" />
      <path d="M12 3c-2.5 3-2.5 15 0 18" />
    </>,
    props
  );
}

export function Download(props) {
  return wrap(
    <>
      <path d="M12 4v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 19h16" />
    </>,
    props
  );
}

export function Users(props) {
  return wrap(
    <>
      <circle cx="9" cy="9" r="3.25" />
      <path d="M3.5 19c.8-2.7 3-4.5 5.5-4.5s4.7 1.8 5.5 4.5" />
      <circle cx="16.5" cy="10" r="2.5" />
      <path d="M15 14.6c2.4.2 4.3 1.8 5 4.4" />
    </>,
    props
  );
}

export function Wifi(props) {
  return wrap(
    <>
      <path d="M2.5 9.5a14 14 0 0 1 19 0" />
      <path d="M5.5 13a10 10 0 0 1 13 0" />
      <path d="M8.5 16.5a6 6 0 0 1 7 0" />
      <circle cx="12" cy="20" r="0.8" fill="currentColor" stroke="none" />
    </>,
    props
  );
}

export function Cart(props) {
  return wrap(
    <>
      <path d="M3 4h2l2.3 11.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.5L20.5 8H6" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="17" cy="20" r="1.2" />
    </>,
    props
  );
}

export function Alert(props) {
  return wrap(
    <>
      <path d="M12 3 2.5 20h19L12 3z" />
      <path d="M12 10v4" />
      <path d="M12 17.2v.1" />
    </>,
    props
  );
}

export function Check(props) {
  return wrap(<path d="m5 12 4.5 4.5L19 7" />, props);
}

export function X(props) {
  return wrap(
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>,
    props
  );
}

export function ArrowRight(props) {
  return wrap(
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>,
    props
  );
}

export const ICONS = {
  Shield,
  Mail,
  Lock,
  Globe,
  Download,
  Users,
  Wifi,
  Cart,
  Alert,
  Check,
  X,
  ArrowRight,
};
