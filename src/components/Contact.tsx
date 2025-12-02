import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
              <a href="https://www.linkedin.com/in/emmanuel-mbewe-5123b5318" className="social-link">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Emmanuel0017" className="social-link">
                <FaGithub />
              </a>
              {/* <a href="#" className="social-link">
                <FaTwitter />
              </a> */}
              <a href="https://wa.me/265999920096?text=Hello%20Emmanuel%20I%20am%20contacting%20you%20from%20your%20portifolio" className="social-link">
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
              ></textarea>
              {errors.message && <div className="text-secondary text-sm mt-1">{errors.message}</div>}
            </div>
            
            <button type="submit" className="btn w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;