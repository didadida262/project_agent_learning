import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBrain, faCode, faChartLine, faRocket, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import TrainingPlan from './components/TrainingPlan';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import InterviewTips from './components/InterviewTips';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <TechStack />
      <TrainingPlan />
      <CompetitiveAdvantage />
      <InterviewTips />
      
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800 mt-16">
        <p>© 2026 AI Agent Engineer Training Portal</p>
      </footer>
    </div>
  );
}

export default App;
