import React from 'react';
import ContactForm from './assets/components/ContactForm';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-gray-100 flex items-center justify-center px-4">
      <ContactForm />
    </main>
  );
};

export default App;
