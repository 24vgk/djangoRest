import React from 'react';

export default function App() {
    return (
            <div className='text-center p-3 bg-dark'>
                &copy; {new Date().getFullYear()} Copyright:{' 24VGK '}
                <a className='text-light' href='https://github.com/24vgk'>
                    GitHub
                </a>
            </div>
    );
}