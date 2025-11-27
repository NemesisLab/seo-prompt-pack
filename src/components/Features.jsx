import React from 'react';

const features = [
    {
        name: 'Keyword Research',
        description: 'Uncover high-intent long-tail keywords that your competitors are missing.',
        icon: '🔍',
    },
    {
        name: 'Skyscraper Outlines',
        description: 'Generate comprehensive outlines that structure your content for featured snippets.',
        icon: '🏗️',
    },
    {
        name: 'Humanizer Prompts',
        description: 'Rewrite AI-generated text to sound natural, engaging, and undetectable.',
        icon: '🗣️',
    },
    {
        name: 'Meta Description Magic',
        description: 'Create click-worthy titles and meta descriptions in seconds.',
        icon: '✨',
    },
];

const Features = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">What's Inside</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to rank
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        This isn't just a random list. It's a workflow used by pro SEOs to scale content production.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white text-2xl">
                                        {feature.icon}
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Features;
