import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace these with your actual EmailJS IDs
  const EMAILJS_SERVICE_ID = 'service_kgb3ahy';
  const EMAILJS_TEMPLATE_ID = 'template_gw89f2l';
  const EMAILJS_PUBLIC_KEY = '7qDA2gln5Kth4zx0_';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'emmanuelmbewe52@gmail.com',
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        alert('Oops! Something went wrong. Please try again or contact me directly.');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
      alert('Oops! Something went wrong. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Chikanda, Zomba</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">emmanuelmbewe52@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+265 999 920 096</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/emmanuel-mbewe-5123b5318" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Emmanuel0017" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://wa.me/265999920096?text=Hello%20Emmanuel%20I%20am%20contacting%20you%20from%20your%20portifolio" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form-control"
                disabled={isSubmitting}
              />
              {errors.name && <div className="text-secondary text-sm mt-1">{errors.name}</div>}
            </div>
            
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="form-control"
                disabled={isSubmitting}
              />
              {errors.email && <div className="text-secondary text-sm mt-1">{errors.email}</div>}
            </div>
            
            <div className="mb-6">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="form-control"
                disabled={isSubmitting}
              />
              {errors.subject && <div className="text-secondary text-sm mt-1">{errors.subject}</div>}
            </div>
            
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="form-control"
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <div className="text-secondary text-sm mt-1">{errors.message}</div>}
            </div>
            
            <button 
              type="submit" 
              className="btn w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-center">
                Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;