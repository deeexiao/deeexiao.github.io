"use client";

interface Interest {
  id: string;
  title: string;
  imagePlaceholder: string;
  imageUrl: string;
  link?: string;
}

const interests: Interest[] = [
  {
    id: "songwriting",
    title: "🎵 Songwriting",
    imagePlaceholder: "Music Image Placeholder",
    imageUrl: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5ea805b8-2a39-4275-8e47-6737cbe35fd6/IMG_6299_2/w=640,quality=90,fit=scale-down",
    link: "https://music.163.com/#/artist/album?id=34618349"
  },
  {
    id: "cooking",
    title: "🍨 Cooking",
    imagePlaceholder: "Cooking Image Placeholder",
    imageUrl: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/61c5cc42-d216-437f-9552-5e647d99d34f/IMG_0263/w=640,quality=90,fit=scale-down",
    link: "/cooking"
  },
  {
    id: "traveling",
    title: "✈️ Travelling",
    imagePlaceholder: "Travel Image Placeholder",
    imageUrl: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/668725fc-657a-4ced-97ef-e255eb9334f0/IMG_6458/w=640,quality=90,fit=scale-down",
    link: "https://m.mafengwo.cn/user/profile/weng?uid=78173157&mfw_chid=5944&oth_chid_data=88cf04b9-6a72-4dd0-b7f5-af119b970a9a"
  },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="section pt-12 pb-16">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">🎵☁️ Personal Interests</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <div key={interest.id} className="project-card project-link overflow-hidden rounded-lg flex flex-col h-full transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:transform hover:scale-[1.02] p-4 text-center">
              {interest.link ? (
                <a href={interest.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex flex-col">
                  <div className="relative w-full aspect-square mb-4 bg-secondary rounded-lg overflow-hidden">
                    {interest.imageUrl ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={interest.imageUrl} 
                          alt={interest.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black opacity-20 hover:opacity-10 transition-opacity"></div>
                      </div>
                    ) : (
                      <div className="fallback-image absolute inset-0 flex flex-col items-center justify-center text-accent p-3">
                        <svg className="w-8 h-8 mb-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <p className="text-center text-sm">{interest.imagePlaceholder}</p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-primary mt-2">{interest.title}</h3>
                  <span className="text-xs text-accent mt-2 block">Click to explore</span>
                </a>
              ) : (
                <>
                  <div className="relative w-full aspect-square mb-4 bg-secondary rounded-lg overflow-hidden">
                    {interest.imageUrl ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={interest.imageUrl} 
                          alt={interest.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black opacity-20"></div>
                      </div>
                    ) : (
                      <div className="fallback-image absolute inset-0 flex flex-col items-center justify-center text-accent p-3">
                        <svg className="w-8 h-8 mb-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <p className="text-center text-sm">{interest.imagePlaceholder}</p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-primary mt-2">{interest.title}</h3>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 