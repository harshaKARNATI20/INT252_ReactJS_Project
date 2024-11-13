import React from 'react'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Github, Youtube, Linkedin, Instagram } from 'lucide-react'
import "../styles/contact.css";
import logo from "../assets/images/res-logo.png";


export default function ContactPage() {
    return (
        <div className="bg-pink-50 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="flex items-center justify-center mb-8">
                    <div className="rounded-full p-4">
                        <img
                            src={logo}
                            alt="Tasty Treat Logo"
                            className="h-12 w-12"
                        />
                    </div>
                    <h1 className="text-4xl font-bold ml-4 text-gray-900">Tasty Treat</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Send us a message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" placeholder="Your Message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center">
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-3 text-red-600" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Location:</p>
                                        <p className="text-gray-600">ZindaBazar, Sylhet-3100, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="h-5 w-5 mr-3 text-red-600" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone:</p>
                                        <p className="text-gray-600">01712345678</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="h-5 w-5 mr-3 text-red-600" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Email:</p>
                                        <p className="text-gray-600">example@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Clock className="h-5 w-5 mr-3 text-red-600" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Delivery Time:</p>
                                        <p className="text-gray-600">Sunday - Thursday: 10:00am - 11:00pm</p>
                                        <p className="text-gray-600">Friday - Saturday: Off day</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Newsletter</h2>
                            <p className="mb-4 text-gray-600">Subscribe our newsletter</p>
                            <form className="flex space-x-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                />
                                <button type="submit" className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>

                        <div className="flex justify-between items-center pt-8">
                            <p className="text-gray-600">Follow:</p>
                            <div className="flex space-x-4">
                                {[
                                    { icon: Github, href: "https://github.com/harshaKARNATI20" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/harsha-vardhan-karnati-7a70212b9/" },
                                    { icon: Instagram, href: "#" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition-colors"
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}