export const afterClickSteps = [
  {
    title: 'Pause and read what actually happened.',
    body: 'Opening a suspicious link is rarely a problem on its own. Most of the harm happens after you type in a password or install something, so in most cases there is still plenty of time to respond and contain the problem.',
  },
  {
    title: 'Disconnect if anything downloaded or installed.',
    body: 'If a file was downloaded to your device disconnect from Wi-Fi and unplug any network cables. This limits what the download can do to your accounts and files while you work through the remaining steps.',
  },
  {
    title: 'Change the password that was at risk, from a different device.',
    body: 'If you typed a password into a page that turned out to be unsafe, change the password straight away on the real site. Use a different device that you trust rather than the one you just used, and change the same password anywhere else you might have reused it.',
  },
  {
    title: 'Turn on two-factor authentication for the affected account.',
    body: 'If 2FA is not already enabled on the account, turn it on before you do anything else. An authenticator app or a hardware security key (shoutout YubiKey) is preferable to text message codes, because phone-based codes are easy to intercept if the attacker has already gathered enough information about you (sim swapping.)',
  },
  {
    title: 'Run a security scan on the device that was used.',
    body: 'On Windows, you should run a full scan using Microsoft Defender. On Mac, built-in protections usually handle things but something like Malwarebytes is a good second opinion if you are unsure. On a phone, look through installed apps and remove anything you do not recognize.',
  },
  {
    title: 'Review recent activity on the affected account.',
    body: 'Check recent logins and any recent financial transactions on the account that was exposed. If you see activity that does not look like you, remove or sign out that session, and contact the service directly to report what happened.',
  },
  {
    title: 'Watch for follow-up attempts over the next few weeks.',
    body: 'Scammers often reuse whatever information they just gathered to try again. Be skeptical of phone calls, texts, and emails in the weeks following an incident.',
  },
  {
    title: 'Report what happened so others can be warned.',
    body: 'Forward suspicious emails to your email provider as phishing. Report scam texts to your mobile carrier. (If you are in the United States you can file a report at reportfraud.ftc.gov or ic3.gov.)',
  },
];
