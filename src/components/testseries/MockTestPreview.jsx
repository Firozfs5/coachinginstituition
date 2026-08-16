import React, { useState } from 'react';
import { 
  CheckCircle2, Clock, Award, HelpCircle, FileText, 
  RotateCcw, Sparkles, ShieldCheck, ChevronRight, Check, X 
} from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { useModal } from '../../context/ModalContext';

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    subject: "Karnataka Special & History (KAS / FDA / PSI Pattern)",
    kannadaSubject: "ಕರ್ನಾಟಕ ಇತಿಹಾಸ ಮತ್ತು ಸಂಸ್ಕೃತಿ",
    question: "Which Hoysala king constructed the renowned Chennakeshava Temple at Belur in Hassan district to commemorate his victory in the Battle of Talakad?",
    kannadaQuestion: "ತಲಕಾಡು ಯುದ್ಧದ ವಿಜಯದ ಸಂಕೇತವಾಗಿ ಬೇಲೂರಿನಲ್ಲಿ ಚೆನ್ನಕೇಶವ ದೇವಾಲಯವನ್ನು ನಿರ್ಮಿಸಿದ ಹೊಯ್ಸಳ ದೊರೆ ಯಾರು?",
    options: [
      { id: "A", text: "Bittideva / Vishnuvardhana (ವಿಷ್ಣುವರ್ಧನ)" },
      { id: "B", text: "Veera Ballala II (ಎರಡನೇ ವೀರ ಬಲ್ಲಾಳ)" },
      { id: "C", text: "Narasimha I (ಒಂದನೇ ನರಸಿಂಹ)" },
      { id: "D", text: "Vinayaditya (ವಿನಯಾದಿತ್ಯ)" }
    ],
    correct: "A",
    explanation: "King Vishnuvardhana (formerly Bittideva) commissioned the world-famous Chennakeshava Temple at Belur (Hassan district) in 1117 AD to celebrate his decisive victory over the Cholas at Talakad."
  },
  {
    id: 2,
    subject: "Indian Constitution & Polity (PSI / PDO / KAS)",
    kannadaSubject: "ಭಾರತದ ಸಂವಿಧಾನ ಮತ್ತು ರಾಜಕೀಯ",
    question: "Under the Karnataka Gram Swaraj and Panchayat Raj Act 1993, which body is constitutionally designated as the foundation of decentralized democracy at the village level?",
    kannadaQuestion: "ಕರ್ನಾಟಕ ಗ್ರಾಮ ಸ್ವರಾಜ್ ಮತ್ತು ಪಂಚಾಯತ್ ರಾಜ್ ಅಧಿನಿಯಮ 1993 ರ ಪ್ರಕಾರ, ಗ್ರಾಮ ಮಟ್ಟದಲ್ಲಿ ವಿಕೇಂದ್ರೀಕೃತ ಪ್ರಜಾಪ್ರಭುತ್ವದ ಅಡಿಪಾಯವೆಂದು ಪರಿಗಣಿಸಲಾದ ಸಂಸ್ಥೆ ಯಾವುದು?",
    options: [
      { id: "A", text: "Taluk Panchayat Executive Council" },
      { id: "B", text: "Grama Sabha (ಗ್ರಾಮ ಸಭೆ)" },
      { id: "C", text: "Nyaya Panchayat" },
      { id: "D", text: "Standing Committee on Social Justice" }
    ],
    correct: "B",
    explanation: "Under the 73rd Constitutional Amendment and Karnataka Gram Swaraj Act 1993, the Grama Sabha (consisting of all registered voters in the village) is the core statutory foundation of grassroots democracy."
  },
  {
    id: 3,
    subject: "General Mental Ability & Speed Aptitude (Banking / RRB / CSAT)",
    kannadaSubject: "ಸಾಮಾನ್ಯ ಮಾನಸಿಕ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ವೇಗ ಗಣಿತ",
    question: "A train running at 72 km/h crosses a 250-metre-long platform in 25 seconds. What is the length of the train in metres?",
    kannadaQuestion: "ಗಂಟೆಗೆ ೭೨ ಕಿ.ಮೀ ವೇಗದಲ್ಲಿ ಚಲಿಸುವ ರೈಲೊಂದು ೨೫೦ ಮೀಟರ್ ಉದ್ದದ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಅನ್ನು ೨೫ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ದಾಟುತ್ತದೆ. ಹಾಗಾದರೆ ರೈಲಿನ ಉದ್ದ ಎಷ್ಟು?",
    options: [
      { id: "A", text: "200 metres" },
      { id: "B", text: "250 metres" },
      { id: "C", text: "300 metres" },
      { id: "D", text: "350 metres" }
    ],
    correct: "B",
    explanation: "Speed in m/s = 72 * (5/18) = 20 m/s. Total Distance = Speed * Time = 20 * 25 = 500 m. Train Length = Total Distance - Platform Length = 500 - 250 = 250 metres."
  }
];

