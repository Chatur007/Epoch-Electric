'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout>
      <section className="mx-auto max-w-6xl px-6 py-20 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Contact Epoch Electric</h1>
          <div className="glass rounded-xl p-5">
            <h2 className="font-semibold">Office Locations</h2>
            <p className="mt-2 text-slate-300">Corporate Office: Millennium Business Park, Mahape, Navi Mumbai</p>
            <p className="mt-1 text-slate-300">Works 1: Turbhe Industrial Park, Navi Mumbai</p>
            <p className="mt-1 text-slate-300">Works 2: TTC Industrial Area, Rabale</p>
          </div>
          <div className="glass rounded-xl p-5">
            <h2 className="font-semibold">Contact Info</h2>
            <p className="mt-2 text-slate-300">Phone: +91 22 4000 1234</p>
            <p className="text-slate-300">Email: info@epochelectric.in</p>
            <p className="text-slate-300">Key Contacts: Business Head, Projects Head, Service Lead</p>
          </div>
        </div>

        <form
          className="glass rounded-xl p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2800);
          }}
        >
          <h2 className="text-2xl font-semibold">Send an Enquiry</h2>
          <div className="mt-4 grid gap-3">
            {['Name', 'Company', 'Email', 'Phone', 'Service Required'].map((field) => (
              <input key={field} placeholder={field} className="rounded-md border border-white/15 bg-transparent px-4 py-2 transition focus:border-electric focus:outline-none" required />
            ))}
            <textarea placeholder="Message" rows={4} className="rounded-md border border-white/15 bg-transparent px-4 py-2 transition focus:border-electric focus:outline-none" required />
            <button className="rounded-md bg-electric px-5 py-2 font-semibold text-white">Submit</button>
            {submitted && <p className="animate-pulse text-sm text-emerald-400">Message sent successfully. Our team will contact you shortly.</p>}
          </div>
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="Epoch Electric location map"
            src="https://maps.google.com/maps?q=Millennium%20Business%20Park%20Mahape%20Navi%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </PageLayout>
  );
}
