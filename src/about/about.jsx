import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export function About() {
  return (
    <BrowserRouter>
        <main className="container-fluid bg-secondary text-center">
            <div>about displayed here</div>
        </main>
    </BrowserRouter>
  );
}