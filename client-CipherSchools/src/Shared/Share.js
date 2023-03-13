import React, { useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

const Share = () => {
  const shareUrl = `${window.location.href}`;
  const [shareWith, setShareWith] = useState(false);
  return (
    <div className="flex gap-x-3">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
    </div>
  );
};

export default Share;
