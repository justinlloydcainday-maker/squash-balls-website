import { useState, FormEvent } from 'react';
import { Mail, MapPin, Facebook, Phone, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Have questions about Squash Cheesy Balls, bulk campus orders, or our Elective 211 business project? Reach out to our student team anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Campus Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#fffdf7] border-2 border-amber-200/80 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-stone-900 font-heading">
                Campus Location & Operations
              </h3>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">Selling Location:</strong>
                  <span>Eastern Samar State University (ESSU) Main Campus</span>
                  <p className="text-stone-500 text-xs">Brgy. Maypangdan, Borongan City, Eastern Samar, Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">Operating Schedule:</strong>
                  <span>Tuesdays & Thursdays (During school breaks)</span>
                  <p className="text-stone-500 text-xs">Subject to campus schedule and batch availability</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">IT & Web Support:</strong>
                  <span>Lira, Cherrylou D. (IT & Website Manager)</span>
                  <p className="text-stone-500 text-xs">BCSC-2A, College of Computer Studies</p>
                </div>
              </div>
            </div>

            {/* Direct Facebook Messenger Box */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Facebook className="w-6 h-6 fill-white" />
                <h4 className="font-bold text-base font-heading">Facebook Messenger</h4>
              </div>
              <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                Connect directly with our team on Facebook to check fresh batch availability or request custom order pickups on campus.
              </p>
              <a
                href={BUSINESS_INFO.facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-50 transition-colors"
              >
                <span>Visit Facebook Page</span>
              </a>
            </div>

          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-7 bg-[#fffdf8] border-2 border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
            <h3 className="text-xl font-bold text-stone-900 font-heading mb-1">
              Send an Inquiry or Feedback
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              We welcome customer feedback, feedback from our instructors, and fellow ESSU students!
            </p>

            {sent ? (
              <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950 font-heading">
                  Thank You for Your Message!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Your message has been recorded for the Squash Cheesy Balls student management team. We appreciate your support for BCSC-2A!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alexis Oliver Caraga"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Email Address or Phone Number
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. student@essu.edu.ph"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Message / Feedback / Campus Inquiries
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your suggestions, questions about our recipe, or pre-order notes..."
                    className="w-full text-xs p-3.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-500 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Send Message to Team</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
