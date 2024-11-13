import React from 'react';
import {postService} from "@/services/api.post.service";

type Params = { id: string };
const PostPage = async ({params}: {params: Params}) => {
    const post = await postService.getPostById( params.id);
    return (
        <div>
            {post?.id} : {post?.body}
        </div>
    );
};

export default PostPage;