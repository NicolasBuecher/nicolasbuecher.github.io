import { Button, Link } from "@mui/material";


interface DownloadButtonProps {
  href?: string;
  download?: string;
  children: string;
}

/**
 * Returns a React component displaying a download button and handling the download event.
 *
 * @param {string} props.href Path to the file to download
 * @param {string} props.download Name of the downloaded file
 * @param {string} props.children Button text content
 * @returns
 */
function DownloadButton({ href = "", download = "", children }: DownloadButtonProps): JSX.Element {

  return (
    <Button
      variant="contained"
      size="large"
      disabled={!href}
      component={Link}
      href={href}
      download={download}
    >
      {children}
    </Button>
  );

}

export default DownloadButton;
