import React from 'react';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] px-6 py-12 text-white">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">KeenKeeper</h2>

                <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-white/75">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                <p className="mt-6 text-sm font-semibold">Social Links</p>

                <div className="mt-3 flex justify-center gap-3">
                    <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
                    <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
                    <img src={twitterIcon} alt="X" className="h-8 w-8" />
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
