'use client';

export default function MapEmbed() {
  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md border border-white/10 mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114571.88188956086!2d-80.28548630273438!3d26.184597000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d903d085619cdf%3A0xf993f67df3222ad7!2sFlorida%20Air%20Service!5e0!3m2!1sen!2sus!4v1775692977042!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Florida Air Services Location"
      ></iframe>
    </div>
  );
}
