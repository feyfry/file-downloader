import { useState } from 'react';
import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DownloadSection from './components/DownloadMenu';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('frontend');

  const links = {
    frontend: [
      { name: 'Allfood Template', url: './assets/frontend/allfood-master.zip' },
      { name: 'Bakery Template', url: './assets/frontend/bakery-website-template.zip' },
      { name: 'Bootstrap restaurant Template', url: './assets/frontend/bootstrap-restaurant-template.zip' },
      { name: 'Feane Template', url: './assets/frontend/feane-1.0.0.zip' },
      { name: 'Organic Food Template', url: './assets/frontend/organic-food-website-template.zip' },
    ],
    admin: [
      { name: 'Edmate Panel Template', url: './assets/panel-admin/edmate-html-panel.zip' },
      { name: 'Freedash Lite Panel Template', url: './assets/panel-admin/FreeDash-lite-master.zip' },
      { name: 'Nice Admin Panel Template', url: './assets/panel-admin/NiceAdmin.zip' },
      { name: 'Purple Panel Template', url: './assets/panel-admin/purple-free.zip' },
      { name: 'Veltrix Panel Template', url: './assets/panel-admin/veltrix-v5-panel.zip' },
    ],
  };

  return (
    <div>
      <NavigationBar setActiveMenu={setActiveMenu} />
      <HeroSection />
      <DownloadSection links={links[activeMenu]} />
      <footer>
        <p>
          &copy; {new Date().getFullYear()} VesperLoad. All rights reserved.{' '}
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
