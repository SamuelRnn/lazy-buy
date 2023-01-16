/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useUpdatePictureMutation } from "../../redux/companyApi";

const UploadWidget = ({ email }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [updatePicture] = useUpdatePictureMutation();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dl5hwebwa",
        uploadPreset: "dev-uploads",
      },
      function (error, result) {
        if (result.info.secure_url && result.info.public_id) {
          updatePicture({
            email,
            profilePicture: {
              public_id: result.info.public_id,
              url: result.info.secure_url,
            },
          });
        }
      }
    );
  }, []);

  return (
    <button
      onClick={() => widgetRef.current.open()}
      className="bg-slate-900 text-white p-4 rounded hover:bg-fondo-200 hover:text-black"
    >
      Upload
    </button>
  );
};

export default UploadWidget;