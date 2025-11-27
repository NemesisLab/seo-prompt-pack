import React from 'react';

const Hero = ({ onGetStarted }) => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                Go Viral on Social Media in 2025 with <span className="text-primary">Free AI Prompts</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                12 battle-tested AI prompts to create scroll-stopping content for Instagram, TikTok, Twitter/X, and more. Stop guessing—start growing.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <button
                                        onClick={onGetStarted}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 md:py-4 md:text-lg transition-all transform hover:scale-105"
                                    >
                                        Get the Pack for Free
                                    </button>
                                </div>
                            </div>

                            {/* Social Proof */}
                            <div className="mt-4 sm:text-center lg:text-left">
                                <p className="text-sm text-gray-600">
                                    🔥 <strong>2,847 creators</strong> downloaded this week
                                </p>
                            </div>

                            {/* Urgency Banner */}
                            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                <p className="text-sm text-yellow-800">
                                    ⚡ <strong>Bonus:</strong> Get our "Viral Formula Cheat Sheet" (worth $9) FREE when you download today!
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
                <div className="text-9xl select-none opacity-10 filter blur-sm">
                    ✍️ 🤖 🚀
                </div>
            </div>
        </section>
    );
};

export default Hero;
