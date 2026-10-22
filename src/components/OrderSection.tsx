import { useState } from 'react';
import { ShoppingBag, Copy, Check, CheckCircle2, MessageSquare, Facebook } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/businessData';

export default function OrderSection() {
  const [quantity, setQuantity] = useState<number>(3);
  const [selectedDip, setSelectedDip] = useState<string>('Garlic Mayo');
  const [pickupDay, setPickupDay] = useState<'Tuesday' | 'Thursday'>('Tuesday');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerContact, setCustomerContact] = useState<string>('');
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const totalPrice = quantity * BUSINESS_INFO.pricePerPiece;

  const orderSlip = `🍢 SQUASH CHEESY BALLS PRE-ORDER
Name: ${customerName || 'Walk-in Student'}
Contact/Room: ${customerContact || 'ESSU Borongan Campus'}
Quantity: ${quantity} pcs (₱10/pc)
Dip: ${selectedDip}
Pickup Day: ${pickupDay} (Maypangdan Campus)
Total: ₱${totalPrice.toFixed(2)}`;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback if canvas not available
    }
    setOrderPlaced(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(orderSlip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="order" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
            Campus Orders
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight font-heading mt-1">
            Pre-Order for Campus Pickup
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Freshly fried upon reservation every Tuesday and Thursday at ESSU Main Campus.
          </p>
        </div>

        {orderPlaced ? (
          <div className="border border-emerald-200 bg-emerald-50/40 p-8 rounded-2xl text-center space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg font-heading">
                Order Slip Created!
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Your reservation for <strong>{quantity} pieces (₱{totalPrice.toFixed(2)})</strong> has been generated for {pickupDay}.
              </p>
            </div>

            <div className="bg-white border border-stone-200 p-3.5 rounded-xl text-left text-xs font-mono text-stone-800 whitespace-pre-line">
              {orderSlip}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Order Text'}</span>
              </button>

              <a
                href={BUSINESS_INFO.facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Message on Facebook</span>
              </a>
            </div>

            <button
              onClick={() => setOrderPlaced(false)}
              className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto cursor-pointer"
            >
              Place another order
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmitOrder}
            className="border border-stone-200 bg-[#fffefd] p-6 sm:p-8 rounded-2xl shadow-xs space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Full Name / Student Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Santos"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Contact No. / Room / College
                </label>
                <input
                  type="text"
                  placeholder="e.g. CCS Bldg / 0912 345 6789"
                  value={customerContact}
                  onChange={(e) => setCustomerContact(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                Quantity (₱10.00 / piece)
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 5, 10].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setQuantity(qty)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                      quantity === qty
                        ? 'bg-amber-400 border-amber-500 text-stone-900'
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {qty} pc{qty > 1 ? 's' : ''} (₱{qty * 10})
                  </button>
                ))}
              </div>
            </div>

            {/* Dip & Day */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Choice of Dip
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Garlic Mayo', 'Sweet Ketchup', 'Spicy Chili'].map((dip) => (
                    <button
                      key={dip}
                      type="button"
                      onClick={() => setSelectedDip(dip)}
                      className={`py-2 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer text-center ${
                        selectedDip === dip
                          ? 'bg-stone-900 border-stone-900 text-white'
                          : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {dip}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Pickup Day (Selling Schedule)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Tuesday', 'Thursday'] as const).map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setPickupDay(day)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer text-center ${
                        pickupDay === day
                          ? 'bg-amber-500 border-amber-600 text-stone-950 font-bold'
                          : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm py-3 px-6 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Confirm Reservation · ₱{totalPrice.toFixed(2)}</span>
              </button>
              <p className="text-[11px] text-stone-400 text-center mt-2">
                Pay upon pickup at ESSU Main Campus food kiosk or break area.
              </p>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
