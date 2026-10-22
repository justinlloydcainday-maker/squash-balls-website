import { useState } from 'react';
import { ShoppingBag, Facebook, Copy, Check, Sparkles, MapPin, Calendar, Clock, Receipt, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/businessData';

export default function OrderSection() {
  const [quantity, setQuantity] = useState<number>(3);
  const [selectedDip, setSelectedDip] = useState<string>('Mayo-Ketchup Swirl');
  const [servingStyle, setServingStyle] = useState<'cups' | 'drizzled'>('cups');
  const [pickupDay, setPickupDay] = useState<'Tuesday' | 'Thursday'>('Tuesday');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerSection, setCustomerSection] = useState<string>('');
  const [customerContact, setCustomerContact] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  const totalPrice = quantity * BUSINESS_INFO.pricePerPiece;

  const orderSummaryText = `🍢 SQUASH CHEESY BALLS ORDER SLIP
──────────────────────────────
• Customer: ${customerName || 'Walk-in Student/Customer'}
• Dept / Year: ${customerSection || 'ESSU Borongan Campus'}
• Contact: ${customerContact || 'N/A'}
• Quantity: ${quantity} pcs (@ ₱10/pc)
• Selected Dip: ${selectedDip}
• Serving Style: ${servingStyle === 'cups' ? 'Dip on the side (cup)' : 'Drizzled on top'}
• Pickup Day: ${pickupDay} (ESSU Main Campus, Maypangdan)
──────────────────────────────
TOTAL AMOUNT: ₱${totalPrice.toFixed(2)}
"Crispy outside, Cheesy inside!"`;

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFacebookOrder = () => {
    // Copy the order details to clipboard for convenience
    navigator.clipboard.writeText(orderSummaryText);
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setOrderPlaced(true);

    // Open the Facebook page in new tab
    window.open(BUSINESS_INFO.facebookShareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-b from-white to-[#fffbf2] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            Pre-Order & Campus Reserve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Order Now
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Ready to try Squash Cheesy Balls? Configure your order below, generate your order slip, and confirm with us via our Facebook page or on-campus pick-up.
          </p>
        </div>

        {/* Order Builder & Live Receipt Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border-2 border-amber-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Order Customizer Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              
              {/* Quantity Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  1. Select Quantity (₱10.00 each)
                </label>
                
                {/* Preset Chips */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[1, 3, 5, 10].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        quantity === qty
                          ? 'bg-amber-500 text-stone-950 shadow-sm'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {qty} {qty === 1 ? 'pc' : 'pcs'}
                    </button>
                  ))}
                </div>

                {/* Custom Counter */}
                <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-2xl p-2 px-4">
                  <span className="text-xs text-stone-600 font-medium">Custom Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-300 font-bold text-stone-700 hover:bg-stone-100 flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-black text-stone-900 font-heading text-lg">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-300 font-bold text-stone-700 hover:bg-stone-100 flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Dipping Sauce Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  2. Choose Complimentary Dipping Sauce
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Mayo-Ketchup Swirl',
                    'Classic Garlic Mayo',
                    'Sweet Chili Ketchup',
                    'Cheese Powder Dusting',
                  ].map((dip) => (
                    <button
                      key={dip}
                      type="button"
                      onClick={() => setSelectedDip(dip)}
                      className={`p-3 rounded-xl border text-left font-semibold transition-all cursor-pointer ${
                        selectedDip === dip
                          ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold shadow-2xs'
                          : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {dip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Serving Style */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  3. Serving Style
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setServingStyle('cups')}
                    className={`p-3 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                      servingStyle === 'cups'
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                        : 'bg-stone-50 border-stone-200 text-stone-700'
                    }`}
                  >
                    Separate Sauce Cup
                  </button>
                  <button
                    type="button"
                    onClick={() => setServingStyle('drizzled')}
                    className={`p-3 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                      servingStyle === 'drizzled'
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                        : 'bg-stone-50 border-stone-200 text-stone-700'
                    }`}
                  >
                    Drizzled Over Balls
                  </button>
                </div>
              </div>

              {/* Pickup Day */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  4. Selling Day & Pickup
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPickupDay('Tuesday')}
                    className={`p-3 rounded-xl border text-center font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      pickupDay === 'Tuesday'
                        ? 'bg-stone-900 text-white border-stone-900 font-bold'
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Every Tuesday</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPickupDay('Thursday')}
                    className={`p-3 rounded-xl border text-center font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      pickupDay === 'Thursday'
                        ? 'bg-stone-900 text-white border-stone-900 font-bold'
                        : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Every Thursday</span>
                  </button>
                </div>
              </div>

              {/* Optional Contact Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-stone-600 mb-1">
                    Your Name (Student / Faculty / Buyer)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Maria Santos"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 bg-stone-50/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-600 mb-1">
                      Department / Section
                    </label>
                    <input
                      type="text"
                      value={customerSection}
                      onChange={(e) => setCustomerSection(e.target.value)}
                      placeholder="e.g. BCSC-2A / Faculty"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 bg-stone-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-600 mb-1">
                      Contact Number / FB Name
                    </label>
                    <input
                      type="text"
                      value={customerContact}
                      onChange={(e) => setCustomerContact(e.target.value)}
                      placeholder="e.g. 0912-345-6789"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 bg-stone-50/50"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Live Order Slip & Action Buttons */}
            <div className="lg:col-span-5 bg-[#fffdf7] border-t lg:border-t-0 lg:border-l border-amber-200/80 p-6 sm:p-10 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                    <Receipt className="w-4 h-4 text-amber-600" />
                    Live Order Summary
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    Priced @ ₱10/pc
                  </span>
                </div>

                {/* Printable Style Receipt Slip */}
                <div className="bg-white border-2 border-dashed border-amber-300 rounded-2xl p-5 shadow-inner text-xs space-y-3 font-mono">
                  <div className="text-center border-b border-stone-200 pb-2">
                    <p className="font-bold text-stone-900 text-sm font-heading">SQUASH CHEESY BALLS</p>
                    <p className="text-[10px] text-stone-400">ESSU Main Campus • Borongan City</p>
                    <p className="text-[10px] text-amber-700">Crispy outside, Cheesy inside</p>
                  </div>

                  <div className="space-y-1 text-stone-700 text-[11px]">
                    <div className="flex justify-between">
                      <span>Customer:</span>
                      <span className="font-bold text-stone-900 truncate max-w-[130px]">{customerName || 'Walk-in Customer'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pickup Day:</span>
                      <span className="font-bold text-stone-900">{pickupDay}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Selected Dip:</span>
                      <span className="font-bold text-stone-900">{selectedDip}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Style:</span>
                      <span>{servingStyle === 'cups' ? 'Side Cup' : 'Drizzled'}</span>
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-2 flex justify-between items-baseline">
                    <span className="font-sans font-bold text-stone-700 text-xs">
                      {quantity} pcs × ₱10.00
                    </span>
                    <span className="font-sans font-black text-2xl text-stone-900 font-heading">
                      ₱{totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="text-[10px] text-center text-stone-400 pt-1">
                    Thank you for supporting student entrepreneurship!
                  </div>
                </div>

                {/* Pickup Instructions */}
                <div className="mt-4 p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>Pickup Location:</span>
                  </div>
                  <p className="text-[11px] text-stone-600 pl-5">
                    Near College of Computer Studies / Main Building, ESSU Main Campus in Maypangdan, Borongan City.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-6">
                <button
                  type="button"
                  onClick={handleFacebookOrder}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Facebook className="w-4 h-4 fill-white" />
                  <span>ORDER THROUGH FACEBOOK</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyOrder}
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white py-2.5 px-4 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Order Slip Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-300" />
                      <span>Copy Formatted Order Details</span>
                    </>
                  )}
                </button>

                {orderPlaced && (
                  <div className="text-center text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 animate-in fade-in">
                    🎉 Order slip generated! We look forward to serving you at ESSU!
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
