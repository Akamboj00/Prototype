import { Send } from 'lucide-react';

type MessageInputProps = {
  value: string;
  onChange: (text: string) => void;
  onSend: () => void;
};

export function MessageInput({ value, onChange, onSend }: MessageInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Skriv en melding..."
          className="flex-1 px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onSend}
          disabled={!value.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Vær høflig og profesjonell i din kommunikasjon
      </p>
    </div>
  );
}
