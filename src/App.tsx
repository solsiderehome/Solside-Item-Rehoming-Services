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
  <section id="home" className="px-6 py-16 md:py-24 bg-gradient-to-b from-brand/5 to-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-sm font-bold w-fit">
          <CheckCircle2 size={16} />
          <span>Trusted Local Rehoming</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
          Effortless rehoming for your <span className="text-brand">quality items.</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
          Simplified decluttering with selective free transfer and pickup. We help your pre-loved items find their next home responsibly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#submit" className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand/20 transition-all flex items-center justify-center gap-2 group">
            Submit Items <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how-it-works" className="bg-white border border-slate-200 hover:border-brand text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
            Learn More
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 bg-slate-200">
          <img 
            src="https://picsum.photos/seed/interior/800/800" 
            alt="Beautifully organized home" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 -rotate-3 border border-slate-100">
          <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
            <Truck className="text-brand" />
          </div>
          <div>
            <div className="font-bold text-slate-900">Free Pickup</div>
            <div className="text-sm text-slate-500">For approved items</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="px-6 py-20 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col gap-16">
      <div className="text-center flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold text-slate-900">How It Works</h2>
        <p className="text-slate-600 max-w-2xl">Three simple steps to rehome your items and clear your space.</p>
        <div className="w-20 h-1 bg-brand rounded-full" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            step: "01",
            title: "Submit Photos",
            desc: "Send us clear photos of the items you'd like to rehome through our simple submission form."
          },
          {
            step: "02",
            title: "Quick Assessment",
            desc: "We review your items for quality and rehomeability, then get back to you with a plan."
          },
          {
            step: "03",
            title: "Easy Pickup",
            desc: "Once approved, we coordinate a convenient time for free pickup or transfer."
          }
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-brand/5 transition-all group">
            <div className="text-5xl font-bold text-brand/20 group-hover:text-brand/40 transition-colors">{item.step}</div>
            <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
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

const Pricing = () => (
  <section id="pricing" className="px-6 py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto flex flex-col gap-16">
      <div className="text-center flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
        <p className="text-slate-600 max-w-2xl">Transparent options for every item in your home.</p>
        <div className="w-20 h-1 bg-brand rounded-full" />
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

const Footer = ({ onOpenModal }: { onOpenModal: (type: string) => void }) => (
  <footer className="bg-white border-t border-slate-100 px-6 py-12">
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
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
      </div>

      <p className="text-slate-400 text-xs">
        © 2026 Solside Item Rehoming Services. All rights reserved.
      </p>
    </div>
  </footer>
);

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
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
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        >
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={20} className="text-slate-500" />
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

const Contact = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
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
                setIsSubmitting(true);
                // 1. Upload images to Cloudinary first if there are any
                const imageUrls: string[] = [];
                const cloudName = (import.meta as any).env.VITE_CLOUDINARY_CLOUD_NAME;
                const uploadPreset = (import.meta as any).env.VITE_CLOUDINARY_UPLOAD_PRESET;

                if (files.length > 0 && cloudName && uploadPreset) {
                  for (const file of files) {
                    const uploadData = new FormData();
                    uploadData.append('file', file);
                    uploadData.append('upload_preset', uploadPreset);

                    try {
                      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                        method: 'POST',
                        body: uploadData,
                      });
                      const uploadJson = await uploadRes.json();
                      if (uploadJson.secure_url) {
                        imageUrls.push(uploadJson.secure_url);
                      }
                    } catch (err) {
                      console.error('Cloudinary upload error:', err);
                    }
                  }
                }

                // 2. Prepare Formspree data
                const form = e.currentTarget;
                const formData = new FormData(form);
                
                // Remove the raw files from the form data so Formspree doesn't reject them
                formData.delete('Images');
                
                // Add the Cloudinary links as a text field
                if (imageUrls.length > 0) {
                  formData.append('Image Links', imageUrls.join('\n'));
                }

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
                    setFiles([]);
                  } else {
                    const errorData = await response.json();
                    if (errorData.errors) {
                      alert(errorData.errors.map((e: any) => e.message).join(', '));
                    } else {
                      alert('Oops! There was a problem sending your message. Please try again.');
                    }
                  }
                } catch (error) {
                  alert('Oops! There was a problem sending your message. Please try again.');
                } finally {
                  setIsSubmitting(false);
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
                    type="file" 
                    multiple 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="px-6 py-4 rounded-2xl border-2 border-dashed border-slate-200 group-hover:border-brand/50 transition-all flex items-center justify-center gap-3 bg-white">
                    <Upload size={20} className="text-slate-400 group-hover:text-brand transition-colors" />
                    <span className="text-slate-500 group-hover:text-slate-700">Click or drag images to upload</span>
                  </div>
                </div>

                {/* File List Preview */}
                {files.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {files.map((file, index) => (
                      <div key={index} className="relative group/file bg-white border border-slate-200 rounded-xl p-2 flex items-center gap-2 pr-8">
                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <ImageIcon size={16} className="text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-600 truncate max-w-[100px]">{file.name}</span>
                        <button 
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <p className="text-[10px] text-slate-400 ml-2">
                  Max 10MB per image. Images are securely uploaded via Cloudinary.
                </p>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent: Record<string, { title: string, content: React.ReactNode }> = {
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="flex flex-col gap-4">
          <p>At Solside Item Rehoming Services, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
          <h4 className="font-bold text-slate-800">Information We Collect</h4>
          <p>We collect information you provide directly to us, such as your name, email address, phone, and address when you schedule an assessment or contact us.</p>
          <h4 className="font-bold text-slate-800">How We Use Your Information</h4>
          <p>We use your information to provide our services, communicate with you about your items, and coordinate pickups. We do not sell your personal information to third parties.</p>
          <h4 className="font-bold text-slate-800">Data Security</h4>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access or disclosure.</p>
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
          <p>While we take great care during pickups, we are not liable for any minor damage to property that may occur during the removal of items. Owners are responsible for ensuring a clear path for item removal.</p>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand/20">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      
      {/* Item Submission Section */}
      <section id="submit" className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold">Submit Your Items</h2>
            <p className="text-slate-600">Ready to clear your space? Send us a few details and photos to get started.</p>
            <div className="w-20 h-1 bg-brand rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand/5 p-8 rounded-[2.5rem] border border-brand/10 flex flex-col gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <ImageIcon className="text-brand" />
              </div>
              <h3 className="text-2xl font-bold">What to include in photos:</h3>
              <ul className="flex flex-col gap-4">
                {[
                  "Clear, well-lit shots of the full item",
                  "Close-ups of any wear or unique details",
                  "Photos of brand labels or markings",
                  "Multiple angles for larger furniture"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-1" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white flex flex-col gap-6 justify-center">
              <h3 className="text-2xl font-bold">Ready to start?</h3>
              <p className="text-slate-400 leading-relaxed">
                Use the contact form below to send your photos and item descriptions. We typically respond within 24-48 hours with an assessment.
              </p>
              <div className="flex items-center gap-2 text-brand font-bold">
                <span>Scroll to form</span>
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer onOpenModal={setActiveModal} />

      <Modal 
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)}
        title={activeModal ? modalContent[activeModal].title : ''}
      >
        {activeModal ? modalContent[activeModal].content : null}
      </Modal>
    </div>
  );
}
