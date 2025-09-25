// Region-specific service data

export interface Program {
    title: string;
    description: string;
    price: string;
    inclusives: string[];
  }
  
  export interface ServiceCategory {
    title: string;
    subtitle: string;
    image: string;
    programs: Program[];
  }
  
  export const regionServices: Record<string, ServiceCategory[]> = {
    chennai: [
      {
        title: "Performance",
        subtitle: "Level up your athletic skills",
        image:
          "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
        programs: [
          {
            title: "The Grind Program (1-1 training)",
            description: "For athletes aiming to level up their skills",
            price: "₹12,000 / Month , ₹30,000 / Quarter",
            inclusives: [
              "12 Strength and Conditioning sessions",
              "1 Sports Nutrition Consultation and Report",
              "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
            ],
          },
          {
            title: "The Athlete Tribe (Semi Private training)",
            description:
              "For athletes looking to push their limits in a small, focused group.",
            price: "₹6,500 / Month , ₹15,000 / Quarter",
            inclusives: [
              "Strength and Conditioning sessions from Mon-Fri",
              "1 Sports Nutrition Consultation and Report",
            ],
          },
          {
            title: "Sports Nutrition",
            description:
              "For athletes who want to fuel their body for better performance.",
            price: "Consultation: ₹800 | With Diet Chart: ₹1,500",
            inclusives: [],
          },
          {
            title: "Performance Psychology",
            description:
              "For athletes who want to stay focused, handle pressure, and perform their best.",
            price: "Sports Psychology Consultation: ₹1500",
            inclusives: [],
          },
        ],
      },
      {
        title: "Longetivity",
        subtitle: "Build lasting strength & energy",
        image:
          "https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=800",
        programs: [
          {
            title: "The Executive Program (1-1 training)",
            description: "For those with packed schedules, looking to prioritize health and strength.",
            price: "₹12,000 / Month , ₹30,000 / Quarter",
            inclusives: [
              "12 Strength and Conditioning sessions",
              "1 Sports Nutrition Consultation and Report",
              "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
            ],
          },
          {
            title: "The Partner Program (Semi Private training)",
            description:
              "For individuals who want to stay active and enjoy a shared space with others.",
            price: "₹6,500 / Month , ₹15,000 / Quarter",
            inclusives: [
              "Strength and Conditioning sessions from Mon-Fri",
              "1 Sports Nutrition Consultation and Report",
            ],
          },
          {
            title: "The Coastal Crew (Group training) 6 am - 7 am",
            description:
              "For early risers who want to start their day strong with energy, movement, and community.",
            price: "4,000 / Month , ₹10,000 / Quarter",
            inclusives: [
                "Strength and Conditioning sessions from Mon-Fri",
            ],
          },
          {
            title: "Online training (1-1 training)",
            description:
              "Ideal for anyone who wants to train at convenient times without commuting.",
            price: "6,000 / Month , ₹15,000 / Quarter",
            inclusives: [
                "12 Strength and Conditioning sessions.",
                "1 Sports Nutrition Consultation and Report"

            ],
          },
          {
            title: "Online training (group training)",
            description:
              "For individuals who enjoy energy, challenge, and shared motivation online.",
            price: "4,000 / Month , ₹10,000 / Quarter",
            inclusives: [
                "12 Strength and Conditioning sessions.",
                "1 Sports Nutrition Consultation and Report"
            ],
          },
          {
            title: "Home-fit Program (Home training)",
            description:
              "For those who want to stay active and strong from the comfort of their own home.",
            price: "15,000 / Month , ₹40,000 / Quarter",
            inclusives: [
                "12 Strength and Conditioning sessions.",
                "1 Sports Nutrition Consultation and Report",
                "1 free Sports Medicine Consultation",

            ],
          },
          {
            title: "Nutrition Guidance",
            description:
              "For individuals who want nutrition guidance to support an active lifestyle",
            price: "Sports Nutrition Consultation with Report : ₹800 | Sports Nutrition Consultation with Diet Chart:₹1,500",
            inclusives: [
            ],
          },
        ],
      },
      {
        title: "Rehabilitation",
        subtitle: "Recover stronger and safer",
        image:
          "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800",
        programs: [
          {
            title: "The Re-build Program (1-1 training)",
            description:
              "For those recovering from an injury, looking to move confidently again.",
            price: "₹12,000 / Month , ₹30,000 / Quarter",
            inclusives: [
              "12 Strength and Conditioning sessions",
              "1 Sports Nutrition Consultation and Report",
              "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
            ],
          },
        ],
      },
    ],
  
    // You can add bangalore, coimbatore, online in the same way
    bangalore: [
        {
          title: "Performance",
          subtitle: "Level up your athletic skills",
          image:
            "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
          programs: [
            {
              title: "The Grind Program (1-1 training)",
              description: "For athletes aiming to level up their skills",
              price: "₹15,000 / Month , ₹40,000 / Quarter",
              inclusives: [
                "12-15 Strength and Conditioning sessions",
                "1 Sports Nutrition Consultation and Diet chart",
                "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
              ],
            },
            {
              title: "The Athlete Tribe (Semi Private training)",
              description:
                "For athletes looking to push their limits in a small, focused group.",
              price: "₹8,000 / Month , ₹20,000 / Quarter",
              inclusives: [
                "Strength and Conditioning sessions from Mon-Fri",
                "1 Sports Nutrition Consultation and Report",
                "1 Sport Medicine Consultation"
              ],
            },
            {
              title: "Sports Nutrition",
              description:
                "For athletes who want to fuel their body for better performance.",
              price: "Consultation: ₹800 | With Diet Chart: ₹1,500",
              inclusives: [],
            },
            {
              title: "Performance Psychology",
              description:
                "For athletes who want to stay focused, handle pressure, and perform their best.",
              price: "Sports Psychology Consultation: ₹1500",
              inclusives: [],
            },
          ],
        },
        {
          title: "Longetivity",
          subtitle: "Build lasting strength & energy",
          image:
            "https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=800",
          programs: [
            {
                title: "The Executive Program (1-1 training)",
                description: "For those with packed schedules, looking to prioritize health and strength.",
                price: "₹15,000 / Month , ₹40,000 / Quarter",
                inclusives: [
                  "12-15 Strength and Conditioning sessions",
                  "1 Sports Nutrition Consultation and Diet chart",
                  "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
                ],
              },
            {
              title: "The Partner Program (Semi Private training)",
              description:
                "For individuals who want to stay active and enjoy a shared space with others.",
              price: "₹8,000 / Month , ₹20,000 / Quarter",
              inclusives: [
                "Strength and Conditioning sessions from Mon-Fri",
                "1 Sports Nutrition Consultation and Report",
                "1 Sport Medicine Consultation"
              ],
            },
            {
              title: "Online training (1-1 training)",
              description:
                "Ideal for anyone who wants to train at convenient times without commuting.",
              price: "6,000 / Month , ₹15,000 / Quarter",
              inclusives: [
                  "12 Strength and Conditioning sessions.",
                  "1 Sports Nutrition Consultation and Report",
                  "1 Sport Medicine Consultation"
              ],
            },
            {
              title: "Online training (group training)",
              description:
                "For individuals who enjoy energy, challenge, and shared motivation online.",
              price: "4,000 / Month , ₹10,000 / Quarter",
              inclusives: [
                  "12 Strength and Conditioning sessions.",
                  "1 Sports Nutrition Consultation and Report",
                  "1 Sport Medicine Consultation"
              ],
            },
            {
              title: "Nutrition Guidance",
              description:
                "For individuals who want nutrition guidance to support an active lifestyle",
              price: "Sports Nutrition Consultation with Report : ₹800 | Sports Nutrition Consultation with Diet Chart:₹1,500",
              inclusives: [
              ],
            },
          ],
        },
        {
          title: "Rehabilitation",
          subtitle: "Recover stronger and safer",
          image:
            "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800",
          programs: [
            {
              title: "The Re-build Program (1-1 training)",
              description:
                "For those recovering from an injury, looking to move confidently again.",
              price: "₹15,000 / Month , ₹40,000 / Quarter",
              inclusives: [
                "12 Strength and Conditioning sessions",
                "1 Sports Nutrition Consultation and Diet Chart",
                "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
              ],
            },
          ],
        },
      ],

      coimbatore: [
        {
          title: "Performance",
          subtitle: "Level up your athletic skills",
          image:
            "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
          programs: [
            {
              title: "The Grind Program (1-1 training)",
              description: "For athletes aiming to level up their skills",
              price: "₹12,000 / Month , ₹30,000 / Quarter",
              inclusives: [
                "12 Strength and Conditioning sessions",
                "1 Sports Nutrition Consultation and Diet chart",
                "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
              ],
            },
            {
              title: "The Athlete Tribe (Semi Private training)",
              description:
                "For athletes looking to push their limits in a small, focused group.",
              price: "₹6,500 / Month , ₹15,000 / Quarter",
              inclusives: [
                "Strength and Conditioning sessions from Mon-Fri",
                "1 Sports Nutrition Consultation and Report",
              ],
            },
            {
              title: "Sports Nutrition",
              description:
                "For athletes who want to fuel their body for better performance.",
              price: "Consultation: ₹800 | With Diet Chart: ₹1,500",
              inclusives: [],
            },
            {
              title: "Performance Psychology",
              description:
                "For athletes who want to stay focused, handle pressure, and perform their best.",
              price: "Sports Psychology Consultation: ₹1500",
              inclusives: [],
            },
          ],
        },
        {
          title: "Longetivity",
          subtitle: "Build lasting strength & energy",
          image:
            "https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=800",
          programs: [
            {
                title: "The Executive Program (1-1 training)",
                description: "For those with packed schedules, looking to prioritize health and strength.",
                price: "₹12,000 / Month , ₹30,000 / Quarter",
                inclusives: [
                  "12 Strength and Conditioning sessions",
                  "1 Sports Nutrition Consultation and Diet chart",
                  "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
                ],
              },
            {
              title: "The Partner Program (Semi Private training)",
              description:
                "For individuals who want to stay active and enjoy a shared space with others.",
              price: "₹6,500 / Month , ₹15,000 / Quarter",
              inclusives: [
                "Strength and Conditioning sessions from Mon-Fri",
                "1 Sports Nutrition Consultation and Report",
              ],
            },
            {
              title: "Online training (1-1 training)",
              description:
                "Ideal for anyone who wants to train at convenient times without commuting.",
              price: "6,000 / Month , ₹15,000 / Quarter",
              inclusives: [
                  "12 Strength and Conditioning sessions.",
                  "1 Sports Nutrition Consultation and Report",
              ],
            },
            {
              title: "Online training (group training)",
              description:
                "For individuals who enjoy energy, challenge, and shared motivation online.",
              price: "4,000 / Month , ₹10,000 / Quarter",
              inclusives: [
                  "12 Strength and Conditioning sessions.",
                  "1 Sports Nutrition Consultation and Report",
              ],
            },
            {
              title: "Nutrition Guidance",
              description:
                "For individuals who want nutrition guidance to support an active lifestyle",
              price: "Sports Nutrition Consultation with Report : ₹800 | Sports Nutrition Consultation with Diet Chart:₹1,500",
              inclusives: [
              ],
            },
          ],
        },
        {
          title: "Rehabilitation",
          subtitle: "Recover stronger and safer",
          image:
            "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800",
          programs: [
            {
              title: "The Re-build Program (1-1 training)",
              description:
                "For those recovering from an injury, looking to move confidently again.",
              price: "₹12,000 / Month , ₹30,000 / Quarter",
              inclusives: [
                "12 Strength and Conditioning sessions",
                "1 Sports Nutrition Consultation and Diet Chart",
                "1 free Sports Medicine Consultation and a Physiotherapy Assessment",
              ],
            },
          ],
        },
      ],

      online: [
        {
          title: "Online training (1-1 training)",
          subtitle: "Personalized sessions, anytime, anywhere.",
          image:
            "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800", 
          // clear solo workout at home
          programs: [
            {
              title: "Online training (1-1 training)",
              description:
                "Ideal for anyone who wants to train at convenient times, from anywhere.",
              price: "₹6,000 / Month , ₹15,000 / Quarter",
              inclusives: [
                "12 Strength and Conditioning sessions",
                "1 Sports Nutrition Consultation and Report",
              ],
            },
          ],
        },
        {
          title: "Online training (group training)",
          subtitle: "Train together, stay motivated online.",
          image:
            "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800", 
          // group fitness session, matches "group training"
          programs: [
            {
              title: "Online training (group training)",
              description:
                "For anyone who enjoys energy, challenge, and shared motivation online.",
              price: "₹4,000 / Month , ₹10,000 / Quarter",
              inclusives: [
                "12 Strength and Conditioning sessions",
                "1 Sports Nutrition Consultation and Report",
              ],
            },
          ],
        },
      ],
      
      
      
  };
  