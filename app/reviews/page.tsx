'use client';

import { Tweet } from 'react-tweet';

const Reviews = () => {
  const tweetIds = [
    '1884952753409069323',
    '1884963004631937523',
    '1884961669170008300',
    '1884998064294838489',
    '1884969622719352849',
    '1884990544570364023',
    '1884967728454267182',
  ];

  return (
    //   <h1
    //     className="text-3xl font-bold mb-8 text-center"
    //     aria-label="Love from Twitter"
    //   >
    //     Love from Twitter ❤️{' '}
    //     <span className="sr-only">- User reviews and feedback</span>
    //   </h1>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {tweetIds.map((id) => (
          <div key={id} data-theme="dark">
            <Tweet id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
