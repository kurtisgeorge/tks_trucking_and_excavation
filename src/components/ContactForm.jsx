export default function ContactForm() {
  return (
    <div className="w-full bg-white">
      <form
        className="flex flex-col gap-8"
        action="https://formspree.io/f/REPLACE_WITH_FORM_ID"
        method="POST"
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col items-start text-left">
            <label className="text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest pl-1">First name</label>
            <input type="text" name="firstName" className="w-full p-4 bg-white border-2 border-brand-dark/20 rounded-lg focus:outline-none focus:border-brand-primary transition-colors text-brand-dark font-medium" />
          </div>
          <div className="w-full flex flex-col items-start text-left">
            <label className="text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest pl-1">Last name</label>
            <input type="text" name="lastName" className="w-full p-4 bg-white border-2 border-brand-dark/20 rounded-lg focus:outline-none focus:border-brand-primary transition-colors text-brand-dark font-medium" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col items-start text-left">
            <label className="text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest pl-1">Email</label>
            <input type="email" name="email" className="w-full p-4 bg-white border-2 border-brand-dark/20 rounded-lg focus:outline-none focus:border-brand-primary transition-colors text-brand-dark font-medium" />
          </div>
          <div className="w-full flex flex-col items-start text-left">
            <label className="text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest pl-1">Phone number</label>
            <input type="tel" name="phone" className="w-full p-4 bg-white border-2 border-brand-dark/20 rounded-lg focus:outline-none focus:border-brand-primary transition-colors text-brand-dark font-medium" />
          </div>
        </div>
        
        <div className="w-full flex flex-col items-start text-left">
          <label className="text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest pl-1">What is your inquiry?</label>
          <input type="text" name="inquiryType" className="w-full p-4 bg-white border-2 border-brand-dark/20 rounded-lg focus:outline-none focus:border-brand-primary transition-colors text-brand-dark font-medium" />
        </div>

        <div className="w-full flex flex-col items-start text-left">
          <label className="text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest pl-1">Message</label>
          <textarea rows="5" name="message" className="w-full p-4 bg-white border-2 border-brand-dark/20 rounded-lg focus:outline-none focus:border-brand-primary transition-colors text-brand-dark resize-none font-medium"></textarea>
        </div>
        
        <div className="flex items-center gap-3 pt-2">
          <input type="checkbox" id="privacy" name="privacyAccepted" className="w-5 h-5 accent-brand-primary border-2 border-brand-dark rounded-sm cursor-pointer" />
          <label htmlFor="privacy" className="text-[15px] text-brand-dark font-bold cursor-pointer select-none">I agree to the privacy policy</label>
        </div>
        
        <button type="submit" className="bg-brand-primary text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg hover:-translate-y-1 shadow-lg transition-transform w-full md:w-auto self-start text-base md:text-[17px] mt-4">
          Submit inquiry
        </button>
      </form>
    </div>
  );
}
