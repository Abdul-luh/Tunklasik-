import { BookOpen, CheckCircle, Star, Truck, Users } from "lucide-react";
import React from "react";

export default function About() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
      title: "Quality Excellence",
      description:
        "We deliver top-notch printing solutions that meet and exceed industry standards.",
    },
    {
      icon: <Truck className="w-6 h-6 text-teal-600" />,
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines and consistently deliver projects on time.",
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: "Customer Focused",
      description:
        "Our dedicated team works closely with clients to ensure complete satisfaction.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Tunklasik Print
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We are a professional printing company dedicated to delivering
              exceptional quality to every project and customer. With years of
              experience in the industry, we specialize in comprehensive
              printing solutions that meet the diverse needs of our clients.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative">
              <div className="bg-teal-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-200 rounded-full -ml-12 -mb-12"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Professional Quality
                  </h3>
                  <p className="text-gray-600 mb-6">
                    State-of-the-art printing equipment and skilled
                    professionals ensure every project meets the highest
                    standards of quality and precision.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 bg-teal-500 rounded-full border-2 border-white"
                        ></div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold">500+ Happy Clients</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
