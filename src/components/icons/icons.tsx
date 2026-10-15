import { FontAwesomeIcon, type CSSVariables } from "@fortawesome/react-fontawesome";
import { faBluesky, faGithub, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import type { CSSProperties } from "react";

const iconClasses = "scale-125 px-2";
const iconStyle: CSSProperties & CSSVariables = {
    color: "#ffb9e7",
};

const TumblrIcon = () => {
    return (
        <FontAwesomeIcon icon={faTumblr} className={iconClasses} style={iconStyle} />
    );
};

const GithubIcon = () => {
    return (
        <FontAwesomeIcon icon={faGithub} className={iconClasses} style={iconStyle} />
    );
};

const BlueskyIcon = () => {
    return (
        <FontAwesomeIcon icon={faBluesky} className={iconClasses} style={iconStyle} />
    );
};

const HeartIcon = () => {
    return <FontAwesomeIcon icon={faHeart} className={iconClasses} style={iconStyle} />;
};

export { TumblrIcon, GithubIcon, BlueskyIcon, HeartIcon };
