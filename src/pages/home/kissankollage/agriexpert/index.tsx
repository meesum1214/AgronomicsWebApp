import { GetServerSideProps } from "next";
import { getAllPosts } from "../../../../API/add";
import { GETTOKEN } from "../../../../config/API";
import AgriExpert from "../../../../templates/Home/KissanKollage/Components/AgriExpert";

export default ({posts}) => <AgriExpert posts={posts}/>

// export const getServerSideProps:GetServerSideProps = async (ctx) => {
//   // console.log(ctx.query)
  
//   const posts = await getAllPosts(1,ctx.query?.qwerty as string);
//   return {
//     props: {
//       posts: posts?.data?.data?.rows,
//     },
//   };
// }