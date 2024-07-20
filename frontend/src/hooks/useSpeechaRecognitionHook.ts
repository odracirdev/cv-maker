import { useEffect, useState } from "react";

let recognition: any = null;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

const useSpeechRecognition = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      console.log("onresult event: ", event);
      recognition.stop();
      setIsListening(false);
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };
  }, []);

  const startListening = () => {
    if (!recognition) return;
    setText('');
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    if (!recognition) return;
    setIsListening(false);
    recognition.stop();
  };

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;
