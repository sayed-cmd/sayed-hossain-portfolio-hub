
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/components/ui/sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace these with your actual EmailJS service, template and user IDs
      const serviceId = "service_2vsty3m";
      const templateId = "template_wo6f1xq";
      const publicKey = "Mg1KF6JcBIwW1bGtx";
      
      // Send the email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      
      console.log('Email sent successfully:', result);
      
      // Show success message
      setSubmitStatus('success');
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      toast({
        title: "Message Failed",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container">
        <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">Get In Touch</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss how I can help your business optimize operations?
          Feel free to reach out and I'll get back to you soon.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-white rounded-lg p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail />}
                  title="Email"
                  content="saiedhossain76@gmail.com"
                  href="mailto:saiedhossain76@gmail.com"
                />
                
                <ContactInfo 
                  icon={<Phone />}
                  title="Phone"
                  content="+8801738-011330"
                  href="tel:+8801738-011330"
                />
                
                <ContactInfo 
                  icon={<MapPin />}
                  title="Location"
                  content="Dhaka, Bangladesh"
                  href="#"
                />
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-2">Business Hours:</h4>
                <p>Saturday - Thursday: 9 AM - 5 PM </p>
                <p>Weekend: By appointment</p>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-md">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg">
                  Thank you for your message! I'll respond as soon as possible.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="mailid@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message here..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content, href }: { icon: React.ReactNode; title: string; content: string; href: string }) => (
  <div className="flex items-start">
    <div className="mr-4 bg-white/10 p-2 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <a href={href} className="hover:underline">
        {content}
      </a>
    </div>
  </div>
);

export default ContactSection;
