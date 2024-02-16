import React from 'react'

const Footer = () => {
    return (
        <footer className='h-full w-full'>
            <div className="flex flex-col items-center justify-center bg-gray-800 py-6">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-xl font-bold text-white">Usure Professionnelle</h1>
                            <p className="text-white">© 2021 Usure Professionnelle</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer