// En app/[id].js
import { useRouter } from 'next/router';
import PostView from '../../PostView/PostView';
import Style from './style.module.css';


//https://nextjs.org/docs/app/api-reference/functions/use-params

function PostPage() {

  const router = useRouter();
  const { id } = router.query;

  return (
    
       <div className={Style.contentIDPOST}>
            <PostView id={''+id} />
       </div>
  );
}

export default PostPage;
