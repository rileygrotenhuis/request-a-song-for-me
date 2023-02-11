'use client';

import { RecoilRoot } from 'recoil';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <RecoilRoot>
                <body>{children}</body>
            </RecoilRoot>
        </html>
    );
}
