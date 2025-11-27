import React from 'react';
import { trackEvent } from '../analytics';

const DonationModal = ({ isOpen, onClose, onDownload }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="relative z-10 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <span className="text-2xl">☕</span>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    Help Me Keep This Free 💙
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-600">
                                        I spent 40+ hours researching and testing these prompts so you don't have to.
                                        If this pack saves you even 1 hour, consider buying me a coffee.
                                        It helps me create more free tools like this!
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">
                                        ☕ = 1 hour of research | 🍕 = New prompt pack next month
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <a
                            href="https://buymeacoffee.com/nemesis_lab"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                trackEvent('click_donation');
                                setTimeout(onDownload, 2000); // Start download after a delay or let them come back and click skip
                            }}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-gray-900 hover:bg-yellow-500 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Buy me a Coffee ☕
                        </a>
                        <button
                            type="button"
                            onClick={onDownload}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Skip & Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationModal;
