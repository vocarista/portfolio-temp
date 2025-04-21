import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center px-6 font-sans">
      <h1 className="text-5xl md:text-6xl font-thin mb-4">Stay tuned for a brand new portfolio 3.0</h1>
      <p className="text-lg md:text-xl mb-8 font-light">I'm working on something exciting. Launching soon!</p>

      <div className="flex gap-4">
        <a href="https://github.com/vocarista" target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2 text-base bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 px-4 py-2 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <FaGithub className="text-xl" /> GitHub
          </Button>
        </a>
        <a href="https://linkedin.com/in/vocarista" target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2 text-base bg-blue-700 hover:bg-blue-600 text-white border border-blue-500 px-4 py-2 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <FaLinkedin className="text-xl" /> LinkedIn
          </Button>
        </a>
        <a href="https://drive.google.com/drive/folders/1_GT7oNmM2s71nKmBgAvaKuQ74vPNSwBr?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button className="text-base bg-green-600 hover:bg-green-500 text-white border border-green-500 px-4 py-2 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
}
