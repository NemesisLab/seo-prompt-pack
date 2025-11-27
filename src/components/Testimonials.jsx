import React from 'react';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Content Creator',
        followers: '47K followers',
        image: '👩‍💼',
        quote: 'The viral hook generator is insane. I used it for my last Reel and got 230K views in 48 hours. My engagement rate jumped from 3% to 12%.',
        platform: 'Instagram',
    },
    {
        name: 'Marcus Johnson',
        role: 'Social Media Manager',
        company: 'Tech Startup',
        image: '👨‍💻',
        quote: 'I was spending 6 hours a week writing Twitter threads. Now it takes me 30 minutes. The thread builder prompt is a game-changer for our brand.',
        platform: 'Twitter/X',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Small Business Owner',
        company: 'Handmade Jewelry',
        image: '👩‍🎨',
        quote: 'I had no idea how to make my posts stand out. These prompts helped me create carousels that actually convert. Got 15 new customers last month!',
        platform: 'Instagram',
    },
    {
        name: 'David Park',
        role: 'Freelance Designer',
        followers: '22K followers',
        image: '🧑‍🎨',
        quote: 'The content repurposing prompt saved my life. I turn one blog post into 10+ social posts now. My consistency went from sporadic to daily.',
        platform: 'Multi-platform',
    },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        What Creators Are Saying
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Join thousands of creators who've transformed their social media game
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
