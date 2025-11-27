import React from 'react';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Content Creator',
        followers: '47K followers',
        image: 'SC',
        quote: 'I was stuck writing the same boring hooks. This changed everything. My last Reel hit 230K views in two days, and my engagement rate tripled.',
        platform: 'Instagram',
    },
    {
        name: 'Marcus Johnson',
        role: 'Social Media Manager',
        company: 'Tech Startup',
        image: 'MJ',
        quote: 'Twitter threads used to eat up my entire Monday. Now I knock them out in 30 minutes and they perform better than the ones I spent hours on.',
        platform: 'Twitter/X',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Small Business Owner',
        company: 'Handmade Jewelry',
        image: 'ER',
        quote: 'My posts were getting maybe 10 likes. Started using the carousel prompts and landed 15 new customers in a month. Worth way more than I paid.',
        platform: 'Instagram',
    },
    {
        name: 'David Park',
        role: 'Freelance Designer',
        followers: '22K followers',
        image: 'DP',
        quote: 'I write one thing and turn it into a week of content. Went from posting whenever I felt like it to showing up every single day.',
        platform: 'Multi-platform',
    },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Real Results from Real Creators
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Here's what happened when they stopped guessing and started using proven prompts
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start mb-4">
                                <div className="text-4xl mr-4">{testimonial.image}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    {testimonial.followers && (
                                        <p className="text-xs text-primary font-semibold">{testimonial.followers}</p>
                                    )}
                                    {testimonial.company && (
                                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
                            <div className="flex items-center text-xs text-gray-500">
                                <span className="bg-gray-100 px-2 py-1 rounded">{testimonial.platform}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                        <span className="text-yellow-400 text-2xl mr-2">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-700">
                            <strong>4.9/5</strong> average rating from 1,200+ creators
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
