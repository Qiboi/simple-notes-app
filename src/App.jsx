import React from "react";
import { Routes, Route } from "react-router-dom";
import NoteHomePage from "./pages/NoteHomePage";
import NoteAddPage from "./pages/NoteAddPage";
import NoteArchivedPage from "./pages/NoteArchivePage";
import NotFoundPage from "./pages/NotFoundPage";
import NoteDetailPage from "./pages/NoteDetailPage";

function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto py-8 px-4">
                <div className="mt-4">
                    <Routes>
                        <Route path="/simple-notes-app/" element={<NoteHomePage />} />
                        <Route path="/simple-notes-app/add" element={<NoteAddPage />} />
                        <Route path="/simple-notes-app/archive" element={<NoteArchivedPage />} />
                        <Route path="/simple-notes-app/notes/:id" element={<NoteDetailPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;
