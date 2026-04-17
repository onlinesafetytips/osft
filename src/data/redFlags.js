export const redFlags = [
  {
    title: 'Urgency and pressure',
    body: 'Messages that claim you have only a few minutes to act, or warn that something serious will happen to your account/finances if you do not respond immediately are almost always trying to push you past the point where you would have thought carefully.',
  },
  {
    title: 'Unusual payment methods',
    body: 'Requests for payment in gift cards, wire transfers, crypto, or p2p payment apps are another one of the strongest indicators of a scam.',
  },
  {
    title: 'Slightly wrong sender addresses',
    body: 'Sender addresses that look almost right but contain a misspelling, extra hyphen, or different domain ending are a giveaway, since email has to come from somewhere the scammer actually controls.',
  },
  {
    title: 'Generic greetings instead of your name',
    body: 'A greeting like "Dear customer" or "Dear user" in a message that claims to come from a company you already do business with is a signal, albeit weak on its own, but worth noting since the company should know your name.',
  },
  {
    title: 'Unexpected attachments',
    body: 'Invoices or other documents you were not expecting to receive should be treated with suspicion.',
  },
  {
    title: 'Links whose visible text does not match the real destination',
    body: 'If the text of a link claims one site but hovering your cursor over it reveals a different address underneath, the message is almost certainly trying to trick you into visiting somewhere you would not otherwise go.',
  },
  {
    title: 'Requests for verification codes',
    body: 'No support team, bank, or service will ever ask you to read a one-time verification code that was sent to your phone or authenticator, because the entire purpose of those codes is that nobody other than you should know them.',
  },
  {
    title: 'Offers that are too good to be true',
    body: 'Prizes for contests you never entered, refunds for services you did not buy, or even investment opportunities that promise impossibly large returns in short timeframes are all classic bait used to get attention before the real scam begins.',
  },
];

export const examples = [
  {
    label: 'Example: fake delivery text',
    quote:
      '"USPS: Your package is currently held at the depot. This is the final notice. Pay the $1.99 delivery fee within the next 12 hours to release it: usps-holding[.]co/track"',
    note: 'Real delivery services do not charge fees by text message, and the domain in the link is not usps.com. The tiny amount and the near deadline are both designed to make the message feel low-risk and urgent at the same time.',
  },
  {
    label: 'Example: fake account alert',
    quote:
      '"Your account was accessed from a new device in another country. If this was not you, click here to secure your account immediately."',
    note: 'The link in a message like this goes to a lookalike login page designed to capture your real password when you sign in to "secure" the account. Opening the app or website directly rather than following the link avoids the trap entirely.',
  },
];
