// hooks/useChatbot.js
import { useEffect } from 'react';

function useChatbot() {
  useEffect(() => {
    // Ensure the script is only loaded once
    if (window.Chatbot) return;

    // Function to check if the user is on a mobile device
    const isMobile = window.innerWidth <= 768;

    // Dynamically load the script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.onload = () => {
      window.Chatbot.init({
        chatflowid: '2ca663d8-6392-4c74-80aa-ff68b1ba883d',
        apiHost: 'https://dashboard.langchain.space',
        theme: {
            button: {
                backgroundColor: "#3B81F6",
                right: 20,
                bottom: 20,
                size: "medium",
                iconColor: "white",
                customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            },
            chatWindow: {
                welcomeMessage: "Hello! I am an AI assistant build with LangChain.Space. I can help you with your LLMs. " +
                    "How can I help you today?",
                backgroundColor: "#ffffff",
                height: isMobile ? 400 : 700,  // Set height based on the device type
                width: 400,
                fontSize: isMobile ? 14 : 16,
                poweredByTextColor: "white",
                botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#303235",
                    showAvatar: true,
                    avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                },
                userMessage: {
                    backgroundColor: "#3B81F6",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                },
                textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#303235",
                    sendButtonColor: "#3B81F6",
                }
            }
        }
      });
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
}

export default useChatbot;
