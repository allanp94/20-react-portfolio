import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiDownload } from "react-icons/fi";
import resume from "../../static/resumeAPirillis.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function useWindowDimensions() {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [hasWindow]);

    return windowDimensions;
  }

  const { width, height } = useWindowDimensions();

  return (
    <>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="is-size-3"
      >
        <FiDownload />
        Download File
      </a>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={width} height={height} />
      </Document>
    </>
  );
};

export default Resume;
