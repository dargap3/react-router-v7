import { AuthLayout } from "./auth/layout/auth-layout";
import ChatLayout from "./chat/layout/chat-layout";
import ChatPage from "./chat/pages/chat-page";

function App() {
  return (
    <>
      {/* <AuthLayout /> */}
      <ChatLayout>
        <ChatPage />
      </ChatLayout>
    </>
  );
}

export default App;