const MockTestPreview = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const { openEnquiry } = useModal();

  const q = SAMPLE_QUESTIONS[currentQIndex];

  const handleSelect = (optionId) => {
    if (!isAnswerRevealed) {
      setSelectedOption(optionId);
    }
  };

  const handleCheck = () => {
    if (selectedOption) {
      setIsAnswerRevealed(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setCurrentQIndex((prev) => (prev + 1) % SAMPLE_QUESTIONS.length);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy-900 to-brand-navy-800 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <Badge variant="gold" className="text-[10px]">
              Interactive Test Preview
            </Badge>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Sample Practice Question Simulator
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Experience our OMR & CBT exam style questions with instant conceptual explanations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
            Question {currentQIndex + 1} of {SAMPLE_QUESTIONS.length}
          </span>
        </div>
      </div>

      {/* Question Body */}
      <div className="p-6 sm:p-8">
        {/* Subject Tag */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-700 block">
              {q.subject}
            </span>
            <span className="text-xs font-semibold font-kannada text-brand-red-600">
              {q.kannadaSubject}
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">
            +2.0 Marks | -0.25 Neg.
          </span>
        </div>

        {/* Question Text */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
          <p className="text-base sm:text-lg font-bold text-brand-navy-950 mb-2">
            Q{currentQIndex + 1}. {q.question}
          </p>
          <p className="text-sm font-semibold font-kannada text-brand-navy-800">
            {q.kannadaQuestion}
          </p>
        </div>

        {/* Options Grid */}
        <div className="space-y-3 mb-6">
          {q.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = opt.id === q.correct;
            let optStyle = 'border-slate-200 bg-white hover:border-brand-navy-400 hover:bg-slate-50 text-slate-800';

            if (isAnswerRevealed) {
              if (isCorrect) {
                optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
              } else if (isSelected && !isCorrect) {
                optStyle = 'border-brand-red-500 bg-brand-red-50 text-brand-red-950';
              }
            } else if (isSelected) {
              optStyle = 'border-brand-navy-900 bg-brand-navy-50 text-brand-navy-950 font-semibold ring-2 ring-brand-navy-900/10';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={isAnswerRevealed}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${optStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center shrink-0">
                    {opt.id}
                  </span>
                  <span className="text-sm sm:text-base">{opt.text}</span>
                </div>

                {isAnswerRevealed && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isAnswerRevealed && isSelected && !isCorrect && (
                  <X className="w-5 h-5 text-brand-red-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Section */}
        {isAnswerRevealed && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-emerald-900 mb-6 animate-in fade-in duration-200">
            <strong className="block font-bold mb-1 text-emerald-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Detailed Solution & Knowledge Note:
            </strong>
            <p className="leading-relaxed">{q.explanation}</p>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            {isAnswerRevealed ? 'Solution unlocked. Click Next to try another question.' : 'Select an option and click Verify Answer.'}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {!isAnswerRevealed ? (
              <Button
                variant="primary"
                size="md"
                onClick={handleCheck}
                disabled={!selectedOption}
                className="w-full sm:w-auto"
              >
                Verify Answer
              </Button>
            ) : (
              <Button
                variant="navy"
                size="md"
                onClick={handleNext}
                icon={RotateCcw}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Next Question
              </Button>
            )}

            <Button
              variant="outline"
              size="md"
              onClick={() => openEnquiry('Full Test Series Admission')}
              className="w-full sm:w-auto text-xs"
            >
              Join 150+ Test Series
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTestPreview;
