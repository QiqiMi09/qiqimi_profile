"use client";

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/qiqi-mi-043259167/";

type LinkedInButtonProps = {
  className: string;
};

export function LinkedInButton({ className }: LinkedInButtonProps) {
  return (
    <button
      type="button"
      className={`cursor-pointer ${className}`}
      onClick={() => {
        const opened = window.open(LINKEDIN_PROFILE, "_blank", "noopener,noreferrer");
        if (!opened) {
          window.location.assign(LINKEDIN_PROFILE);
        }
      }}
    >
      领英
    </button>
  );
}
