import React from 'react';
import {userService} from "@/services/api.user.service";

type Params = { id: string };
const UserPage = async ({params}: {params: Params}) => {
    const user = await userService.getUserById( params.id);
    return (
        <div>
            {user?.name} : {user?.email}
        </div>
    );
};

export default UserPage;