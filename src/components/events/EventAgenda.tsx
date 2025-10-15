"use client";

import { Clock, Coffee, Presentation, Users as UsersIcon, Award } from "lucide-react";

interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  type: "session" | "break" | "workshop" | "networking" | "closing";
}

const EventAgenda = () => {
  const agenda: AgendaItem[] = [
    {
      time: "9:00 AM - 9:30 AM",
      title: "Registration & Welcome Coffee",
      description: "Check-in, collect your event kit, and network with fellow attendees over coffee.",
      type: "break",
    },
    {
      time: "9:30 AM - 10:00 AM",
      title: "Opening Keynote: The Future of AI",
      description: "An inspiring talk on how AI is transforming industries and what to expect in 2025.",
      speaker: "Dr. Sarah Chen",
      type: "session",
    },
    {
      time: "10:00 AM - 11:30 AM",
      title: "Workshop: Building ML Models from Scratch",
      description: "Hands-on workshop where you'll build and train your first machine learning model using Python and TensorFlow.",
      speaker: "Raj Kumar",
      type: "workshop",
    },
    {
      time: "11:30 AM - 12:00 PM",
      title: "Coffee Break & Networking",
      description: "Take a break, grab refreshments, and connect with speakers and attendees.",
      type: "break",
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Panel Discussion: AI Ethics & Responsible AI",
      description: "Industry leaders discuss the ethical implications of AI and best practices for responsible development.",
      speaker: "Multiple Speakers",
      type: "session",
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Lunch Break",
      description: "Enjoy a delicious lunch and continue networking with fellow participants.",
      type: "break",
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Workshop: Deep Learning with Neural Networks",
      description: "Advanced session covering neural network architectures, training techniques, and real-world applications.",
      speaker: "Dr. Sarah Chen",
      type: "workshop",
    },
    {
      time: "3:30 PM - 4:00 PM",
      title: "Q&A Session with Experts",
      description: "Get your questions answered by our panel of AI experts and industry professionals.",
      type: "session",
    },
    {
      time: "4:00 PM - 4:30 PM",
      title: "Closing Remarks & Certificate Distribution",
      description: "Event wrap-up, key takeaways, and distribution of participation certificates.",
      type: "closing",
    },
    {
      time: "4:30 PM - 5:00 PM",
      title: "Networking & Photo Session",
      description: "Final networking opportunity and group photos with speakers and organizers.",
      type: "networking",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "session":
        return <Presentation className="w-5 h-5" />;
      case "break":
        return <Coffee className="w-5 h-5" />;
      case "workshop":
        return <UsersIcon className="w-5 h-5" />;
      case "networking":
        return <UsersIcon className="w-5 h-5" />;
      case "closing":
        return <Award className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "session":
        return "bg-purple-100 text-purple-600 border-purple-200";
      case "break":
        return "bg-orange-100 text-orange-600 border-orange-200";
      case "workshop":
        return "bg-blue-100 text-blue-600 border-blue-200";
      case "networking":
        return "bg-green-100 text-green-600 border-green-200";
      case "closing":
        return "bg-pink-100 text-pink-600 border-pink-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Agenda</h2>
          <p className="text-lg text-gray-600">
            A full day packed with learning, networking, and hands-on workshops
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 to-purple-200"></div>

          {/* Agenda Items */}
          <div className="space-y-8">
            {agenda.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Time Badge */}
                <div className={`flex-shrink-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`inline-block px-4 py-2 rounded-lg font-semibold text-sm ${getColor(item.type)} border`}>
                    <Clock className="w-4 h-4 inline mr-2" />
                    {item.time}
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-600 rounded-full z-10"></div>

                {/* Content Card */}
                <div className="flex-shrink-0 w-full md:w-1/2 ml-8 md:ml-0">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColor(item.type)} border`}>
                        {getIcon(item.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        {item.speaker && (
                          <p className="text-sm text-purple-600 font-medium">
                            By {item.speaker}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Agenda Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Download Full Agenda (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventAgenda;
