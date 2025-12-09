import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ContactForm() {
  return (
    <div className="w-full max-w-lg p-8 bg-white shadow-xl rounded-lg border border-black/20">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <Input
            id="first-name"
            placeholder="First Name"
            className="mt-2 p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <Input
            id="last-name"
            placeholder="Last Name"
            className="mt-2 p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
 
      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          id="email"
          placeholder="Email"
          className="mt-2 p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
 
      <div className="mt-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <Input
          id="subject"
          placeholder="Subject"
          className="mt-2 p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
 
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Type your message here"
          className="mt-2 p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />
      </div>
 
      <div className="mt-6 text-right">
        <Button className="px-6 py-3 text-white bg-black rounded-md hover:bg-gray-800">
          Send Message
        </Button>
      </div>
    </div>
  );
}