import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
        <div className="container px-4 md:px-0">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-light mb-12 md:mb-16">
              Have questions about our handcrafted collections? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {submitted && (
              <div className="mb-8 p-4 md:p-6 bg-green-50 border border-green-200 rounded-lg animate-slide-down">
                <p className="text-green-800 font-medium">
                  ✓ Thank you for your message! We'll be in touch soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 md:px-6 py-3 md:py-4 border-2 rounded-lg font-light text-base md:text-lg transition-all duration-300 focus:outline-none ${
                    errors.name
                      ? "border-red-300 bg-red-50 focus:border-red-500"
                      : "border-gray-200 bg-gray-50 focus:border-gray-900 focus:bg-white"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 md:px-6 py-3 md:py-4 border-2 rounded-lg font-light text-base md:text-lg transition-all duration-300 focus:outline-none ${
                    errors.email
                      ? "border-red-300 bg-red-50 focus:border-red-500"
                      : "border-gray-200 bg-gray-50 focus:border-gray-900 focus:bg-white"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                  className={`w-full px-4 md:px-6 py-3 md:py-4 border-2 rounded-lg font-light text-base md:text-lg transition-all duration-300 focus:outline-none resize-none ${
                    errors.message
                      ? "border-red-300 bg-red-50 focus:border-red-500"
                      : "border-gray-200 bg-gray-50 focus:border-gray-900 focus:bg-white"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-base md:text-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
                Other Ways to Reach Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Email</h4>
                  <a
                    href="mailto:hashimdar141@gmail.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                  >
                    hashimdar141@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Instagram</h4>
                  <a
                    href="https://instagram.com/poshsaaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                  >
                    @poshsaaz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
