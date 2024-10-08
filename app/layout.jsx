// app/layout/

import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '../context/AuthContext';
import { UserProvider } from '../context/UserContext';
import { AnnounceProvider } from '../context/AnnounceContext';
import { MessageProvider } from '../context/MessageContext';
import { TopicsProvider } from '../context/TopicsContext';
import { PostProvider } from '../context/UserPostContext';
import { PostsProvider } from '../context/PostsContext';
import { PasswordProvider } from '../context/PasswordContext';
import { UsersProvider } from '../context/UsersContext';
import { CommentProvider } from '../context/UserCommentContext';
import { UserCommentContext } from '../context/UserCommentContext';
import { WriteProvider } from "../context/WriteContext";
import { PersistentUsernameProvider } from '../context/PersistentUsernameContext';
import { Providers } from './providers';
import ClientWrapper from './client-wrapper';
import Nav from './components/Nav';
import Welcome from "./components/Welcome";
import GotoTop from "./components/GotoTop";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PersistentUsernameProvider>
          <WriteProvider>
            <PostProvider>
              <CommentProvider>
                <Providers>
                  <AuthProvider>
                    <UserProvider>
                      <PasswordProvider>
                        <UsersProvider>
                          <PostsProvider>
                            <AnnounceProvider>
                              <MessageProvider>
                                <TopicsProvider>
                                  <ClientWrapper>
                                    <Nav />
                                    <Welcome />
                                    {children}
                                    <Footer />
                                    <GotoTop />
                                  </ClientWrapper>
                                </TopicsProvider>
                              </MessageProvider>
                            </AnnounceProvider>
                          </PostsProvider>
                        </UsersProvider>
                      </PasswordProvider>
                    </UserProvider>
                  </AuthProvider>
                </Providers>
              </CommentProvider>
            </PostProvider>
          </WriteProvider>
        </PersistentUsernameProvider>

      </body>
    </html>
  );
}
