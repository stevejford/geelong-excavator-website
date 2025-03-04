import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EquipmentSelector from '@/components/EquipmentSelector';

export const metadata: Metadata = {
  title: 'Book Equipment | Geelong Excavator Hire',
  description: 'Book excavators, loaders, and other equipment online. Easy booking process with flexible hire options for your construction or landscaping project.',
};

export default function BookNowPage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/rocks/pexels-olgalioncat-7245520.jpg"
            alt="Book Equipment"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="max-w-3xl mb-4 text-white">
            Book Equipment
          </h1>
          <p className="text-xl max-w-2xl">
            Reserve the equipment you need for your project
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Equipment Booking</h2>
            <p className="text-gray-700 mb-12 text-center">
              Fill out the form below to book your equipment. We&apos;ll confirm availability and provide a quote based on your requirements.
            </p>
            
            <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Equipment Selection */}
              <div className="pt-6 border-t border-gray-200">
                <EquipmentSelector />
              </div>
              
              {/* Booking Details */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                      type="date"
                      id="start-date"
                      name="start-date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                      type="date"
                      id="end-date"
                      name="end-date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="delivery-option" className="block text-sm font-medium text-gray-700">Delivery Option</label>
                  <select
                    id="delivery-option"
                    name="delivery-option"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="delivery">Delivery to Site</option>
                    <option value="pickup">Pickup from Our Location</option>
                  </select>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="delivery-address" className="block text-sm font-medium text-gray-700">Delivery Address (if applicable)</label>
                  <textarea
                    id="delivery-address"
                    name="delivery-address"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  ></textarea>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <div>
                  <label htmlFor="project-details" className="block text-sm font-medium text-gray-700">Project Details</label>
                  <textarea
                    id="project-details"
                    name="project-details"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="Please provide any additional details about your project that might help us better serve you."
                  ></textarea>
                </div>
              </div>
              
              {/* Terms and Conditions */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">I agree to the terms and conditions</label>
                    <p className="text-gray-500">By submitting this form, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Booking Information</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Booking Process</h3>
                  <p className="text-gray-700">
                    After submitting your booking request, our team will review it and confirm equipment availability. We&apos;ll then contact you with a quote and to finalize the details of your rental.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Payment</h3>
                  <p className="text-gray-700">
                    Payment is required before equipment delivery or pickup. We accept credit cards, direct bank transfers, and cash payments at our office.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cancellation Policy</h3>
                  <p className="text-gray-700">
                    Cancellations made more than 48 hours before the scheduled rental start time will receive a full refund. Cancellations within 48 hours may be subject to a cancellation fee.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
                  <p className="text-gray-700">
                    If you need help with your booking or have questions about our equipment, please <Link href="/contact" className="text-primary hover:underline">contact us</Link> and our team will be happy to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
