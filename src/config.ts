export const siteConfig = {
  name: "Isabella Cruz",
  title: "Electrical Engineering Student at Cal Poly Pomona",
  description: "Portfolio website of Isabella Cruz",
  accentColor: "#1d4ed8",
  social: {
    email: "incruz@cpp.edu",
    linkedin: "https://linkedin.com/in/isabclla",
    twitter: "https://x.com/",
    github: "https://github.com/isabclla",
  },
  aboutMe:
    "I’m a first-year Electrical Engineering transfer student at Cal Poly Pomona. So far, I’ve really enjoyed embedded systems and circuit analysis. Embedded systems are exciting to me because they let you quickly build something useful and keep fine-tuning it. It’s satisfying seeing your code come to life in real hardware. I also enjoy circuit analysis because it blends my interest in problem-solving and physics, which was what drew me to electrical engineering in the first place. Outside of school, I love cooking and experimenting with healthy recipes. Right now, I’m doing “No Sugar November” as a fun challenge with friends. I also love to discover new music, and I’m currently into scenecore because it’s perfect for keeping me energized during late night project sessions. When I’m not in the lab or kitchen, you’ll probably find me discovering new music, hanging out with friends, or planning my next project.",
  skills: ["C", "Verilog", "Xilinx Vivado", "SolidWorks", "LTspice", "PIC18F", "ESP32", "Artix-7 FPGA", "ITAR Compliance", "ISO-Class Cleanroom"],
  projects: [
    {
      name: "CubeSTEP",
      description:
        "A collaboration between JPL and Cal Poly Pomona to develop a CubeSat platform that can support future payloads. The project focuses on using additive manufacturing to make the platform adaptable for different mission needs and on developing and testing a thermal management system using oscillating heat pipes (OHPs) provided by JPL.",
      link: "https://www.cpp.edu/news/content/2023/09/cal-poly-pomona-receives-1-2m-in-nasa-grants-for-space-related-projects-and-research/index.shtml",
      skills: ["SolidWorks", "ITAR Compliance", "ISO-Class Cleanroom"],
    },
    {
      name: "Foot Traffic Monitoring System (In Progress)",
      description:
        "A doorway counter using two VL53L1X time-of-flight sensors, an ESP32-S3 microcontroller, and an OLED display to detect entry and exit direction and show live counts.",
      link: "",
      skills: ["C", "ESP32"],
    },
    {
      name: "DDR-Style Rhythm Game on FPGA (Planned)",
      description:
        "A simplified rhythm game inspired by Dance Dance Revolution, to be implemented in Verilog on the Nexys A7 Artix-7 board. The game will use VGA output to display four note lanes and a hit line, pushbuttons for input, and simple audio feedback through PWM. Players will earn points by pressing the correct button as the falling note reaches the hit line.",
      link: "",
      skills: ["Verilog", "Xilinx Vivado", "Artix-7 FPGA"],
    },
  ],
  experience: [
    {
      company: "Vector Space Biosciences",
      title: "Electrical Engineering Intern",
      dateRange: "June 2025 - Present",
      bullets: [
        "Contributed to an in-house design projected to reduce satellite costs by at least 21.7%",
        "Defined the input and output requirements for a custom satellite PCB",
        "Collaborated with a senior intern to support schematic development",
      ],
    }
  ],
  education: [
    {
      school: "Cal Poly Pomona",
      degree: "BS in Electrical Engineering",
      dateRange: "2025 - 2027",
      achievements: [
        "CGPA: 3.98"
      ],
    },
    {
      school: "College of the Canyons",
      degree: "AS-T in Mathematics, AS-T in Biology",
      dateRange: "2021 - 2025",
      achievements: [
        "Summa Cum Laude, Valedictorian"
      ],
    },
  ],
};
