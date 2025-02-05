import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NoteHomePage from "./pages/NoteHomePage";
import NoteAddPage from "./pages/NoteAddPage";
import NoteArchivedPage from "./pages/NoteArchivePage";
import NotFoundPage from "./pages/NotFoundPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import {
    getUserLogged,
    getAccessToken,
    putAccessToken
} from "./utils/network-data";

function App() {
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = getAccessToken();
            if (token) {
                putAccessToken(token);
                try {
                    const { data } = await getUserLogged();
                    setAuthedUser(data);
                } catch (error) {
                    console.error("Error fetching user:", error);
                    localStorage.removeItem("accessToken");
                }
            }
            setInitializing(false);
        };

        fetchUser();
    }, []);

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken);
        try {
            const { data } = await getUserLogged();
            setAuthedUser(data);
            navigate("/simple-notes-app/");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken("");
        navigate("/simple-notes-app/");
    };

    if (initializing) {
        return (
            <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex items-center justify-center transition-colors duration-300">
                <p>Loading...</p>
            </div>
        );
    }

    if (!authedUser) {
        return (
            <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <div className="container mx-auto py-8 px-4">
                    <Routes>
                        <Route
                            path="/simple-notes-app/*"
                            element={<LoginPage loginSuccess={onLoginSuccess} />}
                        />
                        <Route
                            path="/simple-notes-app/register"
                            element={<RegisterPage />}
                        />
                    </Routes>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <div className="container mx-auto py-8 px-4">
                <Routes>
                    <Route
                        path="/simple-notes-app/"
                        element={<NoteHomePage logout={onLogout} name={authedUser.name} />}
                    />
                    <Route path="/simple-notes-app/add" element={<NoteAddPage />} />
                    <Route
                        path="/simple-notes-app/archive"
                        element={<NoteArchivedPage logout={onLogout} name={authedUser.name} />}
                    />
                    <Route
                        path="/simple-notes-app/notes/:id"
                        element={<NoteDetailPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
