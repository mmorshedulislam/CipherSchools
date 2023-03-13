import React, { useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

const Share = () => {
  const shareUrl = `${window.location.href}`;
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
