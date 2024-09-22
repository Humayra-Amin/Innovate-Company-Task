import React from 'react';

const Data = [
    {
        title: 'Art stuff',
        price: '598 TK',
        total: '1 of 09',
        color: 'bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]',
        images: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
        dsvbdColors: [
            'bg-gradient-to-r from-[#9747FF] to-[#651BC6]',
            'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
        ]
    },
    {
        title: 'ABCD',
        price: '777 TK',
        total: '1 of 19',
        color: 'bg-gradient-to-r from-[#0FA958] to-[#94FFE6]',
        images: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
        dsvbdColors: [
            'bg-gradient-to-r from-[#9747FF] to-[#651BC6]',
            'bg-gradient-to-r from-[#6D8BB4] to-[#016EFF]',
        ]
    },
    {
        title: 'EFGH',
        price: '58 TK',
        total: '1 of 64',
        color: 'bg-gradient-to-r from-[#2768BF] to-[#E6E6E6]',
        images: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
        dsvbdColors: [
            'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
            'bg-gradient-to-r from-[#9747FF] to-[#E76666]',
        ]
    },
    {
        title: 'XYZ',
        price: '0',
        total: '1 of 06',
        color: 'bg-gradient-to-r from-[#4C2F72] to-[#BE92FB]',
        images: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
        dsvbdColors: [
            'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
            'bg-gradient-to-r from-[#9747FF] to-[#E76666]',
        ]
    },
    {
        title: 'Art stuff',
        price: '598 TK',
        total: '1 of 09',
        color: 'bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]',
        images: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
        dsvbdColors: [
            'bg-gradient-to-r from-[#9747FF] to-[#651BC6]',
            'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
        ]
    },
    {
        title: 'ABCD',
        price: '777 TK',
        total: '1 of 19',
        color: 'bg-gradient-to-r from-[#0FA958] to-[#94FFE6]',
        images: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
        dsvbdColors: [
            'bg-gradient-to-r from-[#9747FF] to-[#651BC6]',
            'bg-gradient-to-r from-[#6D8BB4] to-[#016EFF]',
        ]
    },
    {
        title: 'EFGH',
        price: '58 TK',
        total: '1 of 64',
        color: 'bg-gradient-to-r from-[#2768BF] to-[#E6E6E6]',
        images: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
        dsvbdColors: [
            'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
            'bg-gradient-to-r from-[#9747FF] to-[#E76666]',
        ]
    },
    {
        title: 'XYZ',
        price: '0',
        total: '1 of 06',
        color: 'bg-gradient-to-r from-[#4C2F72] to-[#BE92FB]',
        images: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
        dsvbdColors: [
            'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
            'bg-gradient-to-r from-[#9747FF] to-[#E76666]',
        ]
    },
];

const Discover = () => {
    return (
        <div className="p-8 mt-20 w-full max-w-7xl mx-auto">
            <h1 className="text-3xl font-black mb-6 uppercase">Discover More</h1>

            {/* All Categories */}
            <div className="flex justify-between mb-8 flex-wrap">
                <div className="flex flex-wrap space-x-4 mb-4">
                    <button className="px-4 py-2 bg-[#3F05D4] text-white rounded-full">All Categories</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] rounded-full">Art</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] mt-2 md:mt-0 lg:mt-0 rounded-full">Celebrities</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] mt-2 md:mt-0 lg:mt-0 rounded-full">Gaming</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] mt-2 md:mt-0 lg:mt-0 rounded-full">Sport</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] mt-2 md:mt-0 lg:mt-0 rounded-full">Music</button>
                </div>
                <div>
                    <button className="flex items-center px-4 py-2 bg-[#E9E9E9] text-[#4000FF] rounded-full">
                        <Image  src="/ion_filter.png" className="mr-0 md:mr-2 lg:mr-2" />
                        All Filters
                    </button>
                </div>
            </div>

            {/* Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Data.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 w-full h-[405px] overflow-hidden p-4"
                    >
                        <div className={`${card.color} h-[215px] rounded-2xl`}></div>

                        <div className="p-4">
                            <div className="flex -space-x-3 -mt-8 mb-2">
                                {card.images.map((image, idx) => (
                                    <img
                                        key={idx}
                                        src={image}
                                        alt={`image ${idx + 1}`}
                                        className="w-8 h-8 rounded-full border-2 border-white"
                                    />
                                ))}
                            </div>

                            <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                            <div className="flex justify-between mb-4">
                                <p className="text-gray-500 mr-2">{card.price}</p>
                                <span className="text-gray-500 text-sm">{card.total}</span>
                            </div>

                            <div className="flex justify-between">
                                {card.dsvbdColors.map((gradient, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-2 text-sm text-white ${gradient} rounded-full`}
                                    >
                                        DSVBD
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discover;
