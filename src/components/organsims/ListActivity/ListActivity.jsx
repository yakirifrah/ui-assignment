import * as S from "./style";
import React from "react";
import {Activity} from "../../molecles";
import {Typography} from "../../atoms";

const ListActivity = ({activities}) => {
    return(
        <S.WrapperListActivity>
            {activities.length > 0 &&
            React.Children.toArray(
                activities.map(({ name, type, content }) => <Activity name={name} content={content} type={type} />)
            )}
            {activities.length === 0 && <Typography.SmallText>no messages!!</Typography.SmallText>}
        </S.WrapperListActivity>
    )


};

export default ListActivity;
