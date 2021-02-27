import * as S from './style';
import {Avatar} from "../../atoms";
const Activity=({name,type,content})=>{
    return(
        <S.ActivityWrapper>
            <Avatar.ProfilePhoto name={name} />



        </S.ActivityWrapper>
    )
}
export default Activity;
