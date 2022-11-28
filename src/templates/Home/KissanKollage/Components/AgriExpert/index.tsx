import posts from "../../../../../interface/posts";
import Posts from "./Components/Posts";
export default () => {

  return (
    <div className="flex justify-center py-8">
      <div className="min-h-screen w-full max-w-[1100px]">
        <div className="grid grid-cols-2 gap-10">
          {
            posts.map(({ id, attachment, issue, comments }: any) => (
              <div key={id + 'nvgmn'} className='cursor-pointer'>
                <Posts key={id + 'asdsa'} image={attachment} post={issue} comments={comments} />
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}