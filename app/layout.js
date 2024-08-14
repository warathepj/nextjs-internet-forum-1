

// app/layout/
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '../context/AuthContext';
import { MessageProvider } from '../context/MessageContext';
import { TopicsProvider } from '../context/TopicsContext';
import { PostsProvider } from '../context/PostsContext';
import { PasswordProvider } from '../context/PasswordContext';
import { UsersProvider } from '../context/UsersContext';
import Nav from './components/Nav';
import ClientWrapper from './client-wrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <PasswordProvider>
    <UsersProvider>
        <PostsProvider>
        <MessageProvider>
          <TopicsProvider>
            <ClientWrapper>
              {/* <div className="nav"> */}

              {/* <Nav className="nav" /> */}
              <Nav />
              {/* </div> */}
              {children}
            </ClientWrapper>
          </TopicsProvider>
        </MessageProvider>
        </PostsProvider>
        </UsersProvider>
        </PasswordProvider>
    </AuthProvider>

      </body>
    </html>
  );
}
