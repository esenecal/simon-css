import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export function Scores() {
  return (
    <BrowserRouter>
        <main className="container-fluid bg-secondary text-center">
            <div>scores displayed here</div>
        </main>
    </BrowserRouter>
  );
}