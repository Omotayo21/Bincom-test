import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CVViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">My CV</h2>
      <div className="border rounded-lg overflow-hidden">
        <Viewer
          fileUrl="/path/to/your-cv.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </div>
  );
};

export default CVViewer;
