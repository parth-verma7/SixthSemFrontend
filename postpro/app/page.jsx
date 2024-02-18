import Feed from "@components/Feed";

const Home = () => (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Create & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> AI-Powered Posts</span>
      </h1>
      <p className='desc text-center'>
        PostPro is an open-source AI post generating tool for modern world to
        discover, create and share creative posts
      </p>
      <Feed/>

    </section>
  );
  
  export default Home;