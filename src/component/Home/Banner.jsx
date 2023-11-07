

const Banner = () => {
    return (
        <div className="hero min-h-[500px]" style={{backgroundImage: 'url(https://i.postimg.cc/QNJcSdR3/image.png)'}}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Lets explore the job world</h1>
            <p className="mb-5">Job placement services can help job seekers identify opportunities that align with their preference for working onsite, remotely, or in a hybrid setting, depending on the job market and employer needs.</p>
            <div>
               <input placeholder="search here" className="w-1/2 px-22 text-blue-600 py-4 rounded-lg text-center text-xl " type="text" />
              <div className="btn bg-blue-500 text-white border-0 -ml-3 -mb-2">
              
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
               <button className="">Search</button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Banner;