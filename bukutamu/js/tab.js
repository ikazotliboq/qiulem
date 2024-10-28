function changeTab(activeTab) {
            const tabs = ['home', 'portfolio', 'tema', 'reseller'];

            tabs.forEach(tab => {
                const icon = document.getElementById(`${tab}-icon`);
                const iconDesktop = document.getElementById(`${tab}-icon-desktop`);
                const tabElement = document.getElementById(`${tab}-tab`);
                const tabDesktopElement = document.getElementById(`${tab}-tab-desktop`);
                const content = document.getElementById(`${tab}-content`);

                if (tab === activeTab) {
                    icon.src = `https://img.icons8.com/ios-filled/30/000000/${tab}.png`;
                    iconDesktop.src = `https://img.icons8.com/ios-filled/30/000000/${tab}.png`;
                    tabElement.classList.add('active');
                    tabDesktopElement.classList.add('active');
                    content.classList.add('active'); // Tampilkan konten
                } else {
                    icon.src = `https://img.icons8.com/ios-glyphs/30/000000/${tab}.png`;
                    iconDesktop.src = `https://img.icons8.com/ios-glyphs/30/000000/${tab}.png`;
                    tabElement.classList.remove('active');
                    tabDesktopElement.classList.remove('active');
                    content.classList.remove('active'); // Sembunyikan konten
                }
            });
        }

        document.getElementById('home-tab').addEventListener('click', () => changeTab('home'));
        document.getElementById('portfolio-tab').addEventListener('click', () => changeTab('portfolio'));
        document.getElementById('tema-tab').addEventListener('click', () => changeTab('tema'));
        document.getElementById('reseller-tab').addEventListener('click', () => changeTab('reseller'));

        document.getElementById('home-tab-desktop').addEventListener('click', () => changeTab('home'));
        document.getElementById('portfolio-tab-desktop').addEventListener('click', () => changeTab('portfolio'));
        document.getElementById('tema-tab-desktop').addEventListener('click', () => changeTab('tema'));
        document.getElementById('reseller-tab-desktop').addEventListener('click', () => changeTab('reseller'));

        changeTab('home'); // Secara default tab "Home" aktif pada saat awal