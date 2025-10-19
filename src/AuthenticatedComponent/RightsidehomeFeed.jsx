import React from "react";
import { User, TrendingUp } from "lucide-react";
function RightsidehomeFeed() {
  const suggestedUsers = [
    { name: "John Doe", handle: "@johndoe" },
    { name: "Jane Smith", handle: "@janesmith" },
    { name: "Alex Johnson", handle: "@alexj" },
  ];

  const trendingTopics = [
    { topic: "#ReactJS", tweets: "12.4K Tweets" },
    { topic: "#TailwindCSS", tweets: "8.7K Tweets" },
    { topic: "#WebDevelopment", tweets: "5.6K Tweets" },
  ];
  return (
    <div className="hidden items-center justify-center lg:flex lg:flex-1">
      {/* Right Side feed */}
      <div className="no-scrollbar hidden h-[100dvh] w-80 flex-col space-y-6 overflow-y-auto p-4 lg:flex">
        {/* Suggested Users */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-900">
          <h2 className="mb-3 text-lg font-semibold">Who to follow</h2>
          <ul className="space-y-3">
            {suggestedUsers.map((user, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.handle}</p>
                  </div>
                </div>
                <button className="text-sm font-medium text-blue-500">
                  Follow
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Trending Topics */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-900">
          <h2 className="mb-3 text-lg font-semibold">Trending</h2>
          <ul className="space-y-3">
            {trendingTopics.map((item, idx) => (
              <li
                key={idx}
                className="flex cursor-pointer flex-col rounded p-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                <p className="flex items-center gap-1 text-sm text-gray-500">
                  <TrendingUp size={16} /> Trending
                </p>
                <p className="font-medium">{item.topic}</p>
                <p className="text-sm text-gray-500">{item.tweets}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightsidehomeFeed;
