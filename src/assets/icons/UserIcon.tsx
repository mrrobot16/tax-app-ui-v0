import { IconProps } from 'types';

export function UserIcon({index, styles, height, width}: IconProps) {
    return (
        <img src="/assets/icons/usericon.png" alt="User Icon" height={height} width={width} style={styles}/>
    );
}
export default UserIcon;
