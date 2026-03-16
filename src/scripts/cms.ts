declare global {
  interface Window {
    netlifyIdentity?: {
      on: (event: string, cb: (user?: unknown) => void) => void;
    };
  }
}

import CMS from "decap-cms-app";

CMS.init();

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity?.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}