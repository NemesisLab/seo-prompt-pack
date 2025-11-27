import React from 'react';

const features = [
    {
        name: 'Viral Hooks & Scripts',
        description: 'Write attention-grabbing hooks and complete video scripts that stop the scroll. Perfect for Reels, TikToks, and YouTube Shorts.',
        icon: '▲',
    },
    {
        name: 'Thread & Carousel Builders',
        description: 'Turn a single idea into Twitter threads that get retweeted and Instagram carousels people actually swipe through.',
        icon: '◆',
    },
    {
        name: 'Content Repurposing',
        description: 'One blog post becomes 10+ social posts. Spend less time creating, more time engaging with your audience.',
        icon: '∞',
    },
    {
        name: 'Engagement Boosters',
        description: 'Write replies that get noticed, questions that spark debate, and CTAs that people actually click.',
        icon: '↗',
    },
];

const Features = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">What You Get</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        The exact prompts that drive real results
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        These aren't random templates. They're the same prompts creators with 50K+ followers use daily to grow their accounts.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature, index) => (
                            <div key={feature.name} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white text-2xl">
                                        {feature.icon}
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {feature.description}

                                    {/* Visual Examples for first two features */}
                                    {index === 0 && (
                                        <img
                                            src="/viral-hook-example.png"
                                            alt="Example of viral hook"
                                            className="mt-4 rounded-lg shadow-md w-full max-w-xs"
                                        />
                                    )}
                                    {index === 1 && (
                                        <img
                                            src="/thread-example.png"
                                            alt="Example of Twitter thread"
                                            className="mt-4 rounded-lg shadow-md w-full max-w-xs"
                                        />
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Features;
