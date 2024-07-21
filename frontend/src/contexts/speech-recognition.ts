import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type SpeechRecognitionState = {
  text: string;
  isListening: boolean;
  hasRecognitionSupport: boolean;
}

type SpeechRecognitionActions = {
  init():void;
  startListening():void;
  stopListening():void;
  cleanText():void;
  setTranscript(transcript:string): void;
}

type SpeechRecognitionStore = SpeechRecognitionState & SpeechRecognitionActions;


let recognition: SpeechRecognition | null;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "es-SP";
} else {
  recognition = null;
}

const INITIAL_STATE: SpeechRecognitionState = {
  text: '',
  hasRecognitionSupport: !!recognition,
  isListening: false
}

const useSpeechRecognition = create<SpeechRecognitionStore>()(
  devtools(
    immer(
      (set, get) => ({
        ...INITIAL_STATE,
        init: () => set(() => {
          if (recognition){
            recognition.onresult = (event: SpeechRecognitionEvent) => {
              console.log("onresult event: %O", event);
              recognition?.stop();
              const transcript = event.results[0][0].transcript;
              get().setTranscript(transcript);
            };
          }
        },false,'initSpeechRecognition'),
        cleanText: () => set((state: SpeechRecognitionStore) => {
          state.text = ''
        }, false, 'cleanText'),
        startListening: () => set((state: SpeechRecognitionStore) => {
          if (recognition){
            state.text = '';
            state.isListening = true;
            recognition.start();
          }
        }, false, 'startListening'),
        stopListening: () => set((state: SpeechRecognitionStore) => {
          if (recognition){
            state.isListening = false
            recognition.stop();
          }
        }, false, 'stopListening'),
        setTranscript: (transcript) => set((state: SpeechRecognitionStore) => {
            state.isListening = false;
            state.text = transcript;
        }, false, 'setTranscript')
      })
    )
  )
)

export default useSpeechRecognition
