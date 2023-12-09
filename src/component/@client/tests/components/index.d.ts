declare module 'react-speech-kit' {
   export interface SpeechSynthesis {
      speak: (options: { text: string }) => void;
      // Add other properties or methods if needed
   }

   export const useSpeechSynthesis: () => SpeechSynthesis;
}
