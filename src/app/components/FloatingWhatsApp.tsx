import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2.5"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {!tooltipDismissed && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10, transition: { duration: 0.15 } }}
                transition={{ delay: 1, duration: 0.3 }}
                className="flex items-center gap-2 bg-[#0A0E18]/95 backdrop-blur-xl text-white/70 text-[12px] font-medium px-3.5 py-2.5 rounded-xl border border-white/[0.06] shadow-lg max-w-[200px]"
              >
                <span>Fale conosco pelo WhatsApp</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTooltipDismissed(true);
                  }}
                  className="text-white/25 hover:text-white/50 transition-colors shrink-0"
                >
                  <X className="w-3 h-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href="https://wa.me/553291547944"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 rounded-full bg-[#00E5FF] text-[#020408] flex items-center justify-center shadow-[0_4px_20px_rgba(0,229,255,0.3)] hover:shadow-[0_4px_30px_rgba(0,229,255,0.45)] hover:scale-105 active:scale-95 transition-all duration-300"
            onClick={() => setTooltipDismissed(true)}
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
