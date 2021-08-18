import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiDownload } from "react-icons/fi";
import resume from "../../static/resumeAPirillis.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {}, []);

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
        <Page pageNumber={pageNumber} width={width} />
      </Document>
    </>
  );
};

export default Resume;
