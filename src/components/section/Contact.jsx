import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import FadeIn from "../animations/FadeIn";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constant";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setStatus("sending");

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      reset();

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      console.error(error);

      setStatus("error");

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-330 mx-auto px-5 relative z-10">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm">
              <MessageSquare size={16} />
              Contact Me
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Let's Build Something{" "}
              <span className="text-primary">Amazing</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-gray-400">
              Have a project idea, freelance opportunity, or collaboration in
              mind? Feel free to reach out.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Contact Info */}
          <FadeIn>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>

              <p className="text-gray-400 mb-8">
                I'm always interested in discussing new projects, creative
                ideas, or opportunities.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-black/20">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-medium mb-1">Email</h4>

                    <a
                      href={`mailto:${PERSONAL_INFO?.email || ""}`}
                      className="text-gray-400 hover:text-primary transition-colors break-all"
                    >
                      {PERSONAL_INFO?.email || "your@email.com"}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-black/20">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Location</h4>

                    <p className="text-gray-400">
                      {PERSONAL_INFO?.location || "Bangladesh"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect With Me</h4>

                <div className="flex gap-4">
                  {SOCIAL_LINKS?.github && (
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}

                  {SOCIAL_LINKS?.linkedin && (
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-8">Send Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-primary transition-all"
                  />

                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-primary transition-all"
                  />

                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/20 outline-none focus:border-primary transition-all"
                  />

                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/20 outline-none resize-none focus:border-primary transition-all"
                  />

                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                {status === "success" && (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
                    Message sent successfully 🚀
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || status === "sending"}
                  className="w-full py-4 rounded-xl bg-primary text-black font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}

                  <Send size={18} />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
