export const metadata = {
  title: 'Trading Activities | Sonke Capital',
};

export default function TradingPage() {
  return (
    <main className="py-28 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Trading Activities</h1>
      <ul className="list-disc ml-6 space-y-3 text-lg">
        <li>Forex & CFDs</li>
        <li>Synthetic Indices</li>
        <li>Commodities</li>
        <li>Risk-managed proprietary strategies</li>
      </ul>
    </main>
  );
}
