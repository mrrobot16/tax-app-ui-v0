import { IconProps } from 'types';

export function BotIcon({index, styles, height, width}: IconProps) {
    return (
        <img key={index} src="/assets/icons/boticon.png" alt="Bot Icon" height={height} width={width} style={styles}/>
    );
}
export default BotIcon;
