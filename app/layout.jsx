import './globals.css';

export const metadata = {
  title: 'AgentPay',
  description: 'Payment Protocol for AI Agents',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
