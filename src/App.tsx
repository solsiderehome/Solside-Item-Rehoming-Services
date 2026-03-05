/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Menu, 
  Truck, 
  Tag, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  ChevronRight,
  X,
  Image as ImageIcon,
  Upload
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 border-b border-slate-100">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center">
        <img 
          src="https://i.imgur.com/096i4IS.png" 
          alt="Solside Logo" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="font-sans font-bold text-lg tracking-tight">Solside Item Rehoming Services</span>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-8">
      <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">Home</a>
      <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">How It Works</a>
      <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">Pricing</a>
      <a href="#submit" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">Submit Items</a>
      <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">Contact</a>
    </div>

    {/* Mobile Menu Button */}
    <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
      <Menu size={24} />
    </button>
  </nav>
);

const Hero = () => (
  <section id="home" className="px-6 py-12 max-w-4xl mx-auto scroll-mt-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-8"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f5f4] text-[#4eb7ac] rounded-full text-xs font-bold tracking-wider uppercase w-fit">
        <span className="w-1.5 h-1.5 bg-[#4eb7ac] rounded-full animate-pulse" />
        Local & Trusted
      </div>

      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10">
        <img 
          src="https://i.imgur.com/PyTg1es.png" 
          alt="Close up of hands packing ceramic bowls into a box with brown paper" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-[#4eb7ac] font-bold text-xs tracking-[0.2em] uppercase">
          Simplified Decluttering
        </span>
        <h1 className="text-4xl md:text-5xl leading-tight">
          Selective Free Transfer & Pickup
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Rehome your quality items effortlessly. We offer free pickup for pre-approved items that can be safely carried by a single person.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand/20 transition-all flex items-center justify-center gap-2 group">
          Schedule an Assessment
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#how-it-works" className="border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
          Learn More
        </a>
      </div>
    </motion.div>
  </section>
);

const Services = () => (
  <section id="how-it-works" className="px-6 py-20 bg-slate-50 scroll-mt-20">
    <div className="max-w-4xl mx-auto flex flex-col gap-12">
      <div className="text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl">Our Services</h2>
        <div className="w-12 h-1 bg-brand rounded-full" />
      </div>

      <div className="grid gap-8">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col gap-6"
        >
          <div className="w-14 h-14 bg-emerald-50 text-brand rounded-2xl flex items-center justify-center">
            <Truck size={28} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl">Selective Free Transfer & Pickup</h3>
            <p className="text-slate-600 leading-relaxed">
              Pre-approved items collected at no cost and responsibly rehomed. Ideal for quality goods you want to clear out without the hassle.
            </p>
            <p className="text-brand font-medium">
              Note: Must be a one-person carry. No heavy furniture or large appliances.
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col gap-6"
        >
          <div className="w-14 h-14 bg-emerald-50 text-brand rounded-2xl flex items-center justify-center">
            <Tag size={28} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl">Consignment Service</h3>
            <p className="text-slate-600 leading-relaxed">
              Looking to sell? We offer full management of your high-value items including professional photography, multi-channel listing, and secure sales handling.
            </p>
            <p className="text-brand font-medium">
              Earn a percentage of the final proceeds without lifting a finger.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="bg-brand/5 rounded-[2.5rem] p-8 md:p-10 border border-brand/10 flex flex-col gap-4 text-center">
        <h3 className="text-xl font-bold text-brand-dark">Not sure which items to sell?</h3>
        <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Items that are clean, in good condition, and valued around <span className="font-bold text-slate-800">$40 or more</span> are a great fit for consignment. Everything else can often be accepted through free pickup. Send a few photos, and we'll help you quickly sort what works best.
        </p>
      </div>
    </div>
  </section>
);

const WhatWeAccept = () => (
  <section id="submit" className="px-6 py-20 scroll-mt-20">
    <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-8 md:p-12 flex flex-col gap-12">
      <h2 className="text-3xl text-center">What We Accept</h2>
      
      <div className="grid gap-8">
        <div className="flex gap-4">
          <div className="shrink-0 text-brand mt-1">
            <CheckCircle2 size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl">One-Person Carry Rule</h4>
            <p className="text-slate-600">
              Items must be small enough or light enough to be safely carried by one person from your home to our vehicle.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="shrink-0 text-rose-400 mt-1">
            <XCircle size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl">Exclusions</h4>
            <p className="text-slate-600">
              Due to safety and logistics, we cannot accept heavy furniture (sofas, wardrobes), large appliances, or hazardous materials.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="aspect-square rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop" 
            alt="Rack of clothes" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="aspect-square rounded-3xl overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5602433/pexels-photo-5602433.jpeg?q=80&w=2070&auto=format&fit=crop" 
            alt="Pile of jewelry" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="aspect-square rounded-3xl overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/8903727/pexels-photo-8903727.jpeg" 
            alt="Plates and kitchenware" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => (
  <footer className="px-6 py-16 flex flex-col items-center gap-12 border-t border-slate-100">
    <div className="flex flex-col items-center gap-8 text-center max-w-lg">
      <h2 className="text-3xl">Ready to clear your space?</h2>
      <p className="text-slate-600 text-lg">Let's find your items a new home.</p>
      <a href="#contact" className="bg-brand hover:bg-brand-dark text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-brand/30 transition-all">
        Schedule an Assessment
      </a>
      <p className="text-slate-400 text-sm font-medium">
        Fast assessment • No hidden fees • Eco-friendly rehoming
      </p>
    </div>

    <div className="w-full max-w-4xl flex flex-col items-center gap-8 pt-12">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center">
          <img 
            src="https://i.imgur.com/096i4IS.png" 
            alt="Solside Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-sans font-bold text-slate-800">Solside Item Rehoming Services</span>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
        <button onClick={() => onOpenModal('privacy')} className="hover:text-brand transition-colors">Privacy Policy</button>
        <button onClick={() => onOpenModal('terms')} className="hover:text-brand transition-colors">Terms of Service</button>
        <button onClick={() => onOpenModal('faq')} className="hover:text-brand transition-colors">FAQ</button>
      </div>

      <p className="text-slate-400 text-xs">
        © 2026 Solside Item Rehoming Services. All rights reserved.
      </p>
    </div>
  </footer>
);

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Pricing = () => (
  <section id="pricing" className="px-6 py-20 bg-slate-50 scroll-mt-20">
    <div className="max-w-4xl mx-auto flex flex-col gap-12">
      <div className="text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl">Pricing</h2>
        <div className="w-12 h-1 bg-brand rounded-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col gap-4">
          <h3 className="text-2xl">Selective Free Transfer and Pickup</h3>
          <p className="text-slate-600">For pre-approved items that can be safely carried by one person. No hidden fees, just simple rehoming.</p>
          <div className="text-3xl font-bold text-brand">Free</div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col gap-4">
          <h3 className="text-2xl">Consignment</h3>
          <p className="text-slate-600">Full management of high-value items. We handle everything from listing to shipping.</p>
          <div className="text-lg font-bold text-brand">Commission: 25% of the final sale price</div>
          <p className="text-sm text-slate-400 italic">All details are explained clearly before we begin.</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="px-6 py-20 scroll-mt-20">
    <div className="max-w-4xl mx-auto flex flex-col gap-12">
      <div className="text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl">Contact Us</h2>
        <div className="w-12 h-1 bg-brand rounded-full" />
      </div>
      <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] flex flex-col md:flex-row gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-2xl">Get in Touch</h3>
          <p className="text-slate-600">Have questions about an item? We're here to help you clear your space responsibly.</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Truck size={20} className="text-brand" />
              </div>
              <span>Local Pickup Area: Los Angeles County and Orange County</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              
              const button = form.querySelector('button');
              if (button) button.disabled = true;
              
              try {
                const response = await fetch('https://formspree.io/f/meerjjoe', {
                  method: 'POST',
                  body: formData,
                  headers: {
                    'Accept': 'application/json'
                  }
                });
                
                if (response.ok) {
                  alert('Thank you! Your message has been sent.');
                  form.reset();
                } else {
                  alert('Oops! There was a problem sending your message. Please try again.');
                }
              } catch (error) {
                alert('Oops! There was a problem sending your message. Please try again.');
              } finally {
                if (button) button.disabled = false;
              }
            }}
            className="flex flex-col gap-4"
          >
            <input 
              name="Name"
              type="text" 
              placeholder="Your Name" 
              required
              className="px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                name="Email"
                type="email" 
                placeholder="Your Email" 
                required
                className="px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
              />
              <input 
                name="Phone"
                type="tel" 
                placeholder="Phone (Optional)" 
                className="px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
              />
            </div>
            <textarea 
              name="Message"
              placeholder="How can we help?" 
              rows={4} 
              required
              className="px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none"
            ></textarea>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-500 ml-2">Upload Images (Optional)</label>
              <div className="relative group">
                <input 
                  name="Images"
                  type="file" 
                  multiple 
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="px-6 py-4 rounded-2xl border-2 border-dashed border-slate-200 group-hover:border-brand/50 transition-all flex items-center justify-center gap-3 bg-white">
                  <Upload size={20} className="text-slate-400 group-hover:text-brand transition-colors" />
                  <span className="text-slate-500 group-hover:text-slate-700">Click or drag images to upload</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 ml-2">Max 10MB per image. Formspree may limit total upload size.</p>
            </div>

            <button 
              type="submit"
              className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent: Record<string, { title: string; content: React.ReactNode }> = {
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="flex flex-col gap-4">
          <p>At Solside Item Rehoming Services, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
          <h4 className="font-bold text-slate-800">Information We Collect</h4>
          <p>We collect information you provide directly to us, such as your name, email address, phone, and address when you schedule an assessment or contact us.</p>
          <h4 className="font-bold text-slate-800">How We Use Your Information</h4>
          <p>We use the information we collect to provide our services, communicate with you about your assessments, and improve our operations.</p>
          <h4 className="font-bold text-slate-800">Data Security</h4>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure.</p>
        </div>
      )
    },
    terms: {
      title: 'Terms of Service',
      content: (
        <div className="flex flex-col gap-4">
          <p>By using our services, you agree to the following terms and conditions.</p>
          <h4 className="font-bold text-slate-800">Service Description</h4>
          <p>Solside Item Rehoming Services provides selective free transfer and pickup for pre-approved quality items. We reserve the right to decline items that do not meet our quality standards or safety requirements.</p>
          <h4 className="font-bold text-slate-800">Item Approval</h4>
          <p>All items must be pre-approved through our assessment process. Items must be in good, rehomeable condition and safely manageable by a single person.</p>
          <h4 className="font-bold text-slate-800">Liability</h4>
          <p>While we take every precaution during pickup, Solside is not liable for minor incidental damage to property during the removal process of approved items.</p>
        </div>
      )
    },
    faq: {
      title: 'Frequently Asked Questions',
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-bold text-slate-800 mb-2">What does “rehoming” mean?</h4>
            <p>Rehoming means helping your items find a new place where they are wanted and appreciated. Rather than sending them to a landfill, we connect them with someone who can continue using and enjoying them.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">What kinds of items can you help with?</h4>
            <p>I work with everyday household items in good, clean condition. This includes décor, kitchenware, small appliances, clothing, toys, and small furniture. If you are unsure about something, you are always welcome to send a photo and ask.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Do you offer pickup?</h4>
            <p>Yes. I can pick up small to medium sized items. For heavier furniture or large pieces, I can photograph the item, create the listing, communicate with interested parties, and coordinate pickup with the new owner. You do not have to manage the messages or scheduling.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">How does payment work?</h4>
            <p>For Consignment Service items, you retain ownership and receive a percentage once the item sells. I earn a commission for handling the sale.</p>
            <p className="mt-2">Selective Free Transfer and Pickup is offered at no cost. Once items are picked up, they become my responsibility to rehome appropriately.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">How long does the process take?</h4>
            <p>Some items find a new home within a few days. Others may take a few weeks. If interest is low, we can adjust the price or explore donation or free pickup options.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">What condition should items be in?</h4>
            <p>Items should be clean and in good working order. If an item doesn’t work for this service, I’ll let you know and share some options.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand/20 selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Pricing />
        <WhatWeAccept />
        <Contact />
      </main>
      <Footer onOpenModal={setActiveModal} />

      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        title={activeModal ? modalContent[activeModal].title : ''}
      >
        {activeModal && modalContent[activeModal].content}
      </Modal>
    </div>
  );
}
